import NavBar from './components/NavBar';
import styles from "./App.module.css"
import 'react-quill/dist/quill.snow.css';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults"
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import ReviewCreateForm from './pages/reviews/ReviewCreateForm';
import ReviewPage from './pages/reviews/ReviewPage';
import ReviewsPage from './pages/reviews/ReviewsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import ReviewEditForm from './pages/reviews/ReviewEditForm';
import GamesCreateForm from './games/GamesCreateForm';
import WishListPage from './games/WishListPage';
import GamesEditForm from './games/GamesEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import ProfileEditForm from './pages/profiles/ProfileEditForm';
import UsernameForm from './pages/profiles/UsernameForm';
import UserPasswordForm from './pages/profiles/UserPasswordForm';
import NotFound from './components/NotFound';


function App() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route 
            exact
            path="/"
            render={() => (
              <ReviewsPage message="No results found. Try adjusting your search keyword." />
          )}/>
          <Route 
            exact
            path="/saved"
            render={() => (
              <ReviewsPage 
              message="You have not saved any reviews yet."
              filter={`saved_reviews__owner__profile=${profile_id}&ordering=-saved__created_at&`}
              />
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
          <Route 
            exact
            path="/reviews/:id/edit"
            render={() => 
              <ReviewEditForm />
          }/>
          <Route 
            exact
            path="/reviews/:id"
            render={() => 
              <ReviewPage />
          }/>
          <Route 
            exact
            path="/games/create"
            render={() => (
              <GamesCreateForm 
              filter={`saved_reviews__owner__profile=${profile_id}&ordering=-saved__created_at&`}/>
              )}/>
              <Route 
            exact
            path="/games/:id/edit"
            render={() => (
              <GamesEditForm 
              filter={`saved_reviews__owner__profile=${profile_id}&ordering=-saved__created_at&`}/>
              )}/>
              <Route 
            exact
            path="/wishlist"
            render={() => (
              <WishListPage
              filter={`owner__profile=${profile_id}&ordering=-saved__created_at&`}/>
              )}/>

          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;