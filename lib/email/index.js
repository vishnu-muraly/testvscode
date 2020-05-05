
const nodemailer = require("nodemailer");
const sgTransport = require('nodemailer-sendgrid-transport');
const templates = require('./templates')
const app_name = require('../../config').app_name
const from_email = process.env.SENDGRID_SENDER || 'testing@mailinator.com'


const optionsforSendgrid = {
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
}
const sendgridTransport = nodemailer.createTransport(sgTransport(optionsforSendgrid));


exports.sendVerification = (to, auth_link) => sendgridTransport.sendMail(
    //mail options
    {
        to: to,
        from: from_email,
        subject: "Please verify your email",
        html: templates.sigupVerification(to, app_name, auth_link)
    }
)