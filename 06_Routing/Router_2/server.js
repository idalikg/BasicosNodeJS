const http = require('http');
const fs = require('fs');

// Módulo que permitirá acceder a los métodos y propiedades de las URL's
const url = require('url');

// Número de puerto
const port = 8000;

// Función que renderizará los documentos HTML en el navegador. Recibirá como parámetro de petición (req) la ruta (URL) actual de navegador
function showHTML(ruta,res){
    fs.readFile(ruta, null, (err,data) => {
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write('./404.html');
        } else {
            res.write(data);
        }
        res.end();
    });
};

// Función que servirá como manejador de rutas
function driverRouter(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});

    // Variable que transformará la URL que está siendo requerida por el usuario, y se obtendrá de su propiedad 'pathname'
    var ruta = url.parse(req.url).pathname;

    // Variable de comprobación sobre la ruta actual
    var location = console.log(`\nURL actual: ${req.url}`);

    // Condicionales que determinan la igualdad entre la URL requerida y el documento HTML a mostrar
    if(ruta === '/' || ruta === '/index'){
        showHTML('./index.html',res);
    } else if(ruta === '/page2'){
        showHTML('./page2.html', res);
    } else if(ruta === '/page3'){
        showHTML('./page3.html', res);
    } else {
        showHTML('./404.html', res);
    }
};

// Servidor corriendo
http.createServer(driverRouter).listen(port);

console.log(`Servidor corriendo en el puerto ${port} `);