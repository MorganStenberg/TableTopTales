# **TableTopTales API**

TabletopTales is a social media site for board games enthusiasts, targeted towards people who love to play board games and want to share their reviews for others! As well as finding new games to add to their wishlist of games they want to play. 

On TableTopTales users can write their own review of a game, create games to add to their whishlist, connect those games to an existing review, like and comment on other reviews. 

The app is built in two parts with this making up the backend API and the front end is built with React.js. 

[Link to live site here](https://tabletoptales-718dd24dcac5.herokuapp.com/)

[Link to deployed backend API here](https://ttt-api-0a140d9077e3.herokuapp.com/)


## Project Goals
The goal of this site is to create a place where people can share reviews and discuss board games, and inspire other people to find their new favorite games! 

### User Goals

### Site owner Goals

## UX

### User Stories

The user of TableTopTales is anyone with an interest in board games and wants to share their experiences and thoughts on the board games they love, as well as anyone who wants to find a new board game to play. 

**Reviews**
- As a user I can create a review of a board game so that I can share my review with others
- As a User I can view all reviews created by other users so that I can be inspired and read about games that other people have reviewed
- As a user I can view a single review in detail so that I can get all details from that review
- As a user I can edit a review I have created so that I can make changes and updates to my own review after it has been created
- As a user I can delete my own review so that I can control the removal of my own reviews
- As a user I can save a review so that I can save them to read at a later point or return and read the saved reviews at any time
- As a user I can view the reviews I have saved so that I can return to reviews that I like, or so that I can read reviews that I didnt have time to finish earlier
- As a user I can remove previously saved reviews so that I can manage what reviews I want to keep as saved and remove those that are no longer of interest
- As a user I can like a review so that I can show that I appreciate the review and that it is interesting
- As a user I can remove i like I have previously made so that I can change my mind about if I like a review or not
- As a user I can comment on a review so that I can share my thoughts about the review and stay in contact with other users
- As a user I can view comments on a review so that I can see what I and other users are saying about a review
- As a user I can edit a comment that I have created so that I can make changes to a comment after I have made it, so that I can fix or update the content of a comment
- As a user I can view the top 5 most commented reviews so that I can see which reviews that engages the most
- As a user I can use the search bar to search for games or reviews so that I can find the games or reviews I am most interested in

**Authentication**
- As a user I can sign up and create a new account so that I can access features for signed up users, such as creating a review, comment and like a review, save a review and create a game to add to wishlist
- As a user I can sign in so that I can use features, creating a review, comment, like, saving a review and adding game to wishlist
- As a user I can stay logged in until I choose to log out so that I don't have to log in multiple times and so that my user experience is enhanced

**Navigation**
- As a user I can view and access the navbar on all pages so that so that I can easily navigate the site
- As a user I can view different parts of the navbar depending on my logged in/logged out status so that the correct options are available for users that are not logged in and users that are logged in, as well as the user knowing if they are logged in our not

**Profile**
- As a user I can view my own profile and other users profile and all reviews connected to that profile so that I can view a profile and see all reviews that they have written and other information they have shared in their profile
- As a user I can edit my own profile so that I can edit the content displayed there and change profile picture

**Wishlist**
- As a user I can create a game to add to my wish list of games so that I can keep track of games that I would like to play or buy in the future
- As a user I can edit a game added to my wish list of games so that I can update or correct information on my added game
- As a user I can delete a game I have created and added to wish list so that I can remove games that are no longer of interest
- As a user I can view the wish list of games I have created so that I can see what games I would like to play or buy in the future


## Agile Development
The application was built using an agile approach, using a Github Project Board and Issues. The Github project board can be found [here](https://github.com/users/MorganStenberg/projects/7). All user stories listed above were created with Github Issues. All issues were linked to a milestone, 'Iterations', which was used to plan the development work of the project. The user stories were used to keep track of progress throughout the project, via different columns specifying the status of the issue. With columns for 'Todo', 'In progress', 'Done' and 'DoD'. DoD, or Definition of Done was used for user stories that had been implemented and gone through testing. I also added a column for 'Backlog' for future features to be implemented, as a way to keep control of the scope of the project and be sure to deliver a MVP in time.

## Data Models and database

The ERD diagram below lays out the structure for the data models. 

Django AllAuth was used for the user model and user authentication system.

The profile model was created so the user can create and save reviews and create a wishlist of games that can be edited and deleted. 

The game model contains all information on a game item that a user can create and add to a wishlist of games, such as creator of the game, title, description, review connection and a choice of genre. 

The reiew model contains all information about a review, such as creator, title, content, image, rating and created at information.  

The saved model enables the user to connect a wishlist game item to a review by saving the review. 

The like model contains all information about a like, such as which user has made it and which review it has liked. 

The comment model contains all information about a comment, such as which user has written it and on which review, the content of the comment and the creation date. 

![ERD diagram displaying the structure of the data models](documentation/data_model.PNG)


## Features

### Future Features

## Components

## Testing

See [TESTING](TESTING.md) for the full documentation of all testing done.

## Deployment

The site was deployed to Heroku from GitHub with the following steps:

- In the package.json file add this code `"heroku-prebuild": "npm install -g serve",` in the scripts section. Then create a Procfile in the root directory and add `web: serve -s build` in it.

- Create a Heroku app by logging in to your Heroku account. Click the "New" button in the top right corner and then "Create new app". Give it a name, choose a region and then click the "Create app" button. 

- In Gitpod or other IDE, save all files, add, commit and push your code to GitHub. Then go to Heroku, scroll to the top menu and click the "Deploy"-tab. Connect to your Github repository by selecting Github in the Deployment Method section and searching for your repository, either manually deploy the branch or activate "Enable Automatic Deploys". When the deployment is ready you can find the link to your deployed app. 


## Technologies, frameworks, libraries and languages used

### **Languages**

- HTML
- CSS 
- JSX

### **Libraries**
- [React](https://legacy.reactjs.org/) - main Javascript library for creating the user interface.
- [react-Bootstrap](https://react-bootstrap-v4.netlify.app/) - to make the site responsive and to style user interface.
- [axios](https://axios-http.com/docs/intro) - HTTP library used to make requests.
- [react-router-dom](https://reactrouter.com/en/main) - routing based on URL.
- [jwt-decode](https://www.npmjs.com/package/jwt-decode) - decoding of JWTs token.
- [react-dom](https://www.npmjs.com/package/react-dom) - the entry point to the DOM and server renderers for React.
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) - component to implement infinite scrolling.
- [react-scripts](https://www.npmjs.com/package/react-scripts) - scripts and configuration used by Create React App.

### **Software and Sites**
- [Git and GitHub](https://github.com/)- Version control and used as tool for agile development with Github Projects
- [Cloudinary](https://cloudinary.com/) - Image hosting and management
- [ElephantSQL](https://www.elephantsql.com/) - Free database service that hosts the PostgreSQL database for this project 
- [Lucidchart](https://www.lucidchart.com/pages/sv) - Used for creating ERD diagram
- [Balsamiq](https://balsamiq.com/) - Used to create wireframes 

## Credits

## Acknowledgements