describe("check while error", () => {
  it("it should error 404", () => {
    cy.visit("localhost:3000/product");
    cy.request({
      method: "GET",
      url: "https://komiku-api.fly.dev/api/comic/l",
      failOnStatusCode: false,
    })
      .its("status")
      .should("eq", 404);
    cy.intercept("https://komiku-api.fly.dev/api/comic/l", { statusCode: 404 }).as("error");

    cy.get('[data-item="error"]').contains("Error").should("exist");
  });
});
