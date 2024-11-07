describe("Calculadora de cadenas", () => {
    it("Muestra la suma de los numeros en la caden ingresada", () => {
      cy.visit("/");
      cy.get("cadena").type("1,2,3");
      cy.get("#sumar-button").click();
      cy.get("#resultado-div").should("contain", "Resultado: 6");
    });
  });