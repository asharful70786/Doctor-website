import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendMailService = async (name, email, phone, subject, message) => {
  
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });



  const doctorEmailTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Patient Consultation Request</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #2c3e50;
        background-color: #f8fafc;
      }
      
      .email-container {
        max-width: 650px;
        margin: 20px auto;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        border: 1px solid #e2e8f0;
      }
      
      .header {
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        color: white;
        padding: 35px 30px;
        text-align: center;
        position: relative;
      }
      
      .header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        opacity: 0.1;
      }
      
      .medical-icon {
        font-size: 48px;
        margin-bottom: 15px;
        position: relative;
        z-index: 1;
      }
      
      .header h1 {
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 8px;
        position: relative;
        z-index: 1;
      }
      
      .header p {
        font-size: 16px;
        opacity: 0.9;
        position: relative;
        z-index: 1;
      }
      
      .priority-alert {
        background-color: #dc2626;
        color: white;
        padding: 12px 20px;
        text-align: center;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .content {
        padding: 35px 30px;
      }
      
      .greeting {
        font-size: 18px;
        color: #1f2937;
        margin-bottom: 25px;
        font-weight: 500;
      }
      
      .patient-card {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        border-radius: 10px;
        padding: 25px;
        margin: 25px 0;
        border-left: 5px solid #2563eb;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      }
      
      .patient-card h3 {
        color: #1e40af;
        font-size: 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .info-grid {
        display: grid;
        gap: 15px;
      }
      
      .info-item {
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #e5e7eb;
      }
      
      .info-item:last-child {
        border-bottom: none;
      }
      
      .info-icon {
        width: 40px;
        height: 40px;
        background-color: #dbeafe;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        font-size: 18px;
      }
      
      .info-content {
        flex: 1;
      }
      
      .info-label {
        font-size: 13px;
        color: #6b7280;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }
      
      .info-value {
        font-size: 16px;
        color: #1f2937;
        font-weight: 500;
      }
      
      .info-value a {
        color: #2563eb;
        text-decoration: none;
        font-weight: 600;
      }
      
      .info-value a:hover {
        text-decoration: underline;
      }
      
      .message-section {
        background-color: #fffbeb;
        border: 1px solid #fbbf24;
        border-radius: 10px;
        padding: 25px;
        margin: 25px 0;
      }
      
      .message-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
        color: #92400e;
        font-weight: 600;
        font-size: 16px;
      }
      
      .message-text {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        border-left: 4px solid #fbbf24;
        font-style: italic;
        color: #374151;
        line-height: 1.7;
        font-size: 15px;
      }
      
      .action-section {
        background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
        border-radius: 10px;
        padding: 25px;
        margin: 25px 0;
        border-left: 5px solid #10b981;
      }
      
      .action-title {
        color: #065f46;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .action-list {
        list-style: none;
        padding: 0;
      }
      
      .action-list li {
        padding: 8px 0;
        color: #047857;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .action-list li::before {
        content: '✓';
        background-color: #10b981;
        color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
      }
      
      .contact-buttons {
        display: flex;
        gap: 15px;
        margin: 20px 0;
        flex-wrap: wrap;
      }
      
      .btn {
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
      }
      
      .btn-primary {
        background-color: #2563eb;
        color: white;
      }
      
      .btn-secondary {
        background-color: #10b981;
        color: white;
      }
      
      .footer {
        background-color: #f8fafc;
        padding: 25px 30px;
        text-align: center;
        border-top: 1px solid #e5e7eb;
      }
      
      .footer-title {
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 10px;
      }
      
      .footer-text {
        color: #6b7280;
        font-size: 14px;
        line-height: 1.5;
      }
      
      .timestamp {
        background-color: #f3f4f6;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        margin: 20px 0;
        font-size: 14px;
        color: #4b5563;
      }
      
      @media (max-width: 600px) {
        .email-container {
          margin: 10px;
          border-radius: 8px;
        }
        
        .content {
          padding: 25px 20px;
        }
        
        .patient-card {
          padding: 20px 15px;
        }
        
        .contact-buttons {
          flex-direction: column;
        }
        
        .btn {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header -->
      <div class="header">
        <div class="medical-icon">🏥</div>
        <h1>New Patient Consultation Request</h1>
        <p>Medical Practice Management System</p>
      </div>
      
      <!-- Priority Alert -->
      <div class="priority-alert">
        🚨 Immediate Attention Required - New Patient Inquiry
      </div>
      
      <!-- Main Content -->
      <div class="content">
        <div class="greeting">
          Dear Doctor,
        </div>
        
        <p style="margin-bottom: 25px; color: #4b5563; font-size: 16px; line-height: 1.6;">
          You have received a new patient consultation request through your website. 
          Please review the patient information below and respond at your earliest convenience.
        </p>
        
        <!-- Patient Information Card -->
        <div class="patient-card">
          <h3>
            <span>👤</span>
            Patient Information
          </h3>
          
          <div class="info-grid">
            <div class="info-item">
              <div class="info-icon">👨‍⚕️</div>
              <div class="info-content">
                <div class="info-label">Patient Name</div>
                <div class="info-value">${name}</div>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-content">
                <div class="info-label">Email Address</div>
                <div class="info-value">
                  <a href="mailto:${email}">${email}</a>
                </div>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📱</div>
              <div class="info-content">
                <div class="info-label">Phone Number</div>
                <div class="info-value">
                  <a href="tel:${phone}">${phone}</a>
                </div>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📋</div>
              <div class="info-content">
                <div class="info-label">Consultation Subject</div>
                <div class="info-value">${subject || 'General Medical Consultation'}</div>
              </div>
            </div>
          </div>
        </div>
        
             <!-- Quick Contact Buttons -->
     <div class="contact-buttons">
       <a href="mailto:${email}" class="btn btn-primary">
        📧 Reply via Email
       </a>
       <a href="tel:${phone}" class="btn btn-secondary">
       📞 Call Patient (${phone})
       </a>
        </div>

        
        <!-- Message Section -->
        ${message ? `
        <div class="message-section">
          <div class="message-header">
            <span>💬</span>
            Patient's Message
          </div>
          <div class="message-text">
            "${message}"
          </div>
        </div>
        ` : ''}
        
        <!-- Timestamp -->
        <div class="timestamp">
          <strong>📅 Received:</strong> ${new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  })}
        </div>
        
        <!-- Action Items -->
        <div class="action-section">
          <div class="action-title">
            <span>📌</span>
            Recommended Next Steps
          </div>
          <ul class="action-list">
            <li>Review patient's medical inquiry and symptoms</li>
            <li>Contact patient within 24 hours for initial consultation</li>
            <li>Schedule appropriate appointment based on urgency</li>
            <li>Add patient details to your medical records system</li>
            <li>Send appointment confirmation and preparation instructions</li>
          </ul>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="footer">
        <div class="footer-title">Medical Practice Portal</div>
        <div class="footer-text">
          This email was automatically generated from your website's patient inquiry form.<br>
          <strong>Please respond directly to the patient using the contact information provided above.</strong><br>
          <em>Do not reply to this automated email address.</em>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  // Send email to doctor
  await transporter.sendMail({
   from: `"Medical Practice Portal" <${process.env.NODE_MAILER_EMAIL}>`,
    to: email,
    subject: "New Patient Inquiry - Medical Practice Portal",
    html: doctorEmailTemplate,

  });
};