[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](CHANGELOG.md)
[![Build Status](https://travis-ci.com/sdanyalk/auth-project-two.svg?branch=master)](https://travis-ci.com/sdanyalk/auth-project-two)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](license)

# Project Title: Rotton_Potatos :raised_hands:
##### Team Name: Valar_Morghulis
##### Team Members: Nicholas, Michelle, and Nathaniel
- A simple web app to rate movie of your choice. 

## Table of Contents:
  - [Features](#features)
  - [Installation](#installation-floppy_disk)
  - [NPM Packages](#npm-packages)
  - [Heroku Deployment](#heroku-deployment)
  - [Libraries used](#libraries-used)
  - [License](#license)


### Features
- Able add and give rating on the movie
- Able to see top 6 movies in each genre
- Able to see the average movie rating of the movie
---
###  Installation :floppy_disk::
1. Clone this repository.
    ```
    git clone https://github.com/sdanyalk/auth-project-two.git
    ```
1. Navigate into the cloned directory.
    ```
    cd auth-project-two
    ```
1. Install Nodejs dependencies.
    ```
    npm install
    ```
1. Create mysql database using the `schema.sql` file, located below.
    ```
    /db/schema.sql
    ```
1. Update database username and password configuration in `config.json` file, located below.
    ```
    /config/config.json
    ```
1. In the root directory of the project, start the server.
    ```
    node server.js
    ```
1. In your browser navigate to the following page.
    ```
    http://localhost:8080
    ```
---

### NPM Packages

| Package | Documentation |
| ----------- | ----------- |
| `express` | [Express](https://www.npmjs.com/package/express) |
| `express-handlebars` | [Express Handlebars](https://www.npmjs.com/package/express-handlebars) |
| `mysql2` | [Node MySql 2](https://www.npmjs.com/package/mysql2) |
| `sequelize` | [Sequelize](https://www.npmjs.com/package/sequelize) |
| `passport` | [Passport](https://www.npmjs.com/package/passport) |
| `passport-local` | [Passport Local Strategy](https://www.npmjs.com/package/passport-local) |
| `bcrypt` | [BCrypt](https://www.npmjs.com/package/bcrypt) |
| `connect-flash` | [Connect Flash for Express](https://www.npmjs.com/package/connect-flash) |
| `dotenv` | [Dotenv](https://www.npmjs.com/package/dotenv) |
| `chart.js`| [chart.js](https://www.npmjs.com/package/chart.js)|
---

### Heroku Deployment

This project is deployed on Heroku. The link to web app is:

[Rotton Potatos](https://rotten-potatoes-vm3.herokuapp.com/login)

---
### Libraries used
-  CSS Frameworks:
> - Bootstrap
- Server-side API used:
> - OMDB :http://www.omdbapi.com/
- Third-Party API used
> - jQuery
> - chart.js: https://www.chartjs.org/ 

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
