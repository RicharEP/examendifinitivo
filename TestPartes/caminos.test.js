const assert = require('assert');
const ejemplo = require('../tu_archivo_con_la_funcion');

describe("Pruebas de Ruta basica caso", function(){

    it("camino1", function(){
        const result = ejemplo(1);
        assert.strictEqual(result, "El número es positivo e impar. Caso 1. Contador: 0 Contador: 1 Contador: 2");
    });

    it("camino2", function(){
        const result = ejemplo(2);
        assert.strictEqual(result, "El número es positivo y par. Caso 2. Contador: 0 Contador: 1 Contador: 2");
    });

    it("camino3", function(){
        const result = ejemplo(3);
        assert.strictEqual(result, "El número es positivo e impar. Caso por defecto. Contador: 0 Contador: 1 Contador: 2");
    });

    it("camino4", function(){
        const result = ejemplo(-1);
        assert.strictEqual(result, "El número es negativo. Caso por defecto. Contador: 0 Contador: 1 Contador: 2");
    });

    it("camino5", function(){
        const result = ejemplo(0);
        assert.strictEqual(result, "El número es cero. Caso por defecto. Contador: 0 Contador: 1 Contador: 2");
    });
})