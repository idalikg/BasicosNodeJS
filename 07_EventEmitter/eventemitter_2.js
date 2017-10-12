
// Importación del módulo 'vents'
const Emisor = require('events');

// Creación de un nuevo objeto que emitirá y ejecutará los eventos
const miEvento = new Emisor.EventEmitter();

// Declaración del evento 'setinterval'
miEvento.on('setinterval', () => {
    var x = 1;
    setInterval( () => {
        console.log(`Hola mundo ${x++}`);
    },1000);
});

// Asignación o registro del evento 'setinterval' para que el objeto 'miEvento' sea quién lo emita
miEvento.emit('setinterval', 'setInterval ejecutado satisfactoriamente');