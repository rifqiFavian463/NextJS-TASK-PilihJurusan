import { ReactNode } from "react";

describe("card check", () => {
  it("it should contain card and its content", () => {
    cy.visit("localhost:3000/product");
    cy.intercept("GET", "https://komiku-api.fly.dev/api/comic/list?filter=manga").as("getComicList");

    cy.wait("@getComicList").then((interception) => {
      const response = interception.response;
      const request = interception.request;

      expect(request.method).to.eq("GET");
      expect(response?.statusCode).to.equal(200);
    });

    cy.get('[data-item="card-comic"]')
      .should("be.visible")
      .each(($div: ReactNode) => {
        cy.wrap($div).within(() => {
          cy.get("[data-item='detail-comic-button']");
          cy.contains("More info");
        });
      });
  });

  it("should redirect to comic detail", () => {
    cy.visit("localhost:3000/product");
    cy.wait(2000);
    cy.get("[data-item='detail-comic-button']").eq(1).click();
    cy.url().should("match", /\/product\/\w+\/\w+/);

    cy.wait(3000);
    cy.get('[data-item="detail-endpoint"]')
      .contains(/Endpoint comic : .+/)
      .should("exist");
  });
});
