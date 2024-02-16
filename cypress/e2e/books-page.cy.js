describe("books page", () => {
  beforeEach(() => {
    cy.visit("/books")
  })

  it("view page as List / Grid", () => {
    cy.viewAsGrid()
    cy.viewAsList()
  })

  it("set display per page = 4", () => {
    cy.setPageSize(4) //set page size = 4
  })

  it("go through different page sizes", () => {
    const pageSizes = [4, 8, 12]
    pageSizes.forEach((pageSize) => {
      //loop throug
      cy.setPageSize(pageSize) //set page siize
    })
  })

  it("sort by Price: Low to High", () => {
    cy.sortByPriceLowToHigh()
  })

  it("search item and add to cart", () => {
    const searchTerm = "Health Book"
    cy.searchByProduct(searchTerm)
    cy.addNewProductToCart(searchTerm)
    cy.openShoppingCart()
  })

  it("add new book to the cart and then remove", () => {
    const newProduct = "Fiction"
    cy.addNewProductToCart(newProduct)
    cy.openShoppingCart()
    cy.removeProductFromCart(newProduct)
  })
})
