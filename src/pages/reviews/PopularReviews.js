import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css"
import Asset from '../../components/Asset';

const PopularReviews = ({ smallscreen }) => {
  
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
    className={`${appStyles.Content} ${ smallscreen && "d-lg-none text-center mb-3"
      }`}
    >
      {popularReviews.results.length ? (
        <>
          <p>Most discussed reviews!</p>
          {smallscreen ? (
            <div className='d-flex justify-content-around'>
              {popularReviews.results.slice(0, 3).map((review) => (
                <p key={review.id}>{review.title}</p>
              ))}
            </div>
          ) : (
            popularReviews.results.map((review) => (
              <p key={review.id}>{review.title}</p>
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularReviews