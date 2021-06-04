const sqlConnection = require('../db/db.connection')

class Login {
    constructor(username, password){
        this.username = username
        this.password = password
    }

    static doLogin(result, username, password) {
        const sqlStatement = 'SELECT * FROM users WHERE username = ? AND password = ?'
        const params = [username, password]

        sqlConnection.query(sqlStatement,[username, password], (err, res) => {
            if(err) {
                console.log('error: ', err)
                result(null, err)

                return;
            }
            
            result(null, res)
        })
    }


    static updateSettingsById(result, id, desc) {
        const values = [desc, id]
        const sqlStatement = 'UPDATE social SET description = ? WHERE id = ?'

        sqlConnection.query(sqlStatement,values, (err, res) => {
            if(err) {
                console.log('error: ', err)
                result(null, err)

                return;
            }
            
            result(null, res)
        })
    }

}

module.exports = Login