// Ejercicio 9 - Switch: 
// Tipo de comida por numero

// Un restaurante tiene un menu numerado. Declara una variable "opcion"
//  con el numero del plato elegido por el cliente.
//  Usando switch, muestra el nombre del plato y su precio:
//  1 → "Bandeja paisa"       - $18.000
//  2 → "Ajiaco bogotano"     - $15.000
//  3 → "Sancocho de gallina" - $14.000
//  4 → "Arroz con pollo"     - $12.000
//  5 → "Sopa de lentejas"    - $10.000
//  Si el numero no esta en el menu, muestra: "Opcion no disponible en el menu."

function comida(opcion) {
    switch (opcion) {
        case 1:
            return "Bandeja paisa - $18.000";
        case 2:
            return "Ajiaco bogotano - $15.000";
        case 3:
            return "Sancocho de gallina - $14.000";
        case 4:
            return "Arroz con pollo - $12.000";
        case 5:
            return "Sopa de lentejas - $10.000";
        default:
            return "Opcion no disponible en el menu.";
    }
}

console.log(comida(1));
