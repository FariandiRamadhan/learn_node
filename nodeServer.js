const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <html>
            <head>
                <title>First Node Server</title>
            </head>
            <body>
                <div style="min-width:100vw; text-align:center">
                    <h1>My First Node Server</h1>
                    <p>Welcome to node server</p>
                    <p>
                        Source : 
                        <a href="https://nodejs.org/docs/latest/api/" target:_blank style="text-decoration: none"> 
                        Official Node JS Documentation
                        </a>
                    </p>
                </div>
            </body>
        </html>
        `
    );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});