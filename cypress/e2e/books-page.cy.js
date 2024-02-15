import { urls } from "../../page-urls"

describe("books page", () => {
  beforeEach(() => {
    cy.visit(urls.booksPage)
  })

  //view as List / Grid check
  it("view page as List / Grid", () => {
    cy.viewAsGrid()
    cy.viewAsList()
  })

  //display per page check
  it("set display per page = 4", () => {
    cy.setPageSize(4) //set page size = 4
  })

  //display per page check
  it("go through different page sizes", () => {
    const pageSizes = [4, 8, 12]
    pageSizes.forEach((pageSize) => {
      //loop throug
      cy.setPageSize(pageSize) //set page siize
    })
  })

  //sorting check
  it("sort by Price: Low to High", () => {
    cy.sortByPriceLowToHigh()
  })

  //filtering by price check
  /*   it('filter by Price', () => {
        cy.filterByPrice(25)        
   })  */

  //search field check
  it("search item and add to cart", () => {
    const searchTerm = "Health Book"
    cy.searchByProduct(searchTerm)
    cy.addNewProductToCart(searchTerm)
    cy.openShoppingCart()
  })

  //add new book into the cart
  it("add new book to the cart and then remove", () => {
    const newProduct = "Fiction"
    cy.addNewProductToCart(newProduct)
    cy.openShoppingCart()
    cy.removeProductFromCart(newProduct)
  })
})
