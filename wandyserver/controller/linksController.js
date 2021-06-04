const Link = require('../model/linkModel')


exports.findAll = (req, res) => {
    console.log('Initializing request to get all links from database...')
    
    Link.getLinks((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    })
}

exports.createCategory = (req, res) => {
    console.log('Initializing request to create new category link on database...')

    const newLink = new Link(req.body.name, req.body.pathname, 0)

    newLink.createNewLink(newLink,(err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    })
}

exports.deleteCategory = (req, res) => {
    console.log('Initializing request to delete category link on database...')

    const id =  req.query.id

    Link.deleteLink((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    }, id)
} 


exports.updateLinkCount = (req, res) => {
    console.log('Initializing request to update category link on database...')

    const id =  req.query.id
    const count = req.query.count

    console.log('ID and count', id, count)

    Link.updateLinks((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    }, count, id)
}