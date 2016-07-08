/*var config = require('./config/configuration');
var httpServer = require("./server/httpServerCode");

httpServer.listen(config.port);

console.log(config.connectionString);
console.log("server listening at port http://localhost:" + config.port);*/

var mySever = require("./server/httpServerCode");
mySever.listen("3000");
console.log("server listening at port http://localhost:3000");
