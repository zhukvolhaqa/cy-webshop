//open shopping cart
Cypress.Commands.add("openShoppingCart", () => {
  cy.get("#topcartlink .ico-cart").click() //go to Shopping cart page
  cy.get("h1").should("contain", "Shopping cart") //verify that the page title contains "Shopping cart"
})

//add new product into the cart
Cypress.Commands.add("addNewProductToCart", (product) => {
  cy.get(".product-item").contains(product).click()
  cy.get("h1").should("contain", product)
  cy.get(".overview").find('input[type="button"][value="Add to cart"]').click() //add to cart button
  cy.get(".content").should(
    "contain",
    "The product has been added to your shopping cart"
  )
})

//remove product from the cart
Cypress.Commands.add("removeProductFromCart", (product) => {
  cy.get(".product-name")
    .contains(product)
    .parents(".cart-item-row")
    .find(".remove-from-cart")
    .click()
  cy.get(".update-cart-button").click()
  cy.contains(product).should("not.exist")
})

//add Gift Card into the cart
Cypress.Commands.add("addVirtualGiftCardToCart", (product) => {
  const recipientName = "Leo"
  const recipientEmail = "leo.test@test.net"
  cy.get(".product-item").contains(product).click()
  cy.get("h1").should("contain", product)
  cy.get(".recipient-name").type(recipientName)
  cy.get(".recipient-email").type(recipientEmail)
  cy.get(".message").type("Happy Birthday " + recipientName)
  cy.get(".add-to-cart-panel")
    .find('input[type="button"][value="Add to cart"]')
    .click() //Add to cart button
  cy.get(".content").should(
    "contain",
    "The product has been added to your shopping cart"
  ) //confirmation
})
