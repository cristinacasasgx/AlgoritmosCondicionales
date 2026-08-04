//Ejercicio 5 - If / Else: 
//Año bisiesto

//Un año es bisiesto si cumple UNA de estas dos condiciones:
//- Es divisible por 4 Y NO es divisible por 100.
//- Es divisible por 400.

//Declara una variable llamada "anio" con un valor numerico.
//Usando if / else, determina si el año es bisiesto o no e imprime el resultado.
//Ejemplos de años bisiestos: 2000, 2024.
//Ejemplos de años NO bisiestos: 1900, 2023.

function Bisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return "Es bisiesto";
    } else {
        return "No es bisiesto";
    }
}

console.log(Bisiesto(2024));

