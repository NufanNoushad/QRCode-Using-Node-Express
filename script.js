const express = require('express')
const ejs = require('ejs')
const bp = require('body-parser')
const qr = require('qrcode')
const path = require('path')
const port = 3000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))


app.get('/', (req, res, next) => {
    res.render('index');

})

app.post('/scan', (req, res, next) => {
    const input_text = req.body.text;
    console.log(input_text)
    qr.toDataURL(input_text, (err, src) => {
        res.render('scan', {
            qr_code: src,
        })

    })
})




app.listen(port, console.log(`Listening to PORT ${port}`))