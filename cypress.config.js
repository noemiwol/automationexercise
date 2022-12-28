const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    includeShadowDom: true,
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
