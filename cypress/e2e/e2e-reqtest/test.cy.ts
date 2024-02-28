// describe("check request", () => {
//   it("should have navbar and footer", () => {
//     cy.visit("http://localhost:3000/");
//     cy.intercept("GET", "http://localhost:8000/v1/users/profile").as("getProfile");
//     cy.wait("@getProfile").then((interception) => {
//       const response = interception.response;
//       const request = interception.request;
//       expect(request.method).to.eq("GET");
//       expect(response?.statusCode).to.equal(200);
//     });
//   });
// });
