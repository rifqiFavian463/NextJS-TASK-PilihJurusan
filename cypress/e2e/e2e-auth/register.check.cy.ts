describe("admin check", () => {
  it("should be visible", () => {
    cy.visit("http://localhost:3000/register");
    cy.get("h2").contains("Register").should("exist").and("be.visible");
  });
});
