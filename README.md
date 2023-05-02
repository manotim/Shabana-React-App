# Shabana-FC-Tickets-App

Shabana Tickets app is a web app that help fans to the club commit their attendance to the cclub's upcoming matches. The page has a list of upcoming fixtures each held in a card where a user can commit their attendance which is visible to all. Users can also submit their desired clubs which they would wish the club administration to plan and arrange a friendly match with.

# Description

Shabana ticket commits app has utilized a number of event listeners, amongst them being, a window scroll event where the user is able to change the pages navigation properties once they start scrolling down the page. The user also can enjoy the mouse over and mouse out events on individual cards.

The app has got its own external API which JSON uses to get data to the DOM through the fetch method.

The page setup is made from react components to create it's components. A total of five components were used to create the app. They include;

1. App.js
2. TeamList.js
3. TeamItem.js
4. AddTeam.js
5. Header.js

The App.js component is responsible for connecting our app to the index.html page for rendering. It's the top most level component. It's child components include the AddTeam component, TeamsList and Header components.

The TeamList component is the one that renders all the fixtures. This is where the mapping of individual items is done.

The TeamItem component is the one that has the details of each individual card. It is responsible of the outlook of every card.

AddTeam component is responsible for adding new cards to the page. As a user, I can add the details of a new instance of a fixture match of any match I am interested in. Once, am done, I can click the Add To Fixtures button, the fixture will be added to the existing fixtures.

The Header component is in charge of how the page header looks like. For instance, its background and styling of how the header elements are displayed.

There are not many challenges that I faced during the implementation of this project from javascript to React. However, I look forward to creating more React apps that utilize state more and all the main React Hooks.

# PROJECT SET-UP

To set up this project, install the following in your local machine:

browser with a developer inbuilt console
a code editor, prefereebly VS Code
JSON Server
To run the project, you need to:

Create a new project folder.
Create a new Github repository.
run npx create-react-app my-flatiron-app to create the project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Shabana-React-App
