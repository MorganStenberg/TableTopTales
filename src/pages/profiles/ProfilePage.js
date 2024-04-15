import React, { useEffect, useState } from "react";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";


function ProfilePage() {
    
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const { setProfileData } = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile } ] =
                    await Promise.all([
                        axiosReq.get(`/profiles/${id}/`),
                    ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));
    
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [id, setProfileData, currentUser,]);


    return (
        <Row>
            <Col>
                <p>placeholder for rendering profile content</p>
            </Col>
        </Row>
    )
};



export default ProfilePage;