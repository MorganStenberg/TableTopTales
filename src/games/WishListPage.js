import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import { axiosReq } from "../api/axiosDefaults";
import { Link } from 'react-router-dom/cjs/react-router-dom';

import Asset from "../components/Asset";

import InfiniteScroll from "react-infinite-scroll-component";
import Game from "./Game";



// Credit to Code Institute Walkthrough
function WishListPage({filter = ""}) {

    const [games, setGames] = useState({results: [] });

    useEffect(() => {
        const fetchGames = async () => {
          try {
            const {data: games } = await axiosReq.get(`/games/?${filter}/`);
            setGames(games);
          } catch(err) {
            console.log(err)
          }
        }
        fetchGames();
    
      }, [filter])
  
    return (
        <Row className="h-100">
          <Col className="py-2 p-0 p-lg-2" lg={12}>
          <Game />
            
            <Container className={appStyles.Content}>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Orange}`}
                >
                    <Link to="/games/create">
                        Add a game to your wishlist!
                    </Link>

                </Button>
              
            </Container>
          </Col>
        </Row>
      );
    }
  
  export default WishListPage;