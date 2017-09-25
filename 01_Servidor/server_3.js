const http = require('http');
const port = 8000;

// Declaración del servidor dentro de una variable
var servidor = (req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hola Mundo...');
    res.end();
};

http.createServer(servidor).listen(port);

console.log(`Servidor corriendo en el puerto ${port}`);
