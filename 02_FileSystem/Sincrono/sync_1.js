// Dealaración del módulo 'fs' que permitirá accesar a los archivos del sistema
const fs = require('fs');

// Asignación del método 'readFileSync' del módulo  'fs' a traves de la variable 'file'
const file = fs.readFileSync('testfile.txt');

// Impresión en consola del contenido del archivo mediante el método 'toString()'
console.log(file.toString());

// Texto a imprimir una vez que sea leído el archivo 'testfile.txt'
console.log('Archivo testfile.txt cargado de manera síncrona en consola');