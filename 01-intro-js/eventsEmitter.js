const EventsEmitter = require("events"); // EventsEmitter is a class which we can extend for custom events
const customEmitter = new EventsEmitter();

// on listens for an event
// here "response" is the name of the event, we can use any name we want.
customEmitter.on("response", () => {
  console.log(`Data received`);
});

// using the paramter passed by emit (optional totally)
customEmitter.on("response", (id)=>{
    console.log(`Data with id: ${id}`);
    
})

// emit will emit an event

// always make sure we listen to the event first before emitting it for the code to work

// we can also pass values as arguments from emit() to on() as parameters just like normal functions but it's totally optional for the on() to use the argument passed or not
customEmitter.emit("response",23);
