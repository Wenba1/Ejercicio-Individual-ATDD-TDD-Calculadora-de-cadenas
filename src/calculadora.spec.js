import { sumar } from './calculadora.js';

describe("Sumar", () => {
    it("Suma números separados por comas", () => {
        expect(sumar("1,2,3")).toEqual(6); 
    });

    it("Suma números separados por comas ahora incluimos guiones c:", () => {
        expect(sumar("1-2,3")).toEqual(6); 
    });

    it("Maneja delimitador personalizado ';'", () => {
        expect(sumar("//[;]\n6;7;4")).toEqual(17);
    });

    it("Maneja delimitador personalizado ';' junto con comas y guiones", () => {
        expect(sumar("//[;]\n6,3-2;1")).toEqual(12);
    });
});
