
//  Ejercicio 3 - If / Else: Calificacion academica

//  Declara una variable llamada "nota" con un valor entre 0 y 100.
//  Usando if / else if / else, muestra la calificacion cualitativa del estudiante:
//  - 90 a 100: "Excelente"
//  - 70 a 89:  "Bueno"
//  - 60 a 69:  "Suficiente"
//  - 0 a 59:   "Insuficiente"
//  Si la nota esta fuera del rango 0-100, muestra: "Nota invalida."

function calificacion(nota) {
    if (nota < 0 || nota > 100) {
        return "Nota inválida";
    } else if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 70) {
        return "Bueno";
    } else if (nota >= 60) {
        return "Suficiente";
    } else {
        return "Insuficiente";
    }
}

console.log(calificacion(1));