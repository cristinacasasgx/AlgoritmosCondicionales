// Ejercicio 5 - Ternario: 
// Precio con descuento VIP

//  Una tienda ofrece descuentos segun el tipo de cliente:
//  - Cliente VIP:    descuento del 20%
//  - Cliente normal: descuento del 5%

//  Declara una variable "esVIP" con valor true o false,
//  y una variable "precioBase" con el precio original del producto.
//  Usando el operador ternario, calcula el porcentaje de descuento,
//  luego calcula el precio final e imprime ambos valores.

function precioVIP(esVIP, precioBase) {
    let descuento = esVIP ? 0.20 : 0.05;
    let total = precioBase - (precioBase * desßcuento);

    return `Descuento: ${descuento * 100}% - Total: $${total}`;
}

console.log(precioVIP(true, 450000));
