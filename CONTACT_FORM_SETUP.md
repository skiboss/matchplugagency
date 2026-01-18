# Contact Form & Email Setup Guide

## Overview

The contact form has been fully implemented with email sending functionality. When users submit the form, they receive a confirmation email and you receive a detailed inquiry email with all their information.

## Installation

### 1. Install Required Package

```bash
npm install nodemailer
```

Also install the types:

```bash
npm install -D @types/nodemailer
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root of your project (or update it if it exists):

```env
# SMTP Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_password
SMTP_FROM=noreply@matchplugagency.com

# Where to send contact form inquiries
CONTACT_EMAIL_TO=your_email@matchplugagency.com
```

## Email Provider Options

### Option 1: Gmail SMTP (Easiest for Testing)

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Generate an App Password for "Mail"
3. Use in `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=your_email@gmail.com
CONTACT_EMAIL_TO=your_email@gmail.com
```

### Option 2: SendGrid

1. Create a SendGrid account at [sendgrid.com](https://sendgrid.com)
2. Generate an API key
3. Create `.env.local`:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
SMTP_FROM=noreply@matchplugagency.com
CONTACT_EMAIL_TO=admin@matchplugagency.com
```

### Option 3: Resend (Modern Alternative)

Consider using [Resend](https://resend.com) - a modern email service optimized for Next.js. It's simpler to set up than SMTP.

For Resend integration, you would modify `/app/api/contact/route.ts` to use their SDK instead of nodemailer.

### Option 4: Your Own Email Server

If you have your own mail server:

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=noreply@yourdomain.com
SMTP_PASSWORD=your_password
SMTP_FROM=noreply@yourdomain.com
CONTACT_EMAIL_TO=admin@yourdomain.com
```

## What Happens When User Submits Form

1. **Form Validation**: All required fields are validated on the client
2. **API Call**: Form data sent to `/api/contact` endpoint
3. **Email Sent to You**: A beautifully formatted email with all inquiry details
4. **Confirmation Email**: User receives a thank-you email confirming receipt
5. **Success Message**: User sees a success message in the UI

## Email Details

### Inquiry Email (To You)

Contains:

- User's name
- Email address (with reply-to header)
- Company type
- Phone number and country code
- Message (if provided)
- Submission timestamp

### Confirmation Email (To User)

Contains:

- Thank you message
- What happens next
- Your contact information reference
- Professional branding

## Testing the Form

1. Install dependencies:

```bash
npm install nodemailer @types/nodemailer
```

2. Set up `.env.local` with your email credentials

3. Start dev server:

```bash
npm run dev
```

4. Visit the contact form (on `/contact` page or embedded on other pages)

5. Fill in the form and submit

6. Check both your email and the user's email to confirm

## Troubleshooting

### "Failed to send email"

1. **Check environment variables** - Make sure `.env.local` is in the root directory
2. **Verify SMTP credentials** - Test with Gmail first (easiest to set up)
3. **Check port** - Port 587 is standard, some providers use 465
4. **SMTP_SECURE** - Should be `true` for port 465, `false` for port 587
5. **Review logs** - Check browser console and server logs for error messages

### Gmail SMTP not working

- Enable [Less secure app access](https://myaccount.google.com/lesssecureapps) OR
- Use [App Passwords](https://myaccount.google.com/apppasswords) (recommended)

### Rate limiting issues

- Most providers have rate limits (e.g., Gmail: 100 emails/hour)
- Consider implementing a queue system for high-volume submissions

## Button Text

The form button has been changed from "Book Strategy Call" to "**Send Inquiry**" to better reflect the form's purpose.

The separate "Book Strategy Call" buttons on other pages still link to the Calendly booking link.

## Form Fields

The contact form collects:

- **Name** (required)
- **Email** (required)
- **Company Type** (required) - dropdown with options:
  - iGaming Operator
  - Crypto Exchange
  - Sportsbook
  - Online Casino
  - Web3 Platform
  - B2B Provider
  - Other
- **Phone Number** (required) - with country code selector
- **Message** (optional)

## Next Steps

1. Install nodemailer: `npm install nodemailer @types/nodemailer`
2. Create `.env.local` with email credentials
3. Test the form on your local dev server
4. Deploy and test on production

## Support

If you encounter issues:

1. Check that all required env variables are set
2. Verify email credentials are correct
3. Check the API endpoint at `/api/contact` is accessible
4. Review browser console and Next.js server logs for errors

---

**Last Updated**: January 15, 2026
