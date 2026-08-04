// Ejercicio 7 - If / Else: 
// Precio de entrada al cine

//  Un cine cobra las entradas segun la edad del espectador:
//  - Menores de 5 años:        entrada GRATIS
//  - De 5 a 11 años (niño):   $8.000
//  - De 12 a 64 años (adulto): $15.000
//  - 65 años o mas (senior):   $9.000

// Declara una variable "edad" con la edad del espectador.
// Usando if / else if / else, calcula e imprime el precio de la entrada.

function precioEntrada(edad) {
    if (edad < 5) {
        return "Gratis";
    } else if (edad <= 11) {
        return "$8000";
    } else if (edad <= 64) {
        return "$15000";
    } else {
        return "$9000";
    }
}

console.log(precioEntrada(20));