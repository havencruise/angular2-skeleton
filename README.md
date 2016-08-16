# An Angular2 App

Your description goes here.

## Prerequisites

Node.js and npm are essential to Angular 2 development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.


## Docker QuickStart

```bash
git clone <path-to-repo> app
cd app
docker build -t my-angular-app .
docker run -it --rm 
    -v $PWD/src:/app/src \
    --name appserver -p 3000:3000 -p 3001:3001 \
    my-angular-app bash -c "cd /app && npm run server:docker"
```

## Manual Installation

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
git clone <path-to-repo>  app
cd app/
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.


## Other notes from [Angular Quickstart](https://github.com/angular/quickstart)

See [their README](https://github.com/angular/quickstart/blob/master/README.md).