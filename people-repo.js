const { mySqlDb } = require('./connection');

class PeopleRepo {
  readPeople() {
    const query = 'select first_name as firstName, last_name as lastName, email from people.people;'
    return mySqlDb.runQuery(query);
  }
};

module.exports = {
  peopleRepo: new PeopleRepo(),
}