const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors')
const bodyParser = require('body-parser');


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'ipsita.rao@gmail.com',
        clientId: '65137468569-kvc8r7qbua4hnqtcc603qlg4ul87qpa1.apps.googleusercontent.com',
        clientSecret: 'cdZ0ljx3odGSyCoM4l2bpELg',
        refreshToken: '1//04NT39bz5kZQaCgYIARAAGAQSNwF-L9Irdz66sMrr5QfXkH8jqWmfRFRkygWqlBzwjOO20AsMI4ILsIVGc0bepmenttthug3xR90',
        accessToken: 'ya29.a0Adw1xeWIPPoOwoKw9GpXUqzjytW_mW0-jdYXeu4c_uqlksNx9JBFXloco3ZPJgGSenUAaCUxPnyYOI3AG8Dh4wu2VNt0IsmAFe_QWpMBi2QC0nQDaF8_fU3DK4P3ukX0JWFDPv394kMtOO2fyrYdmOv9wFLSd20po2s'
    }
})


transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res) => {
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


const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use('/', router)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))