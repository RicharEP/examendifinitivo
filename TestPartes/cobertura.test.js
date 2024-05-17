function testcobertura_ejemplo() {
    // Prueba con un número positivo impar
    let result = ejemplo(1);
    console.log(result);
    // Prueba con un número positivo par
    result = ejemplo(2);
    console.log(result);
    // Prueba con un número negativo
    result = ejemplo(-1);
    console.log(result);
    // Prueba con el número cero
    result = ejemplo(0);
    console.log(result);
    // Prueba con el caso por defecto en switch
    result = ejemplo(3);
    console.log(result);
}

testcobertura_ejemplo();