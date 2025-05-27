

const dotenv = require('dotenv').config().parsed;
const nodemailer = require('nodemailer');

class Mailer {
    transporter

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            auth: {
                user: dotenv.MAIL_USER,
                pass: dotenv.MAIL_PASSWORD,
            },
        })
    }

    async sendRegisterMail(name, email) {
        return new Promise((resolve) => {
            this.transporter.sendMail(
                {
                    from: dotenv.MAIL_USER,
                    to: email,
                    subject: "Chefcito Registration",
                    text: `Hi ${name}, thanks for signing in to Chefcito! If you didn't do this action, click here to delete your account.`,
                },
                (error) => {
                    if (error) {
                        resolve(false)
                    }
                    resolve(true)
                }
            )
        })
    }


    async RequestforAdminNotification(
        adminName,
        name,
        email,
        subject,
        time
    ) {
        return new Promise((resolve) => {
            this.transporter.sendMail(
                {
                    from: dotenv.MAIL_USER,
                    to: email,
                    subject: `${name} has requested approval for a recipe`,
                    html: `
                        <p>Hi ${adminName},</p>
                        <p>${name} has requested to make public their recipe. </p>
                        <ul>
                            <li><strong>Recipe Name:</strong> ${subject}</li>
                            <li><strong>Requested Time:</strong> ${time}</li>
                        </ul>
                        <p>Please revise it as soon as possible, as ${name} is wating for a response.</p>
                        <p>Best regards,</p>
                        <p>Chefcito's Team</p>
                    `,
                },
                (error) => {
                    if (error) {
                        resolve(false)
                    }
                    resolve(true)
                }
            )
        })
    }
    async sendApprovalResult(name, email, recipeName, isApproved) {
        const statusText = isApproved ? "approved" : "rejected";
        const subject = `Your recipe has been ${statusText}`;
        const html = `
        <p>Hi ${name},</p>
        <p>Your recipe <strong>${recipeName}</strong> has been <strong>${statusText}</strong> by the administrator.</p>
        <p>${isApproved ? "It's now public and visible to all users!" : "You can improve it and try again later."}</p>
        <p>Best regards,<br/>Chefcito's Team</p>
    `;

        return new Promise((resolve) => {
            this.transporter.sendMail(
                {
                    from: dotenv.MAIL_USER,
                    to: email,
                    subject,
                    html
                },
                (error) => {
                    resolve(!error);
                }
            );
        });
    }

}

const mailer = new Mailer()

module.exports = mailer