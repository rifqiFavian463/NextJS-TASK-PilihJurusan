describe("admin check", () => {
  it("should be visible", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("h2").contains("Login").should("exist").and("be.visible");
  });
});
