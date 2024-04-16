import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import { axiosReq } from "../api/axiosDefaults";
import { Link } from 'react-router-dom/cjs/react-router-dom';

import Asset from "../components/Asset";
import noGames from "../assets/no-results.png"
import { fetchMoreData } from "../utils/utils";

import InfiniteScroll from "react-infinite-scroll-component";
import Game from "./Game";
import MostPopularReviews from "../pages/reviews/MostPopularReviews";



function WishListPage({ filter = "" }) {

  const [games, setGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axiosReq.get(`/games/?${filter}/`);
        setGames(data);
        setHasLoaded(true)
      } catch (err) {
        //console.log(err)
      }
    }
    fetchGames();

  }, [filter])

  return (

    <Row className="h-100">

      <Col className="py-2 p-0 p-lg-2" lg={9}>
        <h4 className="text-center">Games that have been added to wishlist</h4>

        {hasLoaded ? (
          <>
            {games.results.length ? (
              <InfiniteScroll
                children={
                  games.results.map((game) => (
                    <Game key={game.id} {...game} setGames={setGames} />
                  ))
                }
                dataLength={games.results.length}
                loader={<Asset spinner />}
                hasMore={!!games.next}
                next={() => fetchMoreData(games, setGames)}
              />

            ) : (
              <Asset
                src={noGames}
                message="You have not added any games yet!"
              />
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}

        <Container className={`text-center `}>

          <Link className={`mt-3 ${btnStyles.LinkButton}`} to="/games/create">
            Add a game to your wishlist!
          </Link>

        </Container>
      </Col>
      <Col md={3} className="d-none d-lg-block p-0 p-lg-2">
        <MostPopularReviews />
      </Col>
    </Row>
  );
}
  
  export default WishListPage;