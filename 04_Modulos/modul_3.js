const calculos = require('./modules/operaciones.js');

var value1 = 2,
    value2 = 3;

console.log(`${value1} + ${value2} es igual a ${calculos.suma(value1,value2)}`);

console.log(`${value1} * ${value2} es igual a ${calculos.multiplicacion(value1,value2)}`);