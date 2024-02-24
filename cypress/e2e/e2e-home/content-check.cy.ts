describe("check content", () => {
  it("passes", () => {
    cy.visit("localhost:3000/");

    cy.get('[data-item="button-to-product"]').within(() => {
      cy.get("a").should("have.attr", "href").and("include", "/product");
      cy.contains("Go to Product");
    });
    cy.get('[data-item="button-to-product"]').click();
    cy.url().should("include", "/product");
  });
});
