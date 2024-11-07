describe("Calculadora de cadenas", () => {
    it("Muestra la suma de los números en la cadena ingresada", () => {
        cy.visit("/");
        cy.get("#cadena").type("1,2,3");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should("contain", "Resultado: 6");
     });

     it("Ahora delimita el guion adicional", () => {
        cy.visit("/");
        cy.get("#cadena").type("1-2,3");
        cy.get("#sumar-button").click();
        cy.get("#resultado-div").should("contain", "Resultado: 6");
     });
     
     
  });