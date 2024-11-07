export function sumar(cadena) {
    if (!cadena) return 0;

    const delimitadorRegex = /,/;

    const numeros = cadena.split(delimitadorRegex);
    return numeros
        .map(num => parseInt(num)) 
        .reduce((acc, num) => acc + num, 0); 
}
  
  export default sumar;