import React from 'react'
import styles from "../styles/Game.module.css"
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosRes } from '../api/axiosDefaults';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';

// Credit to Code Institute for structure of Comment component
const Game = (props) => {

  const {
    id,
    title,
    description,
    genre,
    saved_review_connect,
  } = props;

  const history = useHistory()

  const handleEdit = () => {
    history.push(`/games/${id}/edit`)
  }

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/games/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err)
    }
  };

  console.log(genre.key)

  


  return (
    <>
      <Card className='mb-2'>
        <Row>
          <Col md={6}>  
            <Card.Body className={styles.CardBody}>
              <Card.Title>
                <span className='d-flex'>
                  <h5 className='mr-1'>Title:</h5>
                  {title}
                </span>
              </Card.Title>
              <Card.Text>
                <span className='d-flex'>
                  <h5 className='mr-1'>Description:</h5>
                  {description}
                </span>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col md={6}>
            <Card.Body className={styles.CardBody}>
              <Card.Text>
              <span className='d-flex'> 
              <h5 className='mr-1'>Genre:</h5> {genre}
              </span>
                
                </Card.Text>
              <Card.Text>
                <h5 className='mb-1'>Connected review:</h5>
                {saved_review_connect && saved_review_connect.map((review) => (
                  <Link to={`reviews/${review.id}`} key={review.id}>
                    <span>{review.review}</span>
                  </Link>
                ))}
              </Card.Text>
              
            </Card.Body>
          </Col>
        </Row>

        <Row className="mt-1 mb-2">
        <Col className="text-center">
          <Button
            className={`${btnStyles.Button} ${btnStyles.Orange} mr-2`}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Orange}`}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Col>
      </Row>
      </Card>
    </>
  );
  



    
}

export default Game