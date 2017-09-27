// Importación de módulo a traves de la declaración de la variable 'hola'
const hola = require('./modules/saludar.js');

// Ejecución de la función 'saludo' del módulo 'saludar.js'
hola.saludo();

// Invocación e mpresión de los valores declarados en el módulo 'saludar.js'
console.log(`Primer valor: ${hola.var1}`);
console.log(`Segundo valor: ${hola.var2}`);
console.log(`Tercer valor: ${hola.var3}`);