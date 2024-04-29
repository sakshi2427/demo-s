const { defineConfig } = require("cypress");
//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   //await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", browserify.default(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }
module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report1",
    overwrite: false,
  },

  projectId: "n6xpst",
  //Adding all the environments available so that we can change them in the script dynamically
  env: {
    QA: "http://webapp-attack.azurewebsites.net/",
    PROD: "http://webapp-attack.azurewebsites.net/",
    UAT: "http://webapp-attack.azurewebsites.net/",
  },
  e2e: {
    //setupNodeEvents,
    //specPattern: "cypress/integration/examples/*.js",
    specPattern: "cypress/integration/BDD/*.feature",
  },
});
