import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/UseRedirect";
import { setTokenTimestamp } from "../../utils/utils";


// Credit to Code Institute walktrough for form structure
function SignInForm() {
    const setCurrentUser = useSetCurrentUser();
    useRedirect('loggedIn')

    const [signInData, setSignInData] = useState({
      username: "",
      password: "",
    });
    const { username, password } = signInData;
  
    const [errors, setErrors] = useState({});
  
    const history = useHistory();

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
       const {data} = await axios.post("/dj-rest-auth/login/", signInData);
       setCurrentUser(data.user)
       setTokenTimestamp(data)
        history.goBack();
      } catch (err) {
        setErrors(err.response?.data);
      }
    };
  
    const handleChange = (event) => {
      setSignInData({
        ...signInData,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
        <>
        
            <Row className={styles.Row}>
                <Col className="m-auto py-2 p-md-2" md={6}>
                    <Container className={`
                    ${appStyles.Content} 
                    ${appStyles.BorderOrange} p-4 `}>
                        <h1 className={styles.Header}>Sign in</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label className="d-none">username</Form.Label>
                                <Form.Control
                                    className={styles.Input}
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.username?.map((message, idx) =>
                        <Alert variant="warning" key={idx}>{message}</Alert>
                      )}

                            <Form.Group controlId="password">
                                <Form.Label className="d-none">Password</Form.Label>
                                <Form.Control
                                    className={styles.Input}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors.password?.map((message, idx) =>
                        <Alert variant="warning" key={idx}>{message}</Alert>
                      )}

                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Orange}`}
                                type="submit"
                            >
                                Sign in
                            </Button>
                            {errors.non_field_errors?.map((message, idx) =>
                                <Alert variant="warning" key={idx} className="mt-3">{message}</Alert>
                            )}
 
                        </Form>

                    </Container>
                    <Container className={`mt-3 ${appStyles.Content}`}>
                        <Link className={styles.Link} to="/signup">
                            Dont have an account? <span>Sign Up</span>
                        </Link>
                    </Container>
                </Col>

            </Row>
        </>
    );
  }

export default SignInForm;