const express = require('express')
const router = express.Router()
const cors = require('cors')
const multer = require('multer')

const posts = require('../controller/postsController')
const links = require('../controller/linksController')

const DIR = './public'

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, DIR)
    },
    filename: function(req, file, cb){
        const fileName = file.originalname.toLowerCase().split(' ').join('-')
        cb(null, Date.now()+'-'+fileName)
    }
})

const upload = multer({
    storage:storage
})

router.options('*', cors())

router.post('/post', cors(), upload.single('image'), posts.createPost)

router.put('/post', cors(), upload.single('image'), posts.updatePost)

router.put('/post/noimage', cors(), posts.updatePostWithNoImage)

router.get('/posts', cors(), posts.findAllWithLimits)

router.get('/posts/all', cors(), posts.findAll)

router.get('/posts/count', cors(), posts.getPostsCount)

router.get('/posts/category', cors(), posts.getCategoryPosts)

router.delete('/post', cors(), posts.deletePost)

router.get('/links', cors(), links.findAll)

router.post('/link', cors(), links.createCategory)

router.delete('/link', cors(), links.deleteCategory)

router.put('/link', cors(), links.updateLinkCount)

router.get('/socials', cors(), posts.findAllSocials)

module.exports = router