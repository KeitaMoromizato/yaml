const http = require('http');

const yaml2Component = require('../lib');

const PORT = 3000 || process.env.PORT;

http.createServer((req, res) => {
  const html = yaml2Component('./test.yml');

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

