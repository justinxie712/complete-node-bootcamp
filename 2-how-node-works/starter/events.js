const EventEmitter = require("events");
const http = require("http");

class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
});
myEmitter.on("newEvent", () => {
  console.log("an event occurred222!");
});

myEmitter.on("newEvent2", (stock) => {
  console.log("there is ", stock);
});
myEmitter.emit("event");
myEmitter.emit("newEvent");
myEmitter.emit("newEvent2", 2);

//////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Request received222");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
