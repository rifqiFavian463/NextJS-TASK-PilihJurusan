describe("check layout", () => {
  it("should have navbar and footer", () => {
    cy.visit("localhost:3000/");
    cy.get('[data-item="navbar"]').contains("Navbar").should("exist");
    cy.get('[data-item="footer"]').contains("Footer").should("exist");
  });
});
