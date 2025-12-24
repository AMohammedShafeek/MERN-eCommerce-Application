const VerificationEmail = (username, otp) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Email Verification</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f4f6f8;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          font-size: 22px;
          font-weight: bold;
          color: #333;
        }
        .content {
          margin-top: 20px;
          font-size: 15px;
          color: #555;
          line-height: 1.6;
        }
        .otp-box {
          margin: 30px auto;
          width: fit-content;
          padding: 12px 25px;
          font-size: 26px;
          font-weight: bold;
          letter-spacing: 6px;
          color: #ffffff;
          background: #4f46e5;
          border-radius: 6px;
        }
        .footer {
          margin-top: 30px;
          font-size: 13px;
          color: #888;
          text-align: center;
        }
        .note {
          margin-top: 15px;
          font-size: 13px;
          color: #999;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          Email Verification
        </div>

        <div class="content">
          <p>Hi <strong>${username}</strong>,</p>

          <p>
            Thank you for registering with us.  
            Please use the OTP below to verify your email address.
          </p>

          <div class="otp-box">
            ${otp}
          </div>

          <p>
            This OTP is valid for <strong>10 minutes</strong>.  
            Please do not share this code with anyone.
          </p>

          <p class="note">
            If you didn’t request this verification, you can safely ignore this email.
          </p>
        </div>

        <div class="footer">
          © ${new Date().getFullYear()} REPIIT eCommerce App. All rights reserved.
        </div>
      </div>
    </body>
  </html>
  `
}

export default VerificationEmail
