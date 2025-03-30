const express = require('express')
const app = express()

let port = 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.listen(port, function () {
    console.log(`listening on http://localhost:${port}`)
})