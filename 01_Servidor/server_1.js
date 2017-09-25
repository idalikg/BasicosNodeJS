
const http =  require("http");
const port = 8000;

// Servidor corriendo como un parámetro dentro de la función 'createServer'
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Primer aplicación corriendo en Node");
    res.end()
}).listen(8000);

console.log(`Servidor corriendo en el puerto: ${port}`);