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
## Steps to test the package within your Work Folder
#### Create a new folder
```bash 
mkdir NewFolder
cd NewFolder
```
```bash
npm init
```
```bash
npm i multi-compatibility-checker
```
#### In package.json of NewFolder, after "main" add:
```bash
"type": "module"
```
#### Create a new index.js in NewFolder, add:
```bash
import runCompatibilityCheck from "multi-compatibility-checker";
const result = runCompatibilityCheck();
console.log(JSON.stringify(result, null, 2));
```
#### To test:
```bash
node index.js
```
