import { sumar } from './calculadora.js';

describe("Sumar", () => {
    it("Suma números separados por comas", () => {
        expect(sumar("1,2,3")).toEqual(6); 
    });

    it("Suma números separados por comas ahora incluimos guiones c:", () => {
        expect(sumar("1-2,3")).toEqual(6); 
    });
});
