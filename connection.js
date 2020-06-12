const mysql = require('mysql');
const fs = require('fs');
const { promisify } = require('util');

const path = `env-config/env.${process.env.ENVIRONMENT || 'local'}.json`;

class MysqlConnection {
  constructor() {
    const dbConfig = JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));

    this.connection = mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
      database: dbConfig.database,
      typeCast: false,
    });
  }

  async runQuery(query) {
    debugger;
    const doQuery = promisify(this.connection.query.bind(this.connection));
    const result = await doQuery(query);

    return result;
  }
}

module.exports = {
  mySqlDb: new MysqlConnection(),
}
