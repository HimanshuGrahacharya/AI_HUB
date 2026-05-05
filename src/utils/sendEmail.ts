import nodemailer from 'nodemailer';

export const sendEmail = async (to: string, resetUrl: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"HSG AI HUB" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Password Reset Request - HSG AI HUB',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a1a; color: #ffffff; padding: 40px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #818cf8; margin: 0;">HSG AI HUB</h1>
          </div>
          <h2 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-bottom: 20px;">Password Reset Request</h2>
          <p style="color: rgba(226,232,240,0.8); line-height: 1.6; margin-bottom: 30px;">
            We received a request to reset the password for your HSG AI HUB account. Please click the button below to securely set a new password.
          </p>
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="${resetUrl}" style="background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Reset Password
            </a>
          </div>
          <p style="color: rgba(226,232,240,0.6); font-size: 0.9em; margin-bottom: 20px;">
            If you did not request this reset, please ignore this email. This link will expire in 1 hour.
          </p>
          <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 30px 0;">
          <p style="color: rgba(226,232,240,0.4); font-size: 0.8em; text-align: center;">
            &copy; ${new Date().getFullYear()} HSG AI HUB. All rights reserved.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Password reset email successfully sent to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email could not be sent');
  }
};
