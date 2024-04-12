import React, { useState } from 'react'
import styles from "../styles/Game.module.css"

import { Card } from 'react-bootstrap';

import { axiosRes } from '../api/axiosDefaults';

// Credit to Code Institute for structure of Comment component
const Game = (props) => {

  const {
    id,
    title,
    description,
    review_connect,
    genre,
  } = props;


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
        <col>
        <row>
        <Card.Body>
        <Card.Title>
            {title}
        </Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
        </Card.Body>
        </row>

        <row>
            <col>
            <Card.Body>
                <Card.Text>
                    {genre}
                </Card.Text>
            </Card.Body>

            </col>

            <col>
            <Card.Body>
                <Card.Text>
                    {review_connect}
                </Card.Text>
            </Card.Body>
            
            </col>

        </row>

        </col>
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