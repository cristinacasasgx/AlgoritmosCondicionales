// Ejercicio 4 - Ternario: 
// El mayor de dos numeros

//  Declara dos variables "a" y "b" con valores numericos distintos.
//  Usando el operador ternario, determina cual de los dos numeros es mayor
//  y guardalo en una variable llamada "mayor".
//  Imprime: "El numero mayor es: X"

function mayorNumero(a, b) {
    let mayor = (a > b) ? a : b;
    return `El número mayor es: ${mayor}`;
}

console.log(mayorNumero(34, 56));
