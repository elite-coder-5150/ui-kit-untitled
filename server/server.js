/** eslint-disable  */
const mysql = require('mysql');

const db = mysql.createConnection({
    // this is where the config goes
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'ui-kit-untitled',
    'port' : 888
 });

 db.cloze();

module.export = db;