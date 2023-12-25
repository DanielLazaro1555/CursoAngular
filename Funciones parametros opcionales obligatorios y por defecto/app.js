(function () {
    function activar(quien, momento, objeto) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
        if (momento) {
            console.log("".concat(quien, " activ\u00F3 la ").concat(objeto, " en la ").concat(momento, "."));
        }
        else {
            console.log("".concat(quien, " activ\u00F3 la ").concat(objeto, "."));
        }
    }
    activar('Gordon', 'tarde');
})();
