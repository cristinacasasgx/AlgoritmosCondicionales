// Ejercicio 6 - If / Else: 
// Tipo de triangulo

//  Declara tres variables: "lado1", "lado2" y "lado3", con los valores
//  de los lados de un triangulo.
//  Usando if / else if / else, determina que tipo de triangulo es:
//  - Equilatero:  los tres lados son iguales.
//  - Isosceles:   exactamente dos lados son iguales.
//  - Escaleno:    los tres lados son diferentes.
//  Si la combinacion de lados no forma un triangulo valido
//  (la suma de dos lados debe ser mayor que el tercero), muestra:
//  "Los lados no forman un triangulo valido."

function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        return "No es un triángulo válido";
    }

    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

console.log(tipoTriangulo(3, 3, 3));