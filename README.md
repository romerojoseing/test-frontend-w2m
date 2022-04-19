# Test Frontend W2M

_This is a challenge from testing, using Angular and Typescript, a SPA application that allows super hero maintenance._

<br>

## Getting Started 🚀

_These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system._

See **Requirements** to know the minimum standards to use the project.

### Requirements 📋

_You need to have the following technologies installed to use this project._

Any browser to open the project.

* [Node.js - npm](https://nodejs.org/es/) - *JavaScript runtime - used versions Node: 16.13.0 / NPM: 8.10.0*
* [Angular CLI](https://angular.io/cli) - *TypeScript framework - used version Angular CLI: 13.3.2*
* [Docker](https://www.docker.com/) - *Automates application deployment within software containers*


### Installing 🔧

_To use this project you will need to clone this repository or download it to your computer. If you choose to download it directly in the upper right part of the repository you will have the option, if it is not your case you can clone it using the following command._

```ssh
  $ git clone https://github.com/romerojoseing/test-frontend-w2m.git
```

<br>

## Use Project 👓

_Follow this steps to run the project, install dependencies necessaries._

```ssh
  $ cd test-frontend-w2m
```

```ssh
  $ npm install
```

```ssh
  $ ng serve
```

_Open the browser at the following link: [http://localhost:4200](http://localhost:4200)_

<br>

## Docker Image

_Follow this steps to run the docker image project_

```ssh
  $ docker build -t test-frontend-w2m .
```

```ssh
  $ docker run -d -it -p 80:80 test-frontend-w2m
```

_Open the browser at the following link: [http://localhost:80](http://localhost:80)_

<br>

## Built With 🛠️

_Technologies used in the project:_

* [HTML](https://es.wikipedia.org/wiki/HTML) - Layout and web structure.
* [Sass](https://sass-lang.com/) - Cascading style sheet language.
* [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language.
* [Angular](https://angular.io//) - TypeScript framework.
* [Angular Material](https://material.angular.io/) - User Interface (UI).
