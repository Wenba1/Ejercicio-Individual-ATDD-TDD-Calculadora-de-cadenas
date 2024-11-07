import {sumar}  from "./calculadora.js";

const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const cadena=document.getElementById("#cadena");



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = cadena.value;
  const resultado = sumar(inputValue);

  div.innerHTML = "<p>Resultado" + resultado + "</p>";
});
