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