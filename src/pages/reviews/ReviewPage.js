import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Review from "./Review";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentCreateForm from "../../comments/CommentCreateForm";

// Credit to Code Institute Walkthrough
function ReviewPage() {
    const { id } = useParams();
    const [review, setReview] = useState({results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: review}] = await Promise.all([
                    axiosReq.get(`/reviews/${id}`)
                ])
                setReview({results: [review]})
                console.log(review)
            } catch(err){
                console.log(err)
            }
        }

        handleMount()
    }, [id])


  
    return (
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={9}>
        <Review {...review.results[0]} setReviews={setReview} reviewPage />
          
          <Container className={appStyles.Content}>
        
            {currentUser ? (
              <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              review={id}
              setReview={setReview}
              setComments={setComments}
            />
            ) : comments.results.length ? (
              "Comments"
            ) : null}
          </Container>
        </Col>
        <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        <p>Most discussed reviews placeholder</p>
        </Col>
      </Row>
    );
  }

export default ReviewPage;