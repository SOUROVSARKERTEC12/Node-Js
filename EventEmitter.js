// Import events module
var events = require('events');

//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//Listener 1
var Listener1 = function Listener1(){
    console.log('listener1 Executed');
}

//Listener 2
var Listener2 = function Listener2(){
    console.log('listener2 Executed');
}

//Bind the connection event with the listener1 funciton
eventEmitter.addListener('connection',Listener1);

//Bind the connection event with the listener2 function
eventEmitter.on('connection',Listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', Listener1);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");
console.log("Program Ended.");