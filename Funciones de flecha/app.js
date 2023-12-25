"use strict";
(function () {
    // Función declarada usando la palabra clave 'function'
    let miFuncion = function (a) {
        return a.toUpperCase();
    };
    // Función de flecha (arrow function) corregida
    const miFuncionF = (a) => a.toUpperCase(); // Aquí se agregó la invocación de la función
    // Descomenta las siguientes líneas para probar las funciones y corregir errores
    // console.log(miFuncion('Normal'));
    // console.log(miFuncionF('Flecha'));
    // Función para sumar dos números declarada usando la palabra clave 'function'
    const sumarN = function (a, b) {
        return a + b;
    };
    // Función para sumar dos números usando arrow function (corregida)
    const sumarF = (a, b) => a + b; // Se corrigió la declaración de parámetros
    //console.log(sumarN(5, 5)); // Salida esperada: 10
    //console.log(sumarF(10, 10)); // Salida esperada: 20
    // Objeto hulk con un método 'smash'
    const hulk = {
        nombre: 'Hulk',
        smash() {
            // Utilizando arrow function para conservar el contexto de 'this'
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    };
    hulk.smash(); // Llamada al método 'smash' del objeto 'hulk'
    // Descomenta la siguiente línea para probar la función y corregir errores
    // console.log(sumarN(2, 3));
})();
