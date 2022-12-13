const events = require('events');
var eventEmitter = new events.EventEmitter();

function event1Def(){
    console.log('event1')
}
function event2Def(){
    console.log('event2')
}

eventEmitter.on("event1", event1Def);
eventEmitter.on("event2", event2Def);

eventEmitter.emit("event1")
eventEmitter.emit("event2")

