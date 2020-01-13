# burger
Using MySQL, Node, Express, Handlebars, and ORM to create a burger logger.

## Technologies used:
Visual Studio Code, Node Package Manager, Express, Handlebars, local server port, Heroku, Google Fonts,

## Summary:
The "Out-n'-In" burger app showcases the relationship between an Express server, MySQL database, and the user client through their input. Through a form and submit button that the user interacts with, input is posted to the /api/burgers route where it hits the Mysql database via ORM programming. The server then responds and a list of the user's burger searches appends the left side of their screen. The user can choose to click on a "devour" button next to each burger (burgers in the DB are reflected on the screen through "#each" statements written with handlebars), where if pressed, the boolean state of the data "devoured" changes and the server appends the newly created burger state to the right side of the screen.

## What I Learned:

1. How ORM methods can be used to create new data objects that aid in express.Router functioning to perform different CRUD states.

2. How to use Express-Handlebars. In particular, using "{{#each}}" statements to loop through various object data.

3. How to hide certain file paths by using `app.use` to make a path "static".

4. Importance of recognizing the node module version numbers you are using when it comes to debugging. A particular version of node + NPM package may not work together.

5. How to connect to a database other than MySQL at the local level.

6. The use of middleware parsing when posting and receiving data.

## Steps:

1. Viewed demo of working application how each piece of the app operates and behaves. 

2. Reviewed classroom assigments to familiarize myself with the material at hand.

3. Studied the "Cats-app" application and used the application as a blueprint frame for coding elements.

4. Spoke with my tutor Ryan who helped with starting my server up and debugging code for CRUD operations.

5. Watched tutorials on YouTube to get a better understanding of how to use Handlebars as a template and for coding statements. 

6. Read through a beginner's guide to express-handlebars.

7. After coding assignment used debugging methods such as "console.log()"
 
# Screenshots

## First glance of "Out-n'-In" burger application
[!Homepage](https://github.com/demonaco/burger/blob/master/public/assets/img/Screen%20Shot%202020-01-12%20at%209.03.42%20PM.png)

## Code to use Router to post burger information
[!Using Router to post burger information](https://github.com/demonaco/burger/blob/master/public/assets/img/Screen%20Shot%202020-01-12%20at%209.23.17%20PM.png)

## index.handlebars page - using "{{#each}} statment to loop inside list of burgers table
[!"{{#each}}" statement to loop](https://github.com/demonaco/burger/blob/master/public/assets/img/Screen%20Shot%202020-01-12%20at%2010.25.23%20PM.png)