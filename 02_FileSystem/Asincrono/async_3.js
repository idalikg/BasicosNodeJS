const fs = require('fs');
const file = '../testfile.txt';

// Tiempo en milisegundos
var time = 5000; 

// Variable que declara el servidor
var server = (err,data) => {
    if(err){
        // Mensaje de error al no encontrar el archivo
        console.log(`Error al cargar el documento ${file}`);
    } else {

        // Declaración del tiempo en el cual se ha de imprimir el contenido del archivo 'file' en consola..
        setTimeout(()=>{
            console.log(data.toString());
        },time);
    }
};

// Lectura asíncrona del archivo
fs.readFile(file,server);

// Mensaje con el cual se comprueba la carga asíncrona del archivo
console.log(`El archivo ${file} se cargó correctamente`);

