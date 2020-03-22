const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors')
const bodyParser = require('body-parser');

require('dotenv').config();
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors())
app.use(express.json())



const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'ipsita.rao@gmail.com',
        clientId: process.env.DB_CLIENTID,
        clientSecret: process.env.DB_CLIENTSECRET,
        refreshToken: process.env.DB_REFRESHTOKEN,
        accessToken: process.env.DB_ACCESSTOKEN
    }
})


transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n message: ${message} `

    const mailOptions = {
        from: name,
        to: 'ipsita.rao@gmail.com',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})


app.use('/', router)


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
// "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
