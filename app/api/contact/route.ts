import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  company: string
  countryCode: string
  phone: string
  message: string
}


// Configure your email service here
// Using environment variables for sensitive data
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    const { name, email, company, countryCode, phone, message } = body

    // Validate required fields
    if (!name || !email || !company || !countryCode || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
      }
      .header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        border-radius: 8px 8px 0 0;
        margin: -20px -20px 20px -20px;
      }
      .header h2 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
      }
      .field {
        margin-bottom: 18px;
        border-bottom: 1px solid #eee;
        padding-bottom: 15px;
      }
      .field:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .field-label {
        font-weight: 600;
        color: #667eea;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 5px;
      }
      .field-value {
        color: #333;
        font-size: 16px;
      }
      .message-section {
        background-color: #f5f5f5;
        padding: 15px;
        border-left: 4px solid #667eea;
        border-radius: 4px;
      }
      .footer {
        text-align: center;
        color: #999;
        font-size: 12px;
        margin-top: 20px;
      }
      .contact-info {
        background-color: #f0f4ff;
        padding: 15px;
        border-radius: 8px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>📧 New Contact Form Submission</h2>
      </div>
      
      <div class="content">
        <div class="field">
          <div class="field-label">Full Name</div>
          <div class="field-value">${escapeHtml(name)}</div>
        </div>

        <div class="field">
          <div class="field-label">Email Address</div>
          <div class="field-value">
            <a href="mailto:${escapeHtml(email)}" style="color: #667eea; text-decoration: none;">
              ${escapeHtml(email)}
            </a>
          </div>
        </div>

        <div class="field">
          <div class="field-label">Company Type</div>
          <div class="field-value">${escapeHtml(company)}</div>
        </div>

        <div class="field">
          <div class="field-label">Phone Number</div>
          <div class="field-value">
            ${escapeHtml(countryCode)} ${escapeHtml(phone)}
            <br>
            <span style="font-size: 12px; color: #999;">(WhatsApp/Telegram)</span>
          </div>
        </div>

        ${message ? `
        <div class="field">
          <div class="field-label">Message</div>
          <div class="message-section">
            ${escapeHtml(message).replace(/\n/g, '<br>')}
          </div>
        </div>
        ` : ''}

        <div class="contact-info">
          <strong>📱 Contact Information:</strong>
          <br>
          <strong>Email:</strong> ${escapeHtml(email)}
          <br>
          <strong>Phone:</strong> ${escapeHtml(countryCode)} ${escapeHtml(phone)}
        </div>
      </div>

      <div class="footer">
        <p>This inquiry was submitted from your Matchplug Agency website contact form.</p>
        <p>Submitted on: ${new Date().toLocaleString()}</p>
      </div>
    </div>
  </body>
</html>
    `

    // Send email to your business email
    const recipientEmail = process.env.CONTACT_EMAIL_TO || email

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Inquiry from ${name} - ${company}`,
      html: emailContent,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${countryCode} ${phone}
Message: ${message || 'No message provided'}
      `.trim(),
    })

    // Send confirmation email to user
    const confirmationEmail = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
      }
      .header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 30px;
        border-radius: 8px 8px 0 0;
        margin: -20px -20px 20px -20px;
        text-align: center;
      }
      .header h2 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        background: white;
        padding: 30px;
        border-radius: 8px;
        margin-bottom: 20px;
      }
      .content p {
        margin: 15px 0;
      }
      .footer {
        text-align: center;
        color: #999;
        font-size: 12px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>✅ Thank You!</h2>
      </div>
      
      <div class="content">
        <p>Hi ${escapeHtml(name)},</p>
        
        <p>We've received your inquiry and appreciate you reaching out to us. Your message has been successfully submitted and is now in our queue.</p>
        
        <p><strong>Here's what happens next:</strong></p>
        <ul>
          <li>Our team will review your inquiry within 24 hours</li>
          <li>We'll reach out to you at ${escapeHtml(email)} or ${escapeHtml(countryCode)} ${escapeHtml(phone)}</li>
          <li>We'll discuss your specific needs and schedule a strategy call</li>
        </ul>
        
        <p>If you have any immediate questions, feel free to reply to this email.</p>
        
        <p>Best regards,<br><strong>The Matchplug Agency Team</strong></p>
      </div>

      <div class="footer">
        <p>© ${new Date().getFullYear()} Matchplug Agency. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
    `

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'We Received Your Inquiry - Matchplug Agency',
      html: confirmationEmail,
      text: `
Thank you for reaching out! We've received your inquiry and will get back to you within 24 hours.
      `.trim(),
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

// Helper function to escape HTML
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
