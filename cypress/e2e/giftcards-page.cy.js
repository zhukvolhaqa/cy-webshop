describe("giftcard page", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.logIn2()
    cy.visit("/gift-cards")
  })

  it("search by gift card name", () => {
    const cardTitle = "$5 Virtual Gift Card"
    cy.searchByProduct(cardTitle)
  })

  it("add gift card to the cart and then remove", () => {
    const cardTitle = "$25 Virtual Gift Card"
    cy.addVirtualGiftCardToCart(cardTitle) //add card
    cy.openShoppingCart() //open Shopping cart
    cy.removeProductFromCart(cardTitle) //remove card
  })

  it("sort by Price: Low to High", () => {
    cy.sortByPriceLowToHigh()
  })
})
