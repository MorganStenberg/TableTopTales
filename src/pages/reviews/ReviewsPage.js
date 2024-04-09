import React from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/ReviewsPage.module.css";

function ReviewsPage() {
  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={9}>
        
        <p>List of Reviews</p>
      </Col>
      <Col md={3} className="d-none d-lg-block p-0 p-lg-2">
        <p>Most discussed reviews placeholder</p>
      </Col>
    </Row>
  );
}

export default ReviewsPage;