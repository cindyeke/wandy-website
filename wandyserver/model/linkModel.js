const sqlConnection = require('../db/db.connection')

class Link {
    constructor(linkname, pathname, count) {
        this.linkname = linkname
        this.pathname = pathname
        this.count = count
    }

    createNewLink(newLink, result){
        const values = [newLink.linkname, newLink.pathname, newLink.count]
        const sqlStatement = 'INSERT INTO category_links (name, pathname, count) VALUES(?)'

        sqlConnection.query(sqlStatement, [values], (err, res) => {
            if(err) {
                console.log('error: ', err)
                result(err, null)

                return;
            }

            result(null, 'Success!')
        })
    }

    static deleteLink(result, id){
        const sqlStatement = 'DELETE FROM category_links WHERE id = ?'

        sqlConnection.query(sqlStatement, id, (err, res) => {
            if(err) {
                console.log('error: ', err)
                result(err, null)

                return;
            }

            result(null, 'Success!')
        })
    }

    static getLinks(result) {
        const sqlStatement = 'SELECT * FROM category_links'

        sqlConnection.query(sqlStatement, (err, res) => {
            if(err) {
                console.log('error: ', err)
                result(null, err)

                return;
            }

            result(null, res)
        })
    }

    static updateLinks(result, count, linkid) {
        const values = [count, linkid]
        const sqlStatement = 'UPDATE category_links SET count=? WHERE id=?'

        sqlConnection.query(sqlStatement, values, (err, res) => {
            if(err) {
                console.log('error: ', err)
                result(null, err)

                return;
            }

            result(null, 'Success!')
        })
    }
}

module.exports = Link