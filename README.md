# Multi Compatibility Checker
This package will check compatibility of your Node.js application with various platforms (Windows, macOS, Linux) and different versions of Node.js and other dependencies. It will provide detailed reports on potential issues and suggestions for resolving them

#### Click [here](https://www.npmjs.com/package/multi-compatibility-checker) to go to the NPM Package 

## Installation of the dependency
```bash
npm install semver
```
## Installation of the package
```bash
npm install multi-compatibility-checker
```
## Steps to test within your work folder
```bash
#### Create a new folder 
mkdir NewFolder
cd NewFolder
```
```bash
npm init
```
```bash
npm i multi-compatibility-checker
```
```bash
#### In package.json of NewFolder, after "main" add:
"type": "module"
```
```bash
#### Create a new index.js in NewFolder, add:

import runCompatibilityCheck from "multi-compatibility-checker";
const result = runCompatibilityCheck();
console.log(JSON.stringify(result, null, 2));
```
```bash
#### To test:
node index.js
```
