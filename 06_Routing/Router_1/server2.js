const http = require('http');

const url = require('url');

const port = 8000;

var users = [
    {
        'nombre': 'Juan',
        'edad' : 21
    },
    {
        'nombre' : 'Luis',
        'edad' : 24
    },
    {
        'nombre' : 'Sean',
        'edad' : 30
    }
];

function server(req,res){
   var direccion = url.parse(req.url).pathname;

    if(direccion === '/' || direccion === '/index'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Página inicio');
    } else if(direccion === '/usuarios'){
        res.writeHead(200,{'Content-Type':'text/html'});
        for(i=0;i<users.length;i++){
            res.write(`<h2>Usuario ${i+1} </h2>`);
            res.write(`<li>Nombre: ${users[i].nombre}</li>`);
            res.write(`<li>Edad: ${users[i].edad} </li>`);
        }
    } else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>ERROR... no se encontró la página solicitada</h1>');
    }
        res.end();
}

http.createServer(server).listen(port);

console.log(`Servidor corriendo en el puerto ${port}`);