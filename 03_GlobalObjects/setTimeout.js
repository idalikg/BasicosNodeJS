// setTimeout() -> ejecuta un bloque de código despúes de un tiempo determinado
function executeOne(){
    console.log('\nHola mundo... Se ejecutó la función executeOne()');
}

setTimeout(executeOne,2000);


// clearTimeOut() -> detiene la ejecución de un bloque de código que haya sido declarado en un cierto tiempo mediante un 'setTimeout'

function executeTwo(){
    console.log('Este código no se deberá ejecutar');
}

const pausarEjecucion = setTimeout(executeTwo,5000);

clearTimeout(pausarEjecucion);
console.log('No se ejecutó el código de la función executeTwo()');