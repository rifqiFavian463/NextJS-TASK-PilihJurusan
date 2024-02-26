describe("check content", () => {
  it("passes", () => {
    cy.visit("localhost:3000/about");

    cy.get("h2").contains("About").should("exist").and("be.visible");
  });
});
