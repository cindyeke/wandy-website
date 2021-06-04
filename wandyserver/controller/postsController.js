const Posts = require('../model/postModel')

exports.createPost = (req, res) => {
    console.log('Initializing request to create new post on database...')

    const title = req.body.title
    const description = req.body.description
    const tag = req.body.tag
    const createdAt = req.body.createdAt
    const updatedAt = req.body.updatedAt
    const image = req.file.filename

    const newPost = new Posts(title, description, tag, createdAt, updatedAt, image)

    newPost.createNewPost(newPost, (err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    })
}

exports.updatePost = (req, res) => {
    console.log('Initializing request to update post on database...')

    const title = req.body.title
    const description = req.body.description
    const tag = req.body.tag
    const createdAt = req.body.createdAt
    const updatedAt = req.body.updatedAt
    const image = req.file.filename
    const id = req.body.id

    console.log('Here is img', image)

    const newPost = new Posts(title, description, tag, createdAt, updatedAt, image)

    newPost.updatePost(newPost, id, (err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    })
}

exports.updatePostWithNoImage = (req, res) => {
    console.log('Initializing request to update post on database...')

    const title = req.body.title
    const description = req.body.description
    const tag = req.body.tag
    const createdAt = req.body.createdAt
    const updatedAt = req.body.updatedAt
    const id = req.body.id

    const newPost = new Posts(title, description, tag, createdAt, updatedAt)

    newPost.updatePostNoImg(newPost, id, (err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    })
}

exports.findAllWithLimits = (req, res) => {
    console.log('Initializing request to get all posts with limits from database...')

    const limit1 = req.query.limit1
    const limit2 = req.query.limit2
    
    Posts.getAllPostsWithLimits((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    }, limit1, limit2)
}

exports.findAll = (req, res) => {
    console.log('Initializing request to get all posts from database...')
    
    Posts.getAllPosts((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    })
}

exports.getPostsCount = (req, res) => {
    console.log('Initializing request to get count of posts from database...')

    Posts.getPostsCount((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data.toString())
        }
    })
}

exports.getCategoryPosts = (req, res) => {
    console.log('Initializing request to get posts by category from database...')

    const queryParam = req.query.id

    Posts.getPostsByCategory((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    }, queryParam)
}

exports.deletePost = (req, res) => {
    console.log(`Initializing request to get delete post with id ${req.query.id} limits from database...`)

    const id = req.query.id
    console.log('got here')
    Posts.deletePostById((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    }, id)
}

exports.findAllSocials = (req, res) => {
    console.log('Initializing request to get all social from database...')
    
    Posts.getSocials((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    })
}