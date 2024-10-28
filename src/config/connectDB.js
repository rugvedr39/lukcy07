const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '8600988002',
    database: 'bdg',
});

export default connection;