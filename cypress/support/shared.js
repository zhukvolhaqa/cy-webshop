// Navigate to page from the top-menu
Cypress.Commands.add("navigateTo", (page) => {
  cy.get(".top-menu").contains(page).click()
})

// Check page header
Cypress.Commands.add("checkPageHeader", (page) => {
  cy.get("h1").should("have.text", page)
})

//search by product - happy path
Cypress.Commands.add("searchByProduct", (product) => {
  cy.get("#small-searchterms").type(product) //text for search
  cy.get('input[type="submit"][value="Search"]').click() //submit button
  cy.get(".search-input #Q").should("have.value", product) //serch text check
  cy.get(".item-box").find(".product-title").should("contain", product) //search item check
})

// View items as Grid
Cypress.Commands.add("viewAsGrid", () => {
  cy.get("#products-viewmode").select("Grid")
  cy.get(".product-grid").should("exist")
})

// View items as List
Cypress.Commands.add("viewAsList", () => {
  cy.get("#products-viewmode").select("List")
  cy.get(".product-list").should("exist")
})

// Set page size = size
Cypress.Commands.add("setPageSize", (size) => {
  // Select the page size = size
  cy.get("#products-pagesize").select(size.toString())
  // Compare number of items with selected page size
  cy.get(".product-item").its("length").should("be.lte", size)
})

// Sort by price low to high
Cypress.Commands.add("sortByPriceLowToHigh", () => {
  let lowPrice
  let highPrice

  // Sort by Price: Low to High
  cy.get("#products-orderby").select("Price: Low to High")
  // Select the first item-box and retrieve the actual-price value
  cy.get(".item-box")
    .first()
    .find(".actual-price")
    .invoke("text")
    .then((text) => {
      lowPrice = parseFloat(text) // Text to number
    })
  // Select the last item-box and retrieve the actual-price value
  cy.get(".item-box")
    .last()
    .find(".actual-price")
    .invoke("text")
    .then((text) => {
      highPrice = parseFloat(text) // Text to number
    })
    .then(() => {
      // Compare lowPrice value and highPrice value
      cy.wrap(lowPrice).should("be.lte", highPrice) // lte - less or equal
    })
})
