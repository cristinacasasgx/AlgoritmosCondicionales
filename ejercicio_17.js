// Ejercicio 7 - Switch: 
// Calificacion en letras

//  En algunos sistemas educativos la nota numerica se convierte en letra.
//  Declara una variable "nota" con un valor entero entre 0 y 10.
//  Usando switch, convierte la nota a su equivalente en letra:
//  - 10:      "A+"
//  - 9:       "A"
//  - 8:       "B"
//  - 7:       "C"
//  - 6:       "D"
//  - 5 o menos: "F - Reprobado"
//  Para notas fuera del rango 0-10, muestra: "Nota invalida."

//  Pista: agrupa los casos 0 a 5 para mostrar "F - Reprobado".

function notaEnLetra(nota) {
    switch (nota) {
        case 10:
            return "A+";
        case 9:
            return "A";
        case 8:
            return "B";
        case 7:
            return "C";
        case 6:
            return "D";
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            return "F - Reprobado";
        default:
            return "Nota inválida";
    }
}

console.log(notaEnLetra(8));