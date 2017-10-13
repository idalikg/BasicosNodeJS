
const GlobalEmisor = require('events');

const miEmisor = new GlobalEmisor.EventEmitter();

const repeat = 10;

miEmisor.on('conteo_continuo', (msj) => {
    var plural;

    var x=1;
    var veces = setInterval(()=>{
        (x==1)?plural='vez':plural='veces';
        console.log(`Contando ${x} ${plural}`);
        x++;
        if(x>repeat){ 
            clearInterval(veces); 
            console.log('Conteo finalizado');
            console.log(msj);
        }
    },1000);
        
});

miEmisor.emit('conteo_continuo','Evento conteo_continuo se ejecutó correctamente');