const Login = require('../model/loginModel')

exports.goLogin = (req, res) => {
    console.log('Initializing request to perform login...')

    const username = req.body.username
    const password = req.body.password

    Login.doLogin((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    }, username, password)
}

exports.updateSettings = (req, res) => {
    console.log(`Initializing request to update setting by id ${req.query.id}...`)

    const id = req.query.id
    const desc = req.query.desc

    console.log('ID and desc respectively', id, desc)

    Login.updateSettingsById((err, data)=> {
        if(err) {
            res.status(500).send({
                message: err.message || 'Error occurred while retrieving posts'
            })
        } else {
            res.send(data)
        }
    }, id, desc)
}