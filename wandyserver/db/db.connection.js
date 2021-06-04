const mysql = require('mysql')
const dbConfiguration = require('./db.config')

// Create database connection
const connection = mysql.createConnection({
    host: dbConfiguration.HOST,
    user: dbConfiguration.USER,
    password: dbConfiguration.PASSWORD,
    database: dbConfiguration.DB
})

// Open SQL Connection
connection.connect(error => {
    if(error) throw error
    console.log('Successfully connected to the database')
})

module.exports = connection