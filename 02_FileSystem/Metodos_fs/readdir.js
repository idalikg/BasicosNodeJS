const fs = require('fs');

// Variable donde se guardará la ruta del archivo que se está ejecutando
const dir_name = __dirname ;

// string con la ruta especifíca de una sub-carpeta en específico
var subdirectory = '/files_edit';

// Variable que une la ruta del directorio actual y la subcarpeta a buscar
const path = dir_name + subdirectory;
console.log(path);

fs.readdir(path, (err,docs) => {
    console.log(`El contenido de la carpeta ${subdirectory.substring(1)} es: \n`);

    // Ciclo que permitirá obtener el listado de los archivos que están contenidos en una carpeta específica
    // docs.forEach(doc => {
    //     console.log(doc);
    // });

    var x = 1;
    // FOR OF de ECMAScript 6
    for(doc of docs){
        console.log(`${x++}.- ${doc}`);
    }
});