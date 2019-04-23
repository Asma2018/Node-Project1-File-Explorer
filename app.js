const http = require('http');

//file imports
const respond = require('./lib/respond.js');

//connection settings
const PORT = process.env.PORT || 3000;

//Create server
const server = http.createServer(respond);

//listen to client requests on the specific port, the port should be available
server.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
