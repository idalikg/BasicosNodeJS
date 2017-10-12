
// Importación del módulo 'events'
const Emisor = require('events');

// Creación de una nuevo objeto del 'emiter' y se le invoca el método 'EventEmitter() del módulo 'events'
const miEmisor = new Emisor.EventEmitter();

// Suscripción o declaración de eventos
    // la función callback se ejecutará cuando el evento 'saludar' sea disparado
miEmisor.on('saludar',function(mensaje){
    console.log(mensaje);
})
// Emisores de eventos

miEmisor.emit('saludar','evento emitido')
