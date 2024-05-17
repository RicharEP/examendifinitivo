function ejemplo(param) {
    // Declaración de la variable resultado
    let resultado = ""; // p1: Inicialización de resultado

    // Estructura condicional if
    if (param > 0) { // p2: Inicio del condicional principal
        if (param % 2 === 0) {
            resultado = "El número es positivo y par."; // p4: Número positivo y par
        } else {
            resultado = "El número es positivo e impar."; // p6: Número positivo e impar
        }
    } else if (param < 0) {
        resultado = "El número es negativo."; // p3: Número negativo
    } else {
        resultado = "El número es cero."; // p5: Número es cero
    }

    // Estructura switch
    switch (param) {
        case 1:
            resultado += " Caso 1."; // p7: Caso 1 en switch
            break;
        case 2:
            resultado += " Caso 2."; // p8: Caso 2 en switch
            break;
        default:
            resultado += " Caso por defecto."; // p9: Caso por defecto en switch
    }

    // Estructura while
    let contador = 0;
    while (contador < 3) { // p10: Inicio del while
        resultado += ` Contador: ${contador}`; // p11: Iteración del contador
        contador++;
    }

    // Return del resultado
    return resultado; // p12: Retorno del resultado
}

// Ejemplo de llamada a la función:
console.log(ejemplo(1)); // El número es positivo e impar. Caso 1. Contador: 0 Contador: 1 Contador: 2
console.log(ejemplo(2)); // El número es positivo y par. Caso 2. Contador: 0 Contador: 1 Contador: 2
console.log(ejemplo(-1)); // El número es negativo. Caso por defecto. Contador: 0 Contador: 1 Contador: 2
console.log(ejemplo(0)); // El número es cero. Caso por defecto. Contador: 0 Contador: 1 Contador: 2
