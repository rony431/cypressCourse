//Overriding before and after hook

//cypress/plugins/index.js

const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = (on) => {

  on('before:run', async (details) => {

    console.log('override before:run');

    await beforeRunHook(details);

  });


  on('after:run', async () => {

    console.log('override after:run');

    await afterRunHook();

  });

};