const path = require("path");
const router = require("express").Router();
const nodemailer = require("nodemailer");
const creds = require("../config.json");
const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}
const transporter = nodemailer.createTransport(transport);

router.route("/send")
  .post("/", (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    let content = `name: ${name} \nemail: ${email} \nmessage: ${message} `
  
    let mail = {
      from: name,
      to: creds.USER,  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
    
  });

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;