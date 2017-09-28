const http = require('http');

// 'url' es el módulo quue incluye los método para obtener toda aquela información relacionada a las URL´s
const url = require('url');

const port = 8000; // número de puerto

var server = (req,res) => {

    // variable que guardará la URL que está ocupando el usuario para acceder al servidor
    var path = req.url;

    //  el método 'parse' del módulo 'url' permite convertir el contenido de las URL en un objeto, y se accede a la propiedad 'pathname'
    path = url.parse(req.url).pathname;
    // console.log(path);
    
    if(path === '/' || path === '/index.html'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Página principal</h1>');
    } else if(path === '/contacto'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Página de contacto</h1>');
    } else if(path === '/acerca'){
        res.writeHead(202,{'Content-Type':'text/html'});
        res.write('<h1>Página acerca</h1>');
    } else {
       res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>Página no encontrada</h1>')
    }
    res.end();
};

http.createServer(server).listen(port);

console.log(`Servidor corriendo en el puerto ${port}`);
