# Tech-Blog

## Description
Tech-Blog  is a CMS-style technology blog platform where users can interact with others by pusblishing their blog posts and comment on each other's post. This web application follow the MVC (Model View Controller) paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies-Used](#technologies-used)
- [Contribution](#contribution)
- [Preview](#preview)
- [Link](#link)
- [Contact](#contact)

## Installation 
To install necessary dependencies, run following command:
```
npm i
```

## Usage
1. Open the application in a web browser 
2. If running this application locally, please run:
``` 
node server.js
```
3. If wanting to apply seed data first, please run:
```
node ./seeds/seed.js
```
4. Go to (http://localhost:3001)
5. To explore the full features of the web application, log in first.
6. Click "Home" in the nav bar to view all the blog posts
7. Click "Dashboard" to view the blog post that you created.



## Features

**Dynamic Content Rendering**
* User Story
    - As a user
    - I WANT TO be able to see all of the posts, my posts, and login / logout pages when I click the menu item in the navigation bar 
    - SO THAT I can view different features of the blog efficiently 

* Accepted Criteria 
    - Given I am logged in 
    - When I visit the web application,
    - Then I'm presented with all of the blog posts with their title, user name, and their posted date
    - When I click the dashboard menu in the navigation bar,
    - Then I'm presented with all of my blog posts 
    - When I click the logout menu in the navigation bar,
    - Then the logout menu changes to login menu 
    - When I click the login menu,
    - Then I'm presented with the login / singup forms 

**Create blog post and comment using asynchronous JS**
* User Story 
    - As a user 
    - I WANT To be able to send a HTTP(POST) request to various endpoints 
    - SO THAT I can create a blog post and comment seamlessly

* Accepted Criteria 
    - Given I am logged in 
    - When I click "Create a Post" button in the dashboard page, 
    - Then I am presented with the form that I can enter the title and description
    - When I click "Create" button, 
    - Then I am redirected to the dashboard page with the newly generated blog post 
    - When I click one of the blog in the home page 
    - Then I am presented with the blog details with comment button
    - When I click the comment button,
    - Then I can view the comments made to the post and the "Make a Comment" button 
    - When I click the "Make a Comment" button, 
    - Then I am presented with the textarea where I can write the comment down 
    - When I click "Create" button,
    - Then I can see my comment when I click the "comment" button again 

**Edit and Delete using asynchronous JS**
* User Story 
    - As a user 
    - I WANT to be able to send a HTTP(PUT/DELETE) request to various endpoints 
    - SO THAT I can edit and deleted my blog post seamlessly. 

* Accepted Criteria 
    - Given I am logged in, and has clicked my blog post details 
    - When I click eidit icon button, 
    - Then I am presented with the form that I can edit my title and description 
    - When I click "Update" after editing my blog post,
    - Then I can view my blog post has been updated accordingly. 
    - When I click delete icon button, 
    - Then I am redirected to my dashboard page with my post successfully deleted from my dashboard


## Technologies-Used
* Front-end 
    - HTML, Handlebars, CSS
    - JavaScript
* Back-end 
    - Node.js
    - Express.js
    - Sequelize 
    - MySQL,
* Authentication and Session Management
    - Express-session
    - bcypt.js


## Contribution 
1. Fork the Repo 
2. Create a new branch 
3. Make your contributions/changes 
4. push to the forked repo 
5. create a new pull request


## Preview 

This is the preview of the application 
![alt preview](./public/img/lucy-tech-blog.gif)

## Link

This is the link to the application
[tech-blog](https://lucy-tech-blog-b8433f263b37.herokuapp.com/)

## Contact

If you have any questions or suggestions regarding this project, feel free to reach out:

- **Email:** ks02ks2000@gmail.com
- **GitHub:** lucyJihyeon(https://github.com/lucyJihyeon)

