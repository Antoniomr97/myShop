const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "martinezruizantonio45@gmail.com",
    pass: "cpeq jfhe axsy wsdh",
  },
});

const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: "martinezruizantonio45@gmail.com",
      to: to,
      subject: subject,
      html: html,
    };

    await transporter.sendMail(mailOptions);
    console.log("It has been sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
  }
};
module.exports = { sendEmail };
