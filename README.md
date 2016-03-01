# THIS IS ABANDONED

# Dependencies

#### It's a one-time process...

Before getting started, you'll need to make sure you have some required dependencies installed on your computer: [Node.js](//nodejs.org) and [Grunt](//gruntjs.com/). You should also be familiar working with a [command line interface](//en.wikipedia.org/wiki/Command-line_interface) (most likely Terminal).

1.  Install Node by visiting the [Node.js website](//nodejs.org) and downloading their latest install client. So Simple!
2.  After installing Node and NPM, you can install the Grunt client on the command line with the following:

````
sudo npm install -g grunt-cli
````

* * *

# Getting Started

#### More command line stuff.

Clone the repo ([link](//github.com/88mpg/boilerplate)) to your localhost root.
````
git clone https://github.com/88mpg/boilerplate.git
````
Enter directory and install dependencies.
````
cd boilerplate
sudo npm install
````
Watch files with Grunt.
````
grunt watch
````

**NOTE:** To stop watching, press _Ctrl+C_ in your Terminal.

If you'd like to use LiveReload (automatic page reloading) in conjunction with `grunt watch`, install the [appropriate browser extension for your environment](//feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-). Once installed, click the new icon in your navigation bar to activate livereload for the page you're working on. Now, when you save a file while watching your project your page will reload automatically!

* * *

# Working With Files

#### Some consider this the fun part.

Navigate to `src/index.html` (an empty template) to begin making edits to your index page. Since you're running your watch task, whenever you save your source index file it will automatically compile to your build folder.

Style changes can be made in `src/assets/scss/main.scss`. This file will be compiled along with Bootstrap and all of its partials, mixins, etc. to a minified output located at `build/assets/css/main.min.css`. If you're not using Bootstrap for this project, or you only need a portion of Bootstrap's CSS, feel free to disable the unneeded includes in `src/assets/scss/bootstrap.scss`, or delete the unneeded files entirely. If you accidentally delete a Bootstrap file needed for your project (i.e. a mixin or variable used elsewhere), JSHint will notify you of the missing file when Grunt attempts to compile the CSS.

Your Javascript files will all be concatenated into a single, minified JS file via Grunt. Included in the source folder is the full, unminified version of Bootstrap. If you don't need it, delete it! If you only need certain functions within the file go in and delete what you don't need, but note that JSHint has been disabled for Bootstrap, so if you make an error it's on you!
