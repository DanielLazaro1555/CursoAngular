"use strict";
(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    const nombre = 'Daniel';
    const apellido = 'Huaman';
    const edad = 23;
    // const salida = nombre + apellido + edad:
    // const salida = nombre + "" + apellido + "(" + edad + " ) ";
    const salida = `${nombre} ${apellido} ( ${getEdad()} )`;
    //Daniel Huaman  (Edad : 23)
    console.log(salida);
})();
