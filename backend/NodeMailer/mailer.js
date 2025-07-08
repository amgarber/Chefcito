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
                    resolve(!error)
                }
            )
        })
    }

    async RequestforAdminNotification(
        adminName,
        name,
        email,
        subject,
        time,
        approveURL,
        rejectURL
    ) {
        const buttonsHTML = `
            <div style="margin-top: 16px;">
                <a href="${approveURL}" style="
                    padding: 10px 16px;
                    background: #28a745;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                    margin-right: 12px;">
                    ✅ Approve
                </a>
                <a href="${rejectURL}" style="
                    padding: 10px 16px;
                    background: #dc3545;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;">
                    ❌ Reject
                </a>
            </div>
        `;

        return new Promise((resolve) => {
            this.transporter.sendMail(
                {
                    from: dotenv.MAIL_USER,
                    to: email,
                    subject: `${name} has requested approval for a recipe`,
                    html: `
                        <p>Hi ${adminName},</p>
                        <p><strong>${name}</strong> has requested to make public their recipe.</p>
                        <ul>
                            <li><strong>Recipe Name:</strong> ${subject}</li>
                            <li><strong>Requested Time:</strong> ${time}</li>
                        </ul>
                        <p>Please review it and take action:</p>
                        ${buttonsHTML}
                        <p style="margin-top: 24px;">Best regards,<br/>Chefcito's Team</p>
                    `,
                },
                (error) => {
                    resolve(!error)
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
