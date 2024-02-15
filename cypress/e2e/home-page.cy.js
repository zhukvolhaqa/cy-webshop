import { urls } from "../../page-urls"

describe("home page", () => {
  beforeEach(() => {
    cy.visit(urls.homePage)
  })

  //navigation from the top-menu and header check
  it("navigation from the top-menu", () => {
    const booksPage = "Books"
    const computerPage = "Computers"
    const electroPage = "Electronics"
    const shoesPage = "Apparel & Shoes"
    const digitalPage = "Digital downloads"
    const jewelryPage = "Jewelry"
    const giftCardsPage = "Gift Cards"

    cy.navigateTo(booksPage)
    cy.checkPageHeader(booksPage)

    cy.navigateTo(computerPage)
    cy.checkPageHeader(computerPage)

    cy.navigateTo(electroPage)
    cy.checkPageHeader(electroPage)

    cy.navigateTo(shoesPage)
    cy.checkPageHeader(shoesPage)

    cy.navigateTo(digitalPage)
    cy.checkPageHeader(digitalPage)

    cy.navigateTo(jewelryPage)
    cy.checkPageHeader(jewelryPage)

    cy.navigateTo(giftCardsPage)
    cy.checkPageHeader(giftCardsPage)
  })

  //login and logout check
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
