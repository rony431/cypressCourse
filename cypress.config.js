const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "enesaq",
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
  charts: true,
  reportPageTitle: 'Cypress Inline Reporter',
  embeddedScreenshots: true,
  inlineAssets: true, //Adds the asserts inline
 },
  e2e: {
    chromeWebSecurity : false,
    baseUrl: 'https://www.saucedemo.com/',
    defaultCommandTimeout : 5000,
  },
});

