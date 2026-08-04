// Ejercicio 8 - If / Else: 
// Indice de Masa Corporal (IMC)

// El IMC se calcula con la formula: IMC = peso (kg) / (altura (m) * altura (m))
// La clasificacion segun la OMS es:
// - IMC menor a 18.5:          "Bajo peso"
// - IMC entre 18.5 y 24.9:    "Peso normal"
// - IMC entre 25.0 y 29.9:    "Sobrepeso"
//- IMC mayor o igual a 30.0: "Obesidad"

//Declara las variables "peso" (en kilogramos) y "altura" (en metros).
//Calcula el IMC, redondea el resultado a dos decimales
//e imprime la clasificacion correspondiente.	

function IMC(peso, altura) {
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    let clasificacion;

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 25) {
        clasificacion = "Peso normal";
    } else if (imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    return `IMC: ${imc} - ${clasificacion}`;
}

console.log(IMC(60, 1.65));