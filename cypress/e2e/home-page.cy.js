describe("home page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("navigation from the top-menu", () => {
    const pages = [
      "Books",
      "Computers",
      "Electronics",
      "Apparel & Shoes",
      "Digital downloads",
      "Jewelry",
      "Gift Cards",
    ]

    pages.forEach((page) => {
      cy.navigateTo(page)
      cy.checkPageHeader(page)
    })
  })

  it("login and logout ", () => {
    //email and password from credentials.json
    cy.fixture("credentials.json").then((credentials) => {
      const email = credentials.validUser.email
      const password = credentials.validUser.password
      //login
      cy.logIn(email, password)
      cy.get(".header-links .account").should("contain", email) //header validation
    })

    //logout
    cy.logOut()
  })
})
