const http = require('http');
const port = 8000;

// Declaración del funcionamiento del servidor como una función
function server(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<h1>Hola mundo</h1>');
    res.write('<br/>');
    res.write('<h3>Servidor corriendo en el navegador</h3>');
    res.end();
}

http.createServer(server).listen(port);

console.log(`Servidor corriendo en el puerto ${port} y mostrando mensaje en el navegador`);