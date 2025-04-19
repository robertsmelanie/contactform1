const express = require('express');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', async (require, res) => {
    const { name, email, message } = req.body;

    // Basic Validation
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or use any SMTP Server
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact form submission from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Email sent successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email.');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

