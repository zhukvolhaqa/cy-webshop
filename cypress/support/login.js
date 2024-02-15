//log in with params
Cypress.Commands.add("logIn", (email, password) => {
  cy.get(".ico-login").click() //log in link click
  cy.get("#Email").type(email)
  cy.get("#Password").type(password)
  cy.get(".returning-wrapper [type=submit]").click() //submit button click
})

//log in - alternative
Cypress.Commands.add("logIn2", () => {
  cy.get(".ico-login").click() //log in link click
  cy.fixture("credentials.json").then((credentials) => {
    const email = credentials.validUser.email
    const password = credentials.validUser.password
    cy.get("#Email").type(email)
    cy.get("#Password").type(password)
    cy.get(".returning-wrapper [type=submit]").click() //submit button click
    cy.get(".header-links .account").should("contain", email) //header validation
  })
})

//log out
Cypress.Commands.add("logOut", () => {
  cy.get(".ico-logout").click()
})
