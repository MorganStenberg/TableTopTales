# **TableTopTales API**

TabletopTales is a social media site for board games enthusiasts, targeted towards people who love to play board games and want to share their reviews for others! As well as finding new games to add to their wishlist of games they want to play. 

On TableTopTales users can write their own review of a game, create games to add to their whishlist, connect those games to an existing review, like and comment on other reviews. 

The app is built in two parts with this making up the backend API and the front end is built with React.js. 

[Link to live site here](https://tabletoptales-718dd24dcac5.herokuapp.com/)

[Link to deployed backend API here](https://ttt-api-0a140d9077e3.herokuapp.com/)


## Project Goals
The goal of this site is to create a place where people can share reviews and discuss board games, and inspire other people to find their new favorite games! 

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

## Testing

See [TESTING](TESTING.md) for the full documentation of all testing done.

## Deployment

## Technologies, frameworks, libraries and languages used

### **Languages**


### **Frameworks**
- [Django Rest Framwork](https://www.django-rest-framework.org/) - Python web framework used to develop this API
- [Django](https://www.djangoproject.com/)

### **Software and Sites**
- [Git and GitHub](https://github.com/)- Version control and used as tool for agile development with Github Projects
- [Cloudinary](https://cloudinary.com/) - Image hosting and management
- [ElephantSQL](https://www.elephantsql.com/) - Free database service that hosts the PostgreSQL database for this project 
- [Lucidchart](https://www.lucidchart.com/pages/sv) - Used for creating ERD diagram

### **Other dependencies**
- [django-rest-auth](https://pypi.org/project/django-rest-auth/) - Provides a set of REST API endpoints for Authentication and Registration
- [django-allauth](https://django-allauth.readthedocs.io/en/latest/) - Set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication
- [Psycopg2](https://pypi.org/project/psycopg2/) - Python-PostgreSQL database adapter
- [dj_database_url](https://pypi.org/project/dj-database-url/) - method returning a Django database connection dictionary
- [Pillow](https://pypi.org/project/Pillow/8.2.0/) - Python Imaging Library 
- [urllib3](https://pypi.org/project/urllib3/1.26.15/) - User-friendly HTTP client for Python used by many components in Python, such as requests and pip
- [PyJWT](https://pypi.org/project/PyJWT/) - JSON Web Token implementation in Python
- [Gunicorn](https://gunicorn.org/) - Python WSGI HTTP Server acting as the web server for the project

## Credits

## Acknowledgements