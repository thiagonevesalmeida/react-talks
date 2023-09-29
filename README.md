<h1 align="center">Tech Talks</h1>

<p align="center">React project to develop a "Tech Talks" event check-in application that allows users to register with their GitHub information 🚀</p>
</p>

<p align="center">
    <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-project">Projet</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-contact">Contact</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-contact">Documentation</a>
</p><br>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="React Talks" src=".github/preview.png" width="100%">
</p>

## 🚀 Technologies

This project was developed with the following technologies:

- React
- Vite (Next.js replacement - in development)
- React Hook {useState}
- JSX
- ESLint
- Node/NPM
- API Rest (GitHub)
- Fetch API
- ES6 modules
- HTML and CSS
- Git & GitHub

## 💻 Project

React project to create a "Tech Talks" Event application that allows users to check in with their GitHub login, while fetch their profile information, and display it in a card format using React component-Based Architecture.
<br>

You can access the project online through [THIS LINK](https://thiagonevesalmeida.github.io/react-talks/) 🚀.

## 📝 Licença

This project is under the MIT license.

## 📨 Contato

thiagonevesdealmeida@gmail.com

[linkedin.com/in/thiagonevesdealmeida](https://www.linkedin.com/in/thiagonevesdealmeida/) 

# Documentation

## React Documentation

This documentation provides an overview of the React code created with the Vite boilerplate.

## Components

- Home: The main component responsible for rendering the Tech Talks application UI.

- Card: A component that displays user information in the application.

## State

- newGuest: An array state variable that holds the information of registered users. Each Guest is represented by an object containing their name and avatar image from GitHub API, followed by their registration check-in time.

## File Structure

- index.html: The HTML template file that serves as the entry point for the application. It includes a <div> element with an ID of the root where the React application is rendered.

- main.jsx: The entry file that initializes the React application and renders the Home component into the root element.

- index.jsx: The main component file that renders the Home and Card components.

## Dependencies

- react: The React library for building user interfaces.
- react-dom: The React DOM library for rendering React components in the browser.

## Development Workflow

1) The index.html file serves as the entry point, which includes the root element where the React application is rendered.

2) The main.jsx file initializes the React application by rendering the App component into the root element.

3) The index.jsx are the component that renders the elements for the application content.

4) During development, running the "npm run dev" script starts the development server and automatically opens the application in the browser. Any changes made to the code trigger a live reload, allowing for a smooth development experience.

## Deploy React project to Git Hub Pages

 1) Create a GitHub repository for your project.   
 
 1) Open the package.json file in your project directory. Add a "homepage" field and specify the URL where your application will be hosted on Git Hub Pages. For example: "https://thiagonevesalmeida.github.io/react-talks/".

2) Build your React application, running the following command: ```npm run build```

Vite will generate a production-ready build of your application in the "dist" directory.

3) Deploy to GitHub Pages

Ensure that you have a GitHub repository set up for your project. If not, create a new repository on GitHub. In the package.json file, under the "scripts" section, you'll find the following script: ``` "deploy": "gh-pages -d dist" ```

This script uses the "gh-pages" package to deploy the contents of the "dist" directory to the gh-pages branch of your GitHub repository. To deploy your application, run the following command: ```npm run deploy```
    
After a successful deployment, your React application will be accessible at the URL specified in the "homepage" field of your package.json file.
Congratulations! You have successfully deployed your React application using Vite and GitHub Pages. 🙋

