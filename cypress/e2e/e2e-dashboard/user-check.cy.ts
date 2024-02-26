describe("admin check", () => {
  it("should be visible", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("div").contains("User").should("exist").and("be.visible");
  });
});
