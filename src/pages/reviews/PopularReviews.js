import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css"
import Asset from '../../components/Asset';

const PopularReviews = () => {
  
  const [reviewData, setReviewData] = useState({
    PopularReviews: { results: [] },
  });

  const { PopularReviews } = reviewData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(
                "/reviews/?ordering=-comments_count"
            );
            setReviewData(prevState => ({
                ...prevState,
                PopularReviews: data
            }))
        } catch (err){
            console.log(err)
        }
    };

    handleMount();
  }, [currentUser]);
  


    return (
    <Container className={appStyles.Content}>
      {PopularReviews.results.length ? (
        <>
          <p>Most discussed reviews!</p>
          {PopularReviews.results.map((review) => (
          <p key={review.id}>{review.title}</p>
        ))}
      </>
      ) : ( 
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularReviews