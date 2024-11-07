export function sumar(cadena) {
    if (!cadena) return 0;

    let delimitadorRegex = /,|-/;

    const especificaionesDelimitador = cadena.match(/^\/\/\[(.*?)\]\n/);
    if (especificaionesDelimitador) {
        const delimitador = especificaionesDelimitador[1];
        delimitadorRegex = new RegExp(`[${delimitador},-]`); 
        cadena = cadena.slice(especificaionesDelimitador[0].length); 
    }

    const numeros = cadena.split(delimitadorRegex);
    return numeros
        .map(num => parseInt(num))
        .reduce((acc, num) => acc + num, 0);
}

export default sumar;
