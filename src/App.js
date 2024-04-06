import NavBar from './components/NavBar';
import styles from "./App.module.css"
import 'react-quill/dist/quill.snow.css';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults"
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ReviewCreateForm from './pages/reviews/ReviewCreateForm';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route 
            exact
            path="/"
            render={() => (
              <h1>Home Page</h1>
          )}/>
          <Route 
            exact
            path="/signin"
            render={() => 
              <SignInForm />
          }/>
          <Route 
            exact
            path="/signup"
            render={() => 
              <SignUpForm />
          }/>
          <Route 
            exact
            path="/reviews/create"
            render={() => 
              <ReviewCreateForm />
          }/>
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;