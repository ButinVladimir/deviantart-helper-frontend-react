# DeviantART Helper

This project is the MVP of frontend part of [DeviantART Helper](https://bitbucket.org/VladimirButin/deviantart-helper-backend-koa).

Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) so please refer here for additional documentation.

Tests in this project are not finished due to upcoming refactoring which probably will never happen.

Main repository can be found on [BitBucket](https://bitbucket.org/VladimirButin/deviantart-helper-frontend-react).<br>
Mirror repository is available on [GitHub](https://github.com/ButinVladimir/deviantart-helper-frontend-react).

Project uses [DeviantART](https://www.deviantart.com/developers/) API and requires to have working there.

## Installation

First, `npm install` should be ran first to fetch npm modules.<br>
Then `REACT_APP_SERVER_URL` variable value in `.env` file should be changed to URL where `DeviantART Helper` should run.

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Make sure that `DeviantART Helper` backend part is running on URL provided in `.env` file.

### `npm test`

Launches the Jest test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:staged`

Script for [Husky](https://github.com/typicode/husky) to run related tests for staged changes.

### `npm run coverage`

Runs Jets test runner in the coverage mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

After bundling build files should be copied to the `public` folder<br>
in [DeviantART Helper backend part](https://bitbucket.org/VladimirButin/deviantart-helper-backend-koa).

## Development

Development server can be started by running `npm start` script.

Codestyle is enforced by [Eslint](https://github.com/eslint/eslint).

Unit tests are written with [Jest](https://github.com/facebook/jest).

Test coverage can be obtained by running `npm run coverage` and<br>
then checking console or `coverage` folder.

Codestyle and unit tests are checked automatically during commit by [Husky](https://github.com/typicode/husky).