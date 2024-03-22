const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: 'whtznu', // npx cypress run --record --key 386e9b60-4925-465f-9e6e-3d8909936622  
  e2e: {
    baseUrl: "https://demowebshop.tricentis.com/", //home page
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
})
