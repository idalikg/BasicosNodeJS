const fs = require('fs');

var file = './files_edit/testfile_fs.txt';

// fs.readFile -> lectura asíncrona de archivos

fs.readFile(file,'utf-8', (err,doc)=>{
    if(err) { console.log('Error de lectura'); }
    console.log(doc);
});