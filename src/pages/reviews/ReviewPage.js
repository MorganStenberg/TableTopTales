import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";




function ReviewPage() {
    


  
    return (
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>

          
          <Container className={appStyles.Content}>
        
            <p>Placeholder for reviews</p>
          </Container>
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        
        </Col>
      </Row>
    );
  }

export default ReviewPage;