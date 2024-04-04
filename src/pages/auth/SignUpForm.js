import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


const SignUpForm = () => {
    return (
      <Row className={styles.Row}>
        <Col className="mx-auto py-2 p-md-2" md={6}>
          <Container className={`
            ${appStyles.Content} 
            ${appStyles.BorderOrange} p-4 `}>
                <h1 className={styles.Header}>Sign Up</h1>

                
            </Container>
          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signin">
              Already have an account? <span>Sign in</span>
            </Link>
          </Container>
        </Col>
       
      </Row>
    );
  };

export default SignUpForm;