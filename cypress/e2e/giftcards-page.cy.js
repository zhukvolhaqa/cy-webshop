import { urls } from "../../page-urls"

describe("giftcard page", () => {
  beforeEach(() => {
    cy.visit(urls.homePage)
    cy.logIn2()
    cy.visit(urls.giftCardsPage)
  })

  //search by item - happy path
  it("search by gift card name", () => {
    const cardTitle = "$5 Virtual Gift Card"
    cy.searchByProduct(cardTitle)
  })

  //add item to the cart and then remove
  it("add gift card to the cart and then remove", () => {
    const cardTitle = "$25 Virtual Gift Card"
    cy.addVirtualGiftCardToCart(cardTitle) //add card
    cy.openShoppingCart() //open Shopping cart
    cy.removeProductFromCart(cardTitle) //remove card
  })

  //sorting check
  it("sort by Price: Low to High", () => {
    cy.sortByPriceLowToHigh()
  })
})
