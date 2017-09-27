// Importación de módulo a traves de la declaración de la variable 'opciones'
const opciones = require('./modules/exportacionMultiple.js');
var nombre = 'Louis';

// Ejecución de la método (función) 'saludo'
console.log(opciones.saludo(nombre));

// Impresión de los valores declarados dentro del objeto descrito en el archivo 'esportacionMultiple.js'
console.log(`\nRed es igual a: ${opciones.colorUno}`);
console.log(`\nGreen es igual a: ${opciones.colorDos}`);
console.log(`\nBlue es igual a: ${opciones.colorTres}`);

console.log(`\nEl año tiene ${opciones.diasAnio} días divididos en ${opciones.mesesAnio} meses`);