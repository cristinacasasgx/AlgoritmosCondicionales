//Ejercicio 8 - Switch: 
//Planetas del sistema solar

//  Declara una variable "numeroPlaneta" con un valor del 1 al 8,
//  donde 1 es el planeta mas cercano al sol.
//  Usando switch, muestra el nombre del planeta correspondiente:
//  1 → Mercurio
// 2 → Venus
//  3 → Tierra
//  4 → Marte
//  5 → Jupiter
//  6 → Saturno
//  7 → Urano
//  8 → Neptuno
//  Para cualquier otro numero, muestra: "No es un planeta del sistema solar."

function planeta(numero) {
    switch (numero) {
        case 1:
            return "Mercurio";
        case 2:
            return "Venus";
        case 3:
            return "Tierra";
        case 4:
            return "Marte";
        case 5:
            return "Júpiter";
        case 6:
            return "Saturno";
        case 7:
            return "Urano";
        case 8:
            return "Neptuno";
        default:
            return "No es un planeta";
    }
}

console.log(planeta(7));
