// Ejercicio 9 - If / Else: 
// Clasificacion de temperatura

//  Declara una variable "temperatura" con un valor en grados Celsius.
//  Usando if / else if / else, clasifica la temperatura e imprime una recomendacion:
//  - Menor a 0°C:        "Bajo cero. Ten cuidado con el hielo."
//  - De 0°C a 14°C:      "Hace frio. Abrigate bien."
//  - De 15°C a 24°C:     "Temperatura agradable. Disfruta el dia."
//  - De 25°C a 34°C:     "Hace calor. Mantente hidratado."
//  - Mayor o igual a 35°C: "Calor extremo. Evita el sol directo."

function Temperatura(temperatura) {
    if (temperatura < 0) {
        return "Bajo cero. Ten cuidado con el hielo.";
    } else if (temperatura <= 14) {
        return "Hace frío. Abrígate bien.";
    } else if (temperatura <= 24) {
        return "Temperatura agradable.";
    } else if (temperatura <= 34) {
        return "Hace calor. Mantente hidratado.";
    } else {
        return "Calor extremo.";
    }
}

console.log(Temperatura(50));