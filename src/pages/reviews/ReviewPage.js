import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Review from "./Review";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentCreateForm from "../comments/CommentCreateForm";
import Comment from "../comments/Comment";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";



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
                const [{data: review}, {data: comments }] = await Promise.all([
                    axiosReq.get(`/reviews/${id}`),
                    axiosReq.get(`/comments/?review=${id}`)
                ]);
                setReview({results: [review]})
                setComments(comments);

            } catch(err){
                //console.log(err)
            }
        }

        handleMount()
    }, [id])


  
    return (
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={12}>
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
            {comments.results.length ? (
              <InfiniteScroll 
              children={
                comments.results.map(comment => (
                  <Comment 
                  key={comment.id} 
                  {...comment}
                  setReview={setReview}
                  setComments={setComments}/>
                ))
              }
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
              />
              
            ) : currentUser ? (
              <span>Be the first to start the discussion!</span>
            ) : (
              <span>No comments..</span>
            )}
          </Container>
        </Col>
      </Row>
    );
  }

export default ReviewPage;