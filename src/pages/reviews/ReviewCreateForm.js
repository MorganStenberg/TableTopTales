import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Alert from "react-bootstrap/Alert";

import styles from "../../styles/ReviewEditCreateForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import Upload from "../../assets/camera_upload.png"

function ReviewCreateForm() {

  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    rating: "",
    game: "", 
    image: "",
  });
  const { title, content, image, rating, game } = postData;


  const formFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}

        />
      </Form.Group>
      {errors.title?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={12}
          name="content"
          value={content}

        />
      </Form.Group>
      {errors.content?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Game</Form.Label>
        <Form.Control
          as="text"
          name="game"
          value={game}

        />
      </Form.Group>
      {errors.content?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}

        <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          as="select"
          name="rating"
          value={rating}

        >
        
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      </Form.Control>
      </Form.Group>
      {errors.rating?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Orange}`}
        onClick={() => { }}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Orange}`} type="submit">
        Share your tale!
      </Button>
    </div>
  );

  return (
    <Form>
      <Row> 

        <Col className="py-2 p-md-2" md={7} lg={8}>
          <Container className={appStyles.Content}>{formFields}</Container>
        </Col>
        
        <Col className="d-none d-md-block p-0 p-md-2">
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click to upload an image with your review"/>
              </Form.Label>

            </Form.Group>
            <div className="d-md-none">{formFields}</div>
          </Container>

        </Col>
      </Row>
    </Form>
  );
}

export default ReviewCreateForm;