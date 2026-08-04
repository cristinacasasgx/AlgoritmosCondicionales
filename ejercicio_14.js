// Ejercicio 4 - Switch: 
// Color por inicial

//  Declara una variable "inicial" con la letra inicial de un color en ingles
//  (en mayuscula). Usando switch, muestra el nombre del color en español:
//  - "R" → Rojo   (Red)
//  - "G" → Verde  (Green)
//  - "B" → Azul   (Blue)
//  - "Y" → Amarillo (Yellow)
//  - "W" → Blanco (White)
//  - "K" → Negro  (Black)
//  Si la inicial no corresponde a ninguno de estos colores,
//  muestra: "Color no registrado."

function colores(inicial) {
    switch (inicial) {
        case "R":
            return "Rojo";
        case "G":
            return "Verde";
        case "B":
            return "Azul";
        case "Y":
            return "Amarillo";
        case "W":
            return "Blanco";
        case "K":
            return "Negro";
        default:
            return "Color no registrado";
    }
}

console.log(colores("Y"));