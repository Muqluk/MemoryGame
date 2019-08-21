# **React, Redux, ReactRouter, ReactGridView Boilerplate**
## Requirements:

### *Web:*
* node 8.9.4
* npm 5.7.1+

### *Service API:*
* C#
* Dot Net 4.6
* Web API 2 (Rest)


### Database:
* SQL Server 2012

## Instructions:
1. open {repository root}/web in any command console
    * install node packages via the following command:
    npm install --no-optional

2. check out a new working branch via the following command:
* git checkout -b your_branch_name
* git push --set-upstream origin your_branch_name

## Configured NPM Commands: 
### The following npm commands are pre-configured:
1. **start (npm run start)**

    starts a local development web server instance and launches the default browser
    at the home page of the intranet site.  
    * Hot reloading is enabled.
    * linting is enabled.
    * built files are 'not' output to dist folder.
2. **watch (npm run watch)**

    builds the local web files and starts a file watcher, which automatically
    * rebuilds any changed files.
    * linting is enabled.
    * hot reloading is 'not' enabled.
    * built files 'are' output to dist folder.
3. **build (npm run build)**

    bundles site files and places them in the /dist/ folder.
    * builds files in a 'dev' configuration.
    * does not minify
    * source maps are included.
    * file watcher is not started.

4. **test (npm run test)**

    runs all unit tests.
    * does not watch files, single run only.
    * runs all tests
    * does not report code coverage.

5. **test-watch (npm run test-watch)**

    begins the jest unit test file watcher.  
    
