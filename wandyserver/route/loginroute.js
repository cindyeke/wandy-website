const express = require('express')
const router = express.Router()
const cors = require('cors')

const login = require('../controller/loginController')

router.post('/', cors(), login.goLogin)

router.put('/settings', cors(), login.updateSettings)


module.exports = router