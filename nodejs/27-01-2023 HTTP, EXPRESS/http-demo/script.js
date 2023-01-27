const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write('Home page');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.write('About page');
        res.end();
    } else if (req.url === '/login') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        let data = fs.readFileSync(`${__dirname}/login.html`, {encoding: 'utf-8', flag: 'r'});
        res.write(data);
        res.end();
    }
});

server.listen(5000, () => {
    console.log('server connected');
});