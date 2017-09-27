// Módulos: 'http' para crear el servidor, y 'fs' para tener acceso a los achivos del sistema
const http = require('http');
const fs = require('fs');

const file = './index.html';

let port = 8000; //puerto

// Declaración del servidor
var server = (req,res) => {
    fs.readFile(file, null, (err,data) => {
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write('<h1>Error 404!!!</h1><br/><h2>Archivo no encontrado</h2>');
        } else {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
        }
        res.end();
    })
};

// Corriendo el servidorx  
http.createServer(server).listen(port);

console.log(`Servidor corriendo en el puerto ${port}`);