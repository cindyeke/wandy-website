const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', require('./route/postroute'))
app.use('/login', require('./route/loginroute'))



app.listen(PORT, ()=>{
    console.log(`Wandy Server running on port ${PORT}`)
})

