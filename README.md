# Resume

## Description
> The purpose of this project is to show the structure and different key concept of Vue.js framework. I use the example of a resume to create a basic App using functionalities of modern Javascript framework.

## Project Set up definition
This project is using the following concept and technologies:
- Compiled with Webpack (Base on boilerplate: https://github.com/vuejs-templates/webpack)
- SCSS supported by a BEM nomenclature.
- Semantic HTML5 (could be improve tho)
- VueJS as a framework and a Linter (using Airbnb standard)

Regarding the versioning please refer to the package.json

## Cross compatibility and Responsive design
At the moment the project doesn't have any mobile / tablet adaptation. I know mobile first... but I wanted to focus on a desktop approach and make a first visual.
It has only been tested on Chrome 67.0. It should work on all recent browser version but haven't done it yet.

## Unit Test, E2E Test
Not defined yet

## Plugins / Library used
- GSAP library is used to make some background animation timeline (https://greensock.com/gsap)

## Structure of the project
In the `src` repository you will find the followings:
- `assets` which only include the general css files at the moment. `variable.scss` contains the spacing / colors / breakpoints rules according to a potential styleguide
- `components` contains all the Vue component
- `config` contains the data of the components (replace the data base) and also pictures used in the app
- `router` contains the file describing the routing of the App


## Build Setup

You can Fork the project and run it on your machine.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
