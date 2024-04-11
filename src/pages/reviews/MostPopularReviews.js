import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import Container from "react-bootstrap/Container";
import styles from "../../styles/MostPopularReviews.module.css"
import appStyles from "../../App.module.css"
import Asset from '../../components/Asset';
import PopularReview from './PopularReview';

const MostPopularReviews = ({ smallscreen }) => {
  
  const [reviewData, setReviewData] = useState({
    popularReviews: { results: [] },
  });

  const { popularReviews } = reviewData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(
                "/reviews/?ordering=-comments_count"
            );
            setReviewData(prevState => ({
                ...prevState,
                popularReviews: data
            }))
        } catch (err){
            console.log(err)
        }
    };

    handleMount();
  }, [currentUser]);
  


  return (
    <Container 
    className={`${appStyles.Content} ${styles.Border} ${ smallscreen && "d-lg-none text-center mb-3"
      }`}
    >
      {popularReviews.results.length ? (
        <>
          <div className={styles.Header}>
            <h5>Most discussed reviews!</h5>
          </div>
          

          {smallscreen ? (
            <div className='d-flex justify-content-around'>
              {popularReviews.results.slice(0, 3).map((review) => (
                <PopularReview key={review.id} review={review} smallscreen/>
              ))}
            </div>
          ) : (
            popularReviews.results.slice(0, 5).map((review) => (
              <PopularReview key={review.id} review={review}/>
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default MostPopularReviews