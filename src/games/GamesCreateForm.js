import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Alert from "react-bootstrap/Alert";


import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";


import { useHistory } from "react-router";
import { axiosReq } from "../api/axiosDefaults";


function GamesCreateForm() {

  const [errors, setErrors] = useState({});

  const [gameData, setGameData] = useState({
    title: "",
    description: "",
    genre: "",
    review_connect: "", 
  
  });

  const { title, description, genre, review_connect } = gameData;

  const [genres, setGenres] = useState([]);

  // Fetching genres and structuring them to fit with react options
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const {data} = await axiosReq.get('/genres/')
        const structuredData = data.map((item) => ({
          value: item[0],
          label: item[1]
        }));

        setGenres(structuredData);
      } catch(err) {
        console.log(err)
      }
    };
    fetchGenres();
  }, []);

  const history = useHistory()

  const handleChange = (event) => {
    setGameData({
      ...gameData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('title', title)
    formData.append('description', description)
    formData.append('genre', genre)
    formData.append('review_connect', review_connect)
    
    try {
      await axiosReq.post('/games/', formData);
      history.push('/wishlist/')
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
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={description}
          onChange={handleChange}

        />
      </Form.Group>
      {errors.description?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}

        
        <Form.Group>
        <Form.Label>Genre</Form.Label>
        <Form.Control
          as="select"
          name="genre"
          value={genre}
          onChange={handleChange}
        >
      
      {genres.map((genreChoices) => (
        <option key={genreChoices.value} value={genreChoices.value}>{genreChoices.label}</option>
      ))}
      
      </Form.Control>
      </Form.Group>
      {errors.genre?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}
        

      <Button
        className={`${btnStyles.Button} ${btnStyles.Orange}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Orange}`} type="submit">
        Add game
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
            
            
            <div className="d-md-none">{formFields}</div>
          </Container>

        </Col>
      </Row>
    </Form>
  );
}

export default GamesCreateForm;