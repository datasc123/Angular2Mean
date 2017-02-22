# Angular 2 Mean.js full Stack project

The front-end of this project is generated with [Angular CLI](https://github.com/angular/angular-cli).

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): NoSQL Database
* [**E**xpress.js](http://expressjs.com): Backend Framework
* [**A**ngular 2](https://angular.io): Frontend Framework
* [**N**ode.js](https://nodejs.org): Runtime Rnvironment
* [Angular CLI](https://cli.angular.io): Project Scaffolding
* [Bootstrap](http://www.getbootstrap.com): Layout and Styling
* [Font Awesome](http://fontawesome.io): icons
* [IntelliJ IDE](http://www.jetbrains.com/idea/): IDE for development

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
1. Command window 1: `mongod`: run MongoDB
2. Command window 2: `npm run be`: run Express backend server (with autoreload)
3. Command window 3: `npm start`: run Angular frontend (with autobuild and autoreload)
4. Browser will automatically open to: [localhost:4200](http://localhost:4200)

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.
