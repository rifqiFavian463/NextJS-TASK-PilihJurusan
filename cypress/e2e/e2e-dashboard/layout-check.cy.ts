describe("dashboard check layout", () => {
  it("should be visible", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("h2").contains("Dashboard").should("exist").and("be.visible");
  });
});
