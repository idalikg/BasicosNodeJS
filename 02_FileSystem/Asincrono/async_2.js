const fs = require('fs');
const file = '../testfile.txt';

fs.readFile(file,(err,data) => {
    if(err){
        console.log('No se pudo leer el archivo asíncronamente');
    } else {
        console.log(data.toString());
    }
})
console.log('Archivo testfile.txt ha sido leído de manera asincrona')