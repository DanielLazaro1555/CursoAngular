(function () {
    // Función declarada usando la palabra clave 'function'
    let miFuncion = function (a: string) {
        return a.toUpperCase();
    }

    // Función de flecha (arrow function) corregida
    const miFuncionF = (a: string) => a.toUpperCase(); // Aquí se agregó la invocación de la función

    // Descomenta las siguientes líneas para probar las funciones y corregir errores

    // console.log(miFuncion('Normal'));
    // console.log(miFuncionF('Flecha'));

    // Función para sumar dos números declarada usando la palabra clave 'function'
    const sumarN = function(a: number, b: number) {
        return a + b;
    }

    // Función para sumar dos números usando arrow function (corregida)
    const sumarF = (a: number, b: number) => a + b; // Se corrigió la declaración de parámetros
    //console.log(sumarN(5, 5)); // Salida esperada: 10
    //console.log(sumarF(10, 10)); // Salida esperada: 20

    const hulk = {
        nombre:'Hulk',
        smash(){
            console.log(`${this.nombre} smash!!!`)
        }
    }

    hulk.smash();

    // Descomenta la siguiente línea para probar la función y corregir errores

    // console.log(sumarN(2, 3));
})();