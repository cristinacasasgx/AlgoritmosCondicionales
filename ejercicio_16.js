// Ejercicio 6 - Switch: 
// Tipo de transporte

//  Declara una variable "ruedas" con la cantidad de ruedas de un vehiculo.
// Usando switch, determina e imprime el tipo de transporte:
//  - 2 ruedas: "Bicicleta o motocicleta"
//  - 3 ruedas: "Triciclo o motocarro"
//  - 4 ruedas: "Automovil o camioneta"
//  - 6 ruedas: "Camion pequeno"
//  - 18 ruedas: "Tractocamion"
//  Para cualquier otro numero, muestra: "Tipo de vehiculo desconocido."

function transporte(ruedas) {
    switch (ruedas) {
        case 2:
            return "Bicicleta o motocicleta";
        case 3:
            return "Triciclo o motocarro";
        case 4:
            return "Automóvil o camioneta";
        case 6:
            return "Camión pequeño";
        case 18:
            return "Tractocamión";
        default:
            return "Tipo de vehículo desconocido";
    }
}

console.log(transporte(4));