const fs = require('fs');

var file = './files_edit/testfile_fs.txt';

// fs.appendFile --> agrega datos o información nueva dentro de los archivos existentes.

var new_string = '\n\nNEW TEXT: \nLorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta necessitatibus odit et maiores dolor, inventore similique doloremque, dolorem maxime quibusdam nobis provident, ex voluptatibus repudiandae aliquam corporis itaque totam quia!';

fs.appendFile(file,new_string,'utf-8', (err) => {
    (err)?console.log(`No se pudo añadir nuevo string dentro del archivo ${file}`):console.log('Text añadido satisfactoriamente');
})