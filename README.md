<p align="center">
  <a href="https://angularspree.firebaseapp.com/" target='_blank'>
    <img alt="AngualreSpree Logo" title="AngularSpree Logo" src="http://res.cloudinary.com/mally/image/upload/v1490186051/Angular_spree_hqgwtq.png" width="200">
  </a>
</p>

<p align="center">
  AngularSpree Plug and play frontend application for SPREE E-Commerce API built with ❤️ using Angular2, Redux, Observables & ImmutableJs.
</p>

<p align="center">
  <a href="https://angularspree.firebaseapp.com/" target='_blank'>Check demo</a>
</p>

<p align="center">
  <a href="/CONTRIBUTING.md" target='_blank'><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
  <a href="https://www.pivotaltracker.com/n/projects/1985365" target='_blank'><img alt="Pivotal Project page" src="http://res.cloudinary.com/zeus999/image/upload/c_limit,h_1041,w_1487/v1486457388/Yatrum%20Logo/pt-badge_ss3dyt.svg"></a>
</p>

## What is AngularSpree?

AngularSpree is an open source Angular(2.x+) front-end application for [Spree Ecommerce](https://spreecommerce.com/). 
**It's free and always will be**. 

**Bootstrap 4 Compatible**

Go ahead use it the way you want to or let us know at `hello@aviabird.com` if you need any help with this project.


## Why did we build it?

We have been working with Spree for very long time, making products for a lot of clients. There was one pattern we noticed in what the clients always asked for. They were comfortable using spree for the backend [API](http://guides.spreecommerce.org/api/) but not for the front-end. These requests have been very consistent with so many awesome [front-end framework](https://github.com/showcases/front-end-javascript-frameworks) around.

When Angular team realeased the beta version in March last year we knew that angular was going to be a big player soon.
We decided to give it a try. Hence, AngularSpree was born as a front-end framework for the most awesome backend api for E-Commerce out there.

## What's included?

Currently, this is a fairly basic vesion of the application. We are calling it a pre-alpha release.

### What's working and ready to be deployed?
* Add/Remove products to cart.
* Select/Clear filters based on category.
* Support for product variants.
* Cart checkout feature.
* Cash on delivery option.
* Authentication (Login/Signup)

### What's coming very soon?
* Payment options credit/debit cards.
* More sorting features(new/popular, Discount, Price[low,high]).
* Support for further types of products(size, pattern, collar, etc).
* Support for further options in types eg. size(32, 34, 36) etc. etc.
* Multilanguage Support i18n.
* Ability to add more than one addresses.
* and many more....

There is a long way to go... keep an eye on this [project](https://github.com/aviabird/angularspree/) here on github.

## What in the Tech News?

We've built AngularSpree keeping scaling in mind leveraging the best technologies out there.

As of now, the application has 7 major modules, `products`, `core`, `home`, `user`, `checkout`, `auth`, `shared`.

We are working on documentation and we can share that once we are looking at a more stable release.

* Exclusively using @ngrx libraries(store, effects, actions), showcasing common patterns and best practices.
* Fully Observable approach using RxJS 5.0.1(latest beta).
* Uses @ngrx/store to manage the state of the app and to cache requests made to the Backend API, 
* @angular/router to manage navigation between routes, 
* @ngrx/effects to isolate side effects.
* @ngrx/actions to define the actions on the frontend.
* Following Container/Presentation component approach.
* Lazy loading of modules(for modules which are not immediately required for first painting the DOM).
* ImmutableJs to create and safeguard objects againts mutability.
* Project is divided into modules which are more or less independant of each other except core module.

**Current version of Angular is latest release [4.0.0-rc.5](https://github.com/angular/angular/releases/tag/4.0.0-rc.5).

**Current version of Angular-cli is [1.0.0-rc.4](https://github.com/angular/angular-cli/releases/tag/v1.0.0-rc.4)

We try to make sure that we keep the repository upto date with the angular release every weekend.

## Screenshots

### Home Page

On this page user can filter products as per category. Change layout of the products(cozy, comfortable) etc.

<p align="center">
  <a href="https://angularspree.firebaseapp.com/" target="_blank">
    <img alt="AngualreSpree Logo" title="AngularSpree Logo" width="70%" src="http://res.cloudinary.com/yatrum/image/upload/c_limit,h_1041,w_1487/v1490188458/screen_home.png">
  </a>
</p>

### Cart Page

Cart page displays all the line items or items in the cart which the user has added while browsing the website.

<p align="center">
  <a href="https://angularspree.firebaseapp.com/" target="_blank">
    <img alt="AngualreSpree Logo" title="AngularSpree Logo" width="70%" src="http://res.cloudinary.com/yatrum/image/upload/c_limit,h_1041,w_1487/v1490188642/screen_cart.png">
  </a>
</p>

### Product detail page

Display's the detailed product information of a particular product.

<p align="center">
  <a href="https://angularspree.firebaseapp.com/" target="_blank">
    <img alt="AngualreSpree Logo" title="AngularSpree Logo" width="70%" src="http://res.cloudinary.com/yatrum/image/upload/c_limit,h_1041,w_1487/v1490188748/screen_product_page.png">
  </a>
</p>



### Package Manager [Yarn](https://yarnpkg.com/en/)

We are using Yarn as a package manager in this project though you can also use `npm` if you like to.

## Backend for this project?


**Start the API for this project to work successfully.

We have a very thin and custom [repo](https://github.com/aviabird/angularspree-api/) which is the backend for this project. 
Clone it and run the server. We have updated the readme on how to setup the backend API project.

## Contributing to AngularSpree

Where to start

There are many different ways to contribute to AngularSpree's development, just find the one that best fits with your skills. Examples of contributions we would love to receive include:

* Code patches
* Documentation improvements
* Translations(yet to come)
* Bug reports
* Patch reviews
* UI enhancements

Big features are also welcome but if you want to see your contributions included in AngularSpree's codebase we strongly recommend you start by initiating a chat on our **[slack channel](https://angular-spree.herokuapp.com/)**.

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server with Service Worker
Run `npm run build--prod` to build in production with service worker pre-cache and then `npm run static-serve` to serve.

## Build with Service Worker

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run build--prod` for a production build.


## Who are we?

We are [Aviabird Technologies](https://aviabird.com).

**We love to create awesome Web & Mobile products.**

**We are very proud of our work.**

We love technologies like Golang, Elixir, Scala, Ruby, Javascript, Typescript, Swift, Java.

We love some frameworks too:-
* Ruby On Rails
* Phoenix/Elixir framework.
* Spring framework.
* AngularJs (1.x+ & 2.x+)
* ReactJs
* BackboneJs
