import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css"

const PopularReviewsComments = () => {
  
  const [reviewData, setReviewData] = useState({
    PopularReviewsComments: { results: [] },
  });

  const { PopularReviewsComments } = reviewData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(
                "/reviews/?ordering=-comments_count"
            );
            setReviewData(prevState => ({
                ...prevState,
                PopularReviewsComments: data
            }))
        } catch (err){
            console.log(err)
        }
    };

    handleMount();
  }, [currentUser]);
  


    return (
    <Container className={appStyles.Content}>
    <p>Most discussed reviews!</p>
        {PopularReviewsComments.results.map((review) => (
            <p key={review.id}>{review.title}</p>
        ))}
    </Container>
  )
}

export default PopularReviewsComments