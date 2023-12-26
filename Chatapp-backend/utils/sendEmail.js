const nodemailer = require("nodemailer");

exports.sendEmail = async (email, subject, payload) => {
  console.log("Sending email....");
  try {
    var transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "saranyaayyamuthu96@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: "saranyaayyamuthu96@gmail.com",
      to: email,
      subject: subject,
      text: JSON.stringify(payload),
    };
    await transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("Error while sending mail: ", err);
        return false;
      }
      console.log("Success.");
      return true;
    });
  } catch (error) {
    console.log("Error: Send Mail: ", error);
    return false;
  }
};
