describe("admin check", () => {
  it("should be visible", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("div").contains("Admin").should("exist").and("be.visible");
  });
});
