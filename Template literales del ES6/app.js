(function () {
    function getEdad() {
        return 100 + 100 + 300;
    }
    var nombre = 'Daniel';
    var apellido = 'Huaman';
    var edad = 23;
    // const salida = nombre + apellido + edad:
    // const salida = nombre + "" + apellido + "(" + edad + " ) ";
    var salida = "".concat(nombre, " ").concat(apellido, " ( ").concat(getEdad(), " )");
    //Daniel Huaman  (Edad : 23)
    console.log(salida);
})();
