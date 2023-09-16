const EventEmitter = require('events')

const event = new EventEmitter()

event.on('order', (data) => {
    console.log(data);
})

event.emit('order', '!))))')

event.emit('order', 'HELLO')
