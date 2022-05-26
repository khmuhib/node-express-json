const http = require('http');
const port = 5000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>Hello World</h1>");
    res.end();
})

myServer.listen(port, hostname, () => {
    console.warn(`Server is running at http://${hostname}:${port}`);
});