// Ejercicio 10 - Switch: 
// Signo zodiacal

//  Declara una variable "mes" con el mes de nacimiento de una persona (1 al 12).
//  Usando switch con casos agrupados, determina el signo zodiacal.
//  (Se usa el primer signo que cubre la mayor parte del mes para simplificar.)

//  1  → Capricornio
//  2  → Acuario
//  3  → Piscis
//  4  → Aries
//  5  → Tauro
//  6  → Geminis
//  7  → Cancer
//  8  → Leo
//  9  → Virgo
//  10 → Libra
//  11 → Escorpio
//  12 → Sagitario

//  Imprime el mes de nacimiento y el signo zodiacal correspondiente.

function signoZodiacal(mes) {
    let signo;

    switch (mes) {
        case 1:
            signo = "Capricornio";
            break;
        case 2:
            signo = "Acuario";
            break;
        case 3:
            signo = "Piscis";
            break;
        case 4:
            signo = "Aries";
            break;
        case 5:
            signo = "Tauro";
            break;
        case 6:
            signo = "Géminis";
            break;
        case 7:
            signo = "Cáncer";
            break;
        case 8:
            signo = "Leo";
            break;
        case 9:
            signo = "Virgo";
            break;
        case 10:
            signo = "Libra";
            break;
        case 11:
            signo = "Escorpio";
            break;
        case 12:
            signo = "Sagitario";
            break;
        default:
            return "Mes inválido";
    }

    return `Mes: ${mes} - Signo: ${signo}`;
}

console.log(signoZodiacal(8));