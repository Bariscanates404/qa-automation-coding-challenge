const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // Set the default command timeout for the entire Cypress configuration
  defaultCommandTimeout: 10000, // 30 seconds
});
