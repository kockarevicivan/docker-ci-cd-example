// Import Express to be used as a web framework
// and Mongoose to connect to a MongoDB service.
const express = require('express');

const PORT = 8081;// Can be any port, but it has to match the Docker exposed ports.
const HOST = '0.0.0.0';// Localhost

const app = express();

app.get('/', (req, res) => {
	res.send("Hello world!!");
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
