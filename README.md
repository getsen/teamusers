# Team Users - task

This project aims to load users in table and filter them.

## Installation Requirements

#### 1. NPM 

[npm](https://www.npmjs.com/get-npm),  package manager. It is used to automate process of installing package dependencies and execution of scripts.

`brew install npm`

If npm is not found in your PATH, follow these steps to add it and allow it to be run from anywhere.

Note: your profile may be in your .profile, .bash_profile, .bashrc, .zshrc, etc.

Add this to your profile: export PATH="\$PATH:/opt/npm-[version]/bin" (the path may vary depending on where you extracted npm to)
In the terminal, log in and log out for the changes to take effect

<br />

---

<br />

## Usage

### Running the application

Install the packages.

`npm install`

Running in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm start`

-   Performing test without/with coverage

`npm test`

`npm test:cov`

<br />

---

<br />

## Built Packages (Not required to perform)

### \* ESLint

[ESLint](https://eslint.org/) performs static analyze of the codes.

`npm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard`

**ESLint configurations**

-   _.eslintrc_

-   _.eslintignore_

<br />

### \* Typescript

[Typescript](https://www.typescriptlang.org/) a superset of Javascript that brings static-typing.

`npm add -D typescript @types/node @types/react @types/react-dom @types/jest`

**Typescript configurations**

-   _tsconfig.json_

<br />

### \* Babel

[Babel](https://babeljs.io/) compiles modern Javascript into ES5 codes.

`npm add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread`

**Babel configurations**

-   _.babelrc_

<br />

### \* Webpack and loaders

[Webpack](https://webpack.js.org/) bundles Javascripts and assets (HTML,CSS, Media).

`npm add -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader css-loader file-loader html-loader postcss-loader style-loader sass-loader ts-loader`

**Webpack configurations**

-   _webpack.config.js_

<br />

### \* Jest

[Jest](https://jestjs.io/en/) is a Javascript testing framework.

`npm add -D jest babel-jest jest-transform-stub ts-jest`

**Jest configurations**

-   _jest.config.js_
-   _tsconfig.test.json_

<br />

---