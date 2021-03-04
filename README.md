# json-server test drive

## Project Resources

- [json-server](https://github.com/typicode/json-server) for super fast mock BE, endpoints
- [Mockaroo](https://mockaroo.com/) for hard-coded mock data
- [Faker](https://github.com/marak/Faker.js/) for dynamic mock data

## Scripts

- run static db file with `json-server db.json` or `npm run start`
- run generated db file with `json-server generate.js` or `npm run faker` for faker people
- run modularized json-server db (for adding existing projects) with `node ./existing-project server.js` or `npm run module`

## Commands

- type `s` in terminal to save db snapshot
- curl to GET `curl http://localhost:3333/people`

## Config

- `.json-server.json` optional, or options can be set in npm scripts

## Notes

- specify port with `-p`
- optional specification of db.json path `./db.json` or `db.json`
- paginate with `/people?_page=2`, `/people?_page=2&_limit=20` (limit default at 10)
- sort with `/people?_order=desc,asc`
  for more options, see [json-server](https://github.com/typicode/json-server)

## Querying

- Add query strings according to data: `http://localhost:3333/people?first_name=Melisandra`
- Search all properties with `q` : `http://localhost:3333/people?q=Steve`

## Auto-generated Endpoints

- GET `/people`
- GET `/people/{id}`
- POST `/people`
- PUT `/people/{id}`
- PATCH `/people/{id}`
- DELETE `/people/{id}`

## Add to existing project as a module

- install with `npm i json-server --save-dev`
- create `server.js` file, for example:

```js
// server.js
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
```

- Add script to start `"module": "node ./existing-project/server.js",`

## Other Resources

- [JSON Placeholder](https://jsonplaceholder.typicode.com/) for free fake API
- [My JSON Server](https://my-json-server.typicode.com/) to create db.json on GitHub, just create a repo with db.json file only
- [Hotel](https://github.com/typicode/hotel) for easy project spin-up management, start projects from the browser ** Doesn't work with Node 14 **
