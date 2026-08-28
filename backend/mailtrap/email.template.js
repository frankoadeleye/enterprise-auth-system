export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Verify Your Email</title>
</head>

<body style="
  margin:0;
  padding:20px;
  background:#f7f7f7;
  font-family:Arial,sans-serif;
">

<div style="
  max-width:600px;
  margin:auto;
  background:white;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
">

  <div style="
    background:linear-gradient(135deg,#fee502,#6fa626);
    padding:30px;
    text-align:center;
  ">
    <h1 style="margin:0;color:#715844;">
      Enterprise-Auth-System
    </h1>

    <p style="margin-top:10px;color:#715844;">
      Secure Authentication Made Simple
    </p>
  </div>

  <div style="padding:40px 30px;">

    <h2 style="color:#715844;margin-top:0;">
      Verify Your Email
    </h2>

    <p>
      Welcome to Enterprise-Auth-System!
    </p>

    <p>
      Enter the verification code below to verify your email address
      and activate your account:
    </p>

    <div style="
      text-align:center;
      margin:35px 0;
    ">

      <div style="
        display:inline-block;
        background:#fff8cc;
        border:2px dashed #fee502;
        border-radius:12px;
        padding:18px 30px;
      ">

        <span style="
          font-size:34px;
          font-weight:bold;
          letter-spacing:8px;
          color:#6fa626;
        ">
          {verificationCode}
        </span>

      </div>

    </div>

    <p>
      This code will expire in <strong>15 minutes</strong>.
    </p>

    <p>
      If you did not create an Enterprise-Auth-System account,
      you can safely ignore this email.
    </p>

    <p>
      Regards,<br>
      <strong>The Enterprise-Auth-System Team</strong>
    </p>

  </div>

  <div style="
    background:#fafafa;
    padding:20px;
    text-align:center;
    color:#888;
    font-size:13px;
  ">
    This is an automated email. Please do not reply.
  </div>

</div>

</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to Enterprise-Auth-System</title>
</head>

<body style="
  margin:0;
  padding:20px;
  background:#f7f7f7;
  font-family:Arial,sans-serif;
">

<div style="
  max-width:600px;
  margin:auto;
  background:white;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
">

  <div style="
    background:linear-gradient(135deg,#fee502,#6fa626);
    padding:30px;
    text-align:center;
  ">

    <h1 style="margin:0;color:#715844;">
      Enterprise-Auth-System
    </h1>

    <p style="margin-top:10px;color:#715844;">
      Secure Authentication Made Simple
    </p>

  </div>

  <div style="padding:40px 30px;">

    <h2 style="color:#715844;margin-top:0;">
      Welcome, {userName}!
    </h2>

    <p>
      Your email has been successfully verified and your
      Enterprise-Auth-System account is now active.
    </p>

    <p>
      You can now securely sign in and start using your account.
    </p>

    <div style="
      text-align:center;
      margin:35px 0;
    ">

      <div style="
        width:80px;
        height:80px;
        line-height:80px;
        margin:auto;
        background:#6fa626;
        color:white;
        border-radius:50%;
        font-size:42px;
        font-weight:bold;
      ">
        ✓
      </div>

    </div>

    <p>
      Thank you for joining Enterprise-Auth-System.
    </p>

    <p>
      Regards,<br>
      <strong>The Enterprise-Auth-System Team</strong>
    </p>

  </div>

  <div style="
    background:#fafafa;
    padding:20px;
    text-align:center;
    color:#888;
    font-size:13px;
  ">
    This is an automated email. Please do not reply.
  </div>

</div>

</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reset Your Password</title>
</head>

<body style="
  margin:0;
  padding:20px;
  background:#f7f7f7;
  font-family:Arial,sans-serif;
">

<div style="
  max-width:600px;
  margin:auto;
  background:white;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
">

  <div style="
    background:linear-gradient(135deg,#fee502,#6fa626);
    padding:30px;
    text-align:center;
  ">

    <h1 style="margin:0;color:#715844;">
      Enterprise-Auth-System
    </h1>

  </div>

  <div style="padding:40px 30px;">

    <h2 style="color:#715844;">
      Password Reset Request
    </h2>

    <p>
      We received a request to reset your
      Enterprise-Auth-System password.
    </p>

    <p>
      Click the button below to create a new password:
    </p>

    <div style="text-align:center;margin:35px 0;">

      <a
        href="{resetURL}"
        style="
          background:#6fa626;
          color:white;
          text-decoration:none;
          padding:14px 28px;
          border-radius:999px;
          font-weight:bold;
          display:inline-block;
        "
      >
        Reset Password
      </a>

    </div>

    <p>
      This link will expire in <strong>1 hour</strong>.
    </p>

    <p>
      If you didn't request this reset, you can safely ignore this email.
    </p>

    <p>
      Regards,<br>
      <strong>Enterprise-Auth-System Team</strong>
    </p>

  </div>

  <div style="
    background:#fafafa;
    padding:20px;
    text-align:center;
    color:#888;
    font-size:13px;
  ">
    This is an automated email. Please do not reply.
  </div>

</div>

</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Password Reset Successful</title>
</head>

<body style="
  margin:0;
  padding:20px;
  background:#f7f7f7;
  font-family:Arial,sans-serif;
">

<div style="
  max-width:600px;
  margin:auto;
  background:white;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);
">

  <div style="
    background:linear-gradient(135deg,#fee502,#6fa626);
    padding:30px;
    text-align:center;
  ">

    <h1 style="margin:0;color:#715844;">
      Enterprise-Auth-System
    </h1>

  </div>

  <div style="padding:40px 30px;">

    <h2 style="color:#715844;">
      Password Updated Successfully
    </h2>

    <p>
      Hello {userName},
    </p>

    <p>
      Your Enterprise-Auth-System password has been successfully changed.
    </p>

    <div style="
      text-align:center;
      margin:35px 0;
    ">

      <div style="
        width:80px;
        height:80px;
        line-height:80px;
        margin:auto;
        background:#6fa626;
        color:white;
        border-radius:50%;
        font-size:42px;
        font-weight:bold;
      ">
        ✓
      </div>

    </div>

    <p>
      If you did not make this change, please contact support immediately.
    </p>

    <p>
      Thank you for using Enterprise-Auth-System.
    </p>

    <p>
      Warm regards,<br>
      <strong>Enterprise-Auth-System Team</strong>
    </p>

  </div>

  <div style="
    background:#fafafa;
    padding:20px;
    text-align:center;
    color:#888;
    font-size:13px;
  ">
    This is an automated email. Please do not reply.
  </div>

</div>

</body>
</html>
`;
