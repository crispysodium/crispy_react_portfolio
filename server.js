const express = require("express");
const router = express.Router();
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// nodemailer
const nodemailer = require('nodemailer');
const creds = require("./config.json");

const cors = require("cors");


// Define express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

app.use(express.static(__dirname + "/client/public"));

// Add cors so that frontend can talk to backend
app.use(cors());

//nodemailer
const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
//end of nodemailer code from medium

// route code for nodemailer from medium
app.use(
    router.post('/send', (req, res, next) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    let content = `name: ${name} \nemail: ${email} \nmessage: ${message}`
  
    let mail = {
      from: email,
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
})
);
//end of code from medium

// API and App routes
// app.use(routes);

// Send every other request to the React app

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});