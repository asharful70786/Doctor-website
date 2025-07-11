import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
   auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});


  async function SubscribedMail(email) {
  const info = await transporter.sendMail({
    from: `"Medicine Supply" <${process.env.NODE_MAILER_EMAIL}>`,
    to: process.env.Node_MAILER_Reciver,
    subject: "🛎️ New Subscriber Alert – Medical Practice Updates",
    text: `New subscriber: ${email}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 30px; background: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <div style="background: linear-gradient(135deg, #1e3a8a, #2563eb); color: white; padding: 30px; text-align: center;">
            <h2 style="margin: 0;">🛎️ New Subscriber Alert</h2>
            <p style="margin-top: 10px; font-size: 16px;">Medical Practice Newsletter</p>
          </div>
          
          <div style="padding: 25px;">
            <p style="font-size: 16px; color: #333;">Dear Doctor,</p>
            <p style="font-size: 15px; color: #444; margin-top: 10px;">
              A new user has subscribed to receive updates and news from your website.
            </p>
            
            <div style="margin: 20px 0; padding: 15px 20px; background-color: #ecfdf5; border-left: 5px solid #10b981; font-size: 16px; font-weight: bold; color: #065f46;">
              📧 ${email}
            </div>
            
            <p style="font-size: 14px; color: #555;">
              You can respond to this user or add them to your mailing list.
            </p>
            
            <div style="margin-top: 25px;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                📬 Reply to Subscriber
              </a>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 13px; color: #6b7280;">
            This email was generated automatically from your Medical Practice Portal.
          </div>
        </div>
      </div>
    `
  });

  console.log("✅ Message sent:", info.messageId);
}


export default SubscribedMail