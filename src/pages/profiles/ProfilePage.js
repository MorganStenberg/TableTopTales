import React, { useEffect, useState } from "react";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import InfiniteScroll from "react-infinite-scroll-component";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png"
import MostPopularReviews from "../reviews/MostPopularReviews";
import Review from "../reviews/Review";
import { ProfileEditDropdown } from "../../components/MoreDropDown";

// Credit to Code Institute Moments Walkthrough for structure of ProfilePage
function ProfilePage() {

    const currentUser = useCurrentUser();
    const { id } = useParams();
    const { setProfileData } = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const [profileReviews, setProfileReviews] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }, { data: profileReviews }] =
                    await Promise.all([
                        axiosReq.get(`/profiles/${id}/`),
                        axiosReq.get(`/reviews/?owner__profile=${id}`)
                    ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
                setProfileReviews(profileReviews);
                setHasLoaded(true);
            } catch (err) {

            }
        };

        fetchData();
    }, [id, setProfileData, currentUser,]);

    const mainProfile = (
        <>
            {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
            <Row noGutters className="mr-3 px-3">
                <Col lg={3} className="text-lg-left d-flex">
                    <span>
                        <Image
                            roundedCircle
                            className={styles.ProfileImage}
                            rounded src={profile?.image}>
                        </Image>
                    </span>
                </Col>
                <Col lg={6} className="mt-4 pl-5">
                    <h3 className="mb-3"><strong>{profile?.owner}</strong></h3>
                    <p>Bio: {profile?.content}</p>
                    <p>Favorite Game: {profile?.favorite_game}</p>

                </Col>

                <Col lg={3} className="text-right">
                    <p className={`${styles.ReviewsCount}`}>
                        {profile?.review_count} Reviews
                    </p>
                </Col>
            </Row>
        </>
    );

    const mainProfileReviews = (
        <>

            <p className={`${styles.Reviews} text-center`}><strong>Reviews written by {profile?.owner}</strong></p>

            {profileReviews.results.length ? (
                <InfiniteScroll
                    dataLength={profileReviews.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profileReviews.next}
                    next={() => fetchMoreData(profileReviews, setProfileReviews)}
                >
                    {profileReviews.results.map((review) => (
                        <Review
                            reviewId={review.id}
                            num_of_comments={review.comments_count}
                            key={review.id} {...review} setReviews={setProfileReviews}
                        />
                    ))}
                </InfiniteScroll>
            ) : (
                <Asset
                    src={NoResults}
                    message={`${profile?.owner} hasn't written any reviews yet.`}
                />
            )}
        </>
    );


    return (
        <Row>
            <Col lg={9} className={`${styles.ProfilePageContainer} py-2 p-0 p-lg-2`}>
                <MostPopularReviews smallscreen />
                <Container className={`${appStyles.Content} ${styles.ProfilePageContainer}`}>
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            {mainProfileReviews}
                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
            <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
                <MostPopularReviews />
            </Col>
        </Row>
    )
};



export default ProfilePage;