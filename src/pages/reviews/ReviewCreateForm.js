import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/ReviewEditCreateForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import Upload from "../../assets/camera_upload.png"
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

// Credit to Code Institute for event handlers and image input
function ReviewCreateForm() {

  const [errors, setErrors] = useState({});

  const [reviewData, setReviewData] = useState({
    title: "",
    content: "",
    rating: "",
    game: "", 
    image: "",
  });
  const { title, content, image, rating, game } = reviewData;

  const imageInput = useRef(null)
  const history = useHistory()

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleQuillChange = (content) => {
    setReviewData({
      ...reviewData,
      content: content,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length){
      URL.revokeObjectURL(image);
      setReviewData({
        ...reviewData,
        image: URL.createObjectURL(event.target.files[0])
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('title', title)
    formData.append('content', content)
    formData.append('rating', rating)
    formData.append('game', game)
    formData.append('image', imageInput.current.files[0])
    
    try {
      const {data} = await axiosReq.post('/reviews/', formData);
      history.push(`/reviews/${data.id}`)
    } catch(err){
      console.log(err)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data)
      }
    }
  }

  const formFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}

        />
      </Form.Group>
      {errors.title?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <ReactQuill 
        value={content}
        onChange={handleQuillChange}/>
        
      </Form.Group>
      {errors.content?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Game</Form.Label>
        <Form.Control
          type="text"
          name="game"
          value={game}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.game?.map((message, idx) => (
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
          onChange={handleChange}
        >
        
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>

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
    <Form onSubmit={handleSubmit}>
      <Row> 

        <Col className="py-2 p-md-2" md={7} lg={8}>
          <Container className={appStyles.Content}>{formFields}</Container>
        </Col>
        
        <Col className="d-none d-md-block p-0 p-md-2">
          <Container
            className={`${appStyles.Content} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                <figure>
                <Image className={appStyles.Image} src={image} rounded/>
                </figure>
                <div>
                <Form.Label
                  className={`
                  ${btnStyles.Button} 
                  ${btnStyles.Orange} btn`}
                  htmlFor="image-upload">
                  Change image
                </Form.Label>
                </div>
                </>
              ) : (
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click to upload an image with your review"/>
              </Form.Label>
              )}
              
              <Form.File 
              id="image-upload"
              accept="image/*" 
              onChange={handleChangeImage}
              ref={imageInput}
              />
            </Form.Group>

            <div className="d-md-none">{formFields}</div>
          </Container>

        </Col>
      </Row>
    </Form>
  );
}

export default ReviewCreateForm;