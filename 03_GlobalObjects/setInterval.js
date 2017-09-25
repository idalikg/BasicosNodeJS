// setInterval -> función que permite repetir un bloque de código de manera intermitente, es decir, cada determinado tiempo se va a estar ejecutando, y se detendrá al parar el servidor.

var i = 1;

// Tiempo en milisegundos en el cual se darán las repeticiones
var second = 2000; 

function repeat(){
    console.log(`Hola mundo... ejecución ${i++}`);
}

setInterval(repeat,second);