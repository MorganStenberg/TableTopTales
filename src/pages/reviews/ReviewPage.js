import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Review from "./Review";



// Credit to Code Institute Walkthrough
function ReviewPage() {
    const { id } = useParams();
    const [review, setReview] = useState({results: [] });

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
        <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Review {...review.results[0]} setReview={setReview} ReviewPage />
          
          <Container className={appStyles.Content}>
        
            <p>Placeholder for comments</p>
          </Container>
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Most discussed reviews placeholder</p>
        </Col>
      </Row>
    );
  }

export default ReviewPage;