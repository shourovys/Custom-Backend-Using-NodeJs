const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

let home = fs.readFileSync('./index.html')
let services = fs.readFileSync('./services-container.html')
let client = fs.readFileSync('./client-section.html')
let contact = fs.readFileSync('./contact.html')


const server = http.createServer((req, res) => {
    res.writeHead(200, 'Content-Type', 'text/html');
    if (req.url == "/") {
        res.end(home)
    }
    else if (req.url == "/services-container") {
        res.end(services)
    }
    else if (req.url == "/client-section") {
        res.end(client)
    }
    else if (req.url == "/contact") {
        res.end(contact)
    }
    else {
        res.writeHead(404, 'Content-Type', 'text/html');
        res.end('<h1>404 Page not find</h1>')
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});