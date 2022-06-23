const fs = require('fs-extra');

const concat = require('concat');

(async function build() {

   const files = [

       './dist/liferay-form/runtime.js',

       './dist/liferay-form/polyfills.js',

       './dist/liferay-form/main.js'

   ];

   await fs.ensureDir('angular-elements-build');

   await concat(files, 'angular-elements-build/angular-elements.js');

   await fs.copy('./dist/liferay-form/styles.css', 'angular-elements-build/styles.css');

  })();
