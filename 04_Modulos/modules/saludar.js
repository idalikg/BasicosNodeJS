// Declaración de funciones
const saludo = () => {
    return console.log('Hola mundo desde un módulo');
};

// Declaración de variables 
let uno = 1;
let dos = 2;
let tres = 3;

// Exportación individual por cada variable o/y función
module.exports.saludo = saludo;
module.exports.var1 = uno;
module.exports.var2 = dos;
module.exports.var3 = tres;