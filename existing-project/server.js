const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const PORT = 4444;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`Module JSON Server listening on port ${PORT}`);
});
