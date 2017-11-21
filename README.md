# Intro
This is a Star Wars heroes application

The main idea behind this app is to use [xstream](https://github.com/staltz/xstream) library to connect data source 
to views written in [React](https://reactjs.org/).

**Hero** component is used both in Modal window and inline. Decision of how to use Hero is made based on window width. 
If window is of middle size (in bootsrtap 4 terms) and greater inline mode is used, otherwise Modal window mode is used. 

Where:

* data source is given from [star wars api](https://swapi.co/)
* application is bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app)
* css based on [bootstrap 4](https://getbootstrap.com/)

## Run and build app

All run scripts are those created by default by `create-react-app` 

To run app in dev mode:

```
$ npm run start
```

To build script
```
$ npm run build
```

To run tests
```
$ npm run test
```