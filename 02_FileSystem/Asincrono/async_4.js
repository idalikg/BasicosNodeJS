const fs = require('fs');
const file = '../testfile.txt';

// Tiempo en milisegundos
var time = 2000;

fs.readFile(file,(err,data)=>{
    if(err){
        // Mensaje de error al no encontrar el archivo
        console.log(`El archivo ${file} no se encontró`);
    } else {

        // Valor inicial del número de repticiones al ejecutar el setInterval
        var repeat=1;

        // Declaración de las repeticiones con setInterval
        setInterval(()=>{

            // Línea que separa el contenido del archivo al ser impreso en consola
            console.log('\n---------------------------------------');

            // Mensaje en el cual se muestra el conteo del número de veces que se está imprimiendo el contenido del documento.  Con substring se está especificando la posición donde inicia el nombre del archivo a partir de la cadena de caracteres declarado en la variable 'file'.
            console.log(`\nCarga ${repeat++} del documento ${file.substring(3)}`);

            // Conversión del contenido del archivo a una cadena de caracteres.
            console.log(data.toString());
        },time);
    }
});

// Mensaje con el cual se comprueba la carga asíncrona del archivo.
console.log(`El archivo ${file} se está cargando repetitivamente`);