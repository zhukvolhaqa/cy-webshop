const { defineConfig } = require("cypress")

module.exports = defineConfig({
  // projectId: "shaoem", //npx cypress run --record --key 360a2006-3b62-4135-890b-3b598b8a652e
  e2e: {
    // baseUrl: 'https://demowebshop.tricentis.com/', //home page
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
})
