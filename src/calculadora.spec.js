import { sumar } from './calculadora.js';

describe("Sumar", () => {
    it("Suma números separados por comas", () => {
        expect(sumar("1,2,3")).toEqual(6); // La suma de 1, 2, 4 y 8 es 15
    });
});
