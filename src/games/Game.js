import React, { useState } from 'react'
import styles from "../styles/Game.module.css"
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosRes } from '../api/axiosDefaults';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

// Credit to Code Institute for structure of Comment component
const Game = (props) => {

  const {
    id,
    title,
    description,
    review_connect,
    genre,
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

  


    return (
        <>
            <Card>
                <Col>
                    <Row>
                        <Card.Body>
                            <Card.Title>
                                {title}
                            </Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Row>

                    <Row>
                        <Col>
                            <Card.Body>
                                <Card.Text>
                                    {genre}
                                </Card.Text>
                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Body>
                                <Card.Text>
                                    {review_connect}
                                </Card.Text>
                            </Card.Body>

                        </Col>

                    </Row>

                </Col>
                <Button
                    className={`${btnStyles.Button} ${btnStyles.Orange}`}
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
                


            </Card>

        </>
    )
}

export default Game