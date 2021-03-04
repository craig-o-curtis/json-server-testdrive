module.exports = () => {
  var faker = require("faker");
  var { times } = require("lodash");

  return {
    people: times(5, (idx) => {
      return {
        id: idx + 1,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
      };
    }),
  };
};
