const fs = require('fs');
const archivo = '../testfile.txt';

 fs.readFile(archivo,function(err,data){
    if(err){
        console.log('Problema en cargar el archivo testfile.txt');
    }
    console.log('Archivo corriendo asincronamente: \n'+data.toString());
    console.log('\nLeyendo archivo testfile.txt asincronamente');
 });