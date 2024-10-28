const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'database-1.c1eua666qm6x.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Rugved8600988002',
    database: 'bdg',
});


export default connection;