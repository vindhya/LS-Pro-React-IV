# Homework #4

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.

  * `debugger`
  	* The `debugger` statement causes Chrome to pause the execution of JavaScript and allows you to step through the code. It's very useful when trying to find out why your code isn't working the way you intended.
  * react router
  	* React router is a feature included with React that allows loading components based the user clicking on a link. It allows having multiple pages within an application.
  * `<Router />` (BrowserRouter)
  	* The value of what is being returned in the `render()` function of a component must be wrapped in `Router />` so that React knows to look for `<Route />` and `<Link />` within the function.
  * `<Route />`
  	* The `<Route />` JSX tag indicates where on the page to load the component to which the `<Link />` tag directs.
  * `<Link />`
  	* The `<Link />` JSX tag ends up looking like an anchor tag in HTML, however, it contains information which tells the `<Route />` to load the component.
  * `npm` and `npm install`
  	* The `npm` command runs different scripts which aid in JavaScript development, such as, starting the development server, installing dependencies, etc.
  	* The `npm install` commands installs, from the internet, the dependencies referred to in the `package.json` file to the project folder. It creates the `node_modules` folder.


2. Fork and clone this repo.

  * Create a boilerplate React app called me. `create-react-app me`
  * Navigate into /me and run the command: `npm start`
  * `App.js` should return the `<Router />` component as the base.
  * Add a header to the top of your page with three `<Link />` components.
  * Create three components that will be three different "pages" that you will render.
  * The first comopnent should be called `<About />` and should display some fun facts about yourself.
  * The second comopnent should be called `<Hobbies />` and should display a list of your favorite hobbies.
  * The third component should be called `<Media />` and should display some pictures that you like.
  * Link to these three components from the header and display them when you navigate to the appropriate paths.



#### Congratulations on finishing Homework #4!

For more information about our part-time and full-time courses visit: https://www.lambdaschool.com
LambdaSchool's full-time class is now tuition guaranteed.  
