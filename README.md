## Hip, Hip Array

Hip, Hip, Array is an educational tool built as part of my final project at Makers Academy. It was built over two weeks together with [Elishka Flint](https://github.com/elishkaflint), [Bibi Collins](https://github.com/bibicollins) and [John Forster](https://github.com/JohnForster).

Understanding and manipulating arrays is often difficult for new programmers. Our tool takes your input and desired output, e.g. [1,2,3] --> [3,2,1], and returns the required method needed. It can handle methods in Javascript, Ruby and Python, although Javascript currently has the most methods and functionality.

![](https://raw.githubusercontent.com/laythq/Array-Of-Sunshine/master/Screenshot%202018-09-10%2009.36.29.png)

### Approach

As a team we were interested in creating a technically compelling tool, but did not want to compromise on process. Using Agile methodologies, our first sprint focussed on delivering an MVP that could handle ten different methods in Javascript, written in React:

![](https://raw.githubusercontent.com/laythq/Array-Of-Sunshine/master/Screenshot%202018-09-10%2009.48.58.png).

The remainder of the project was spend adding two more languages (Ruby, Python), adding more sophisticated methods (chained methods, methods with arguments), styling and deployment.

### Stack

|Feature|Language|Testing|
|--------|-------|-------|
|Front-End|React, hosted on Node/Express|Enzyme|
|Javascript methods|Javascript|Jest|
|Ruby methods|Ruby|RSpec|
|Python methods|Python|Pytest|


Our project is deployed to Heroku and can be found [here](https://hip-hip-array.herokuapp.com/)! We used Travis CI for continuous integration.

### Instructions

To use locally, please clone this repo and install all dependencies with npm.

From the project root, launch the backend server with `npm start`. Once it's up, navigate to the /client directory and launch the front-end server with `npm start`. You should be automatically directed to the page on your default browser.

To run our tests, simply run `npm test` from the project root or from the /client directory.
