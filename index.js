const jsonServer = require('json-server');

const server = jsonServer.create();
const route = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();
server.use(route)
server.use(middlewares);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
}

);