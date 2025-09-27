# EmailJS Setup Guide for Baby Bee Website

## 🎯 Overview
This guide will help you set up EmailJS to send automated emails to your guests for free (200 emails/month).

## 📧 What Emails Will Be Sent
1. **Welcome Email** - When someone first visits your website
2. **RSVP Confirmation** - When someone submits their RSVP
3. **Gender Reveal** - When you're ready to announce the baby's gender
4. **Thank You** - After the event

## 🚀 Step-by-Step Setup

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook** 
   - **Yahoo**
   - Or any other provider
4. Follow the setup instructions for your chosen provider
5. **Copy your Service ID** (you'll need this later)

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Template ID:** `baby_bee_template`

**Subject:** `{{subject}}`

**Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Baby Bee Celebration</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #FFD700, #FFA500); padding: 20px; text-align: center; border-radius: 10px; }
        .content { padding: 20px; background: #fff; border-radius: 10px; margin-top: 20px; }
        .footer { text-align: center; margin-top: 20px; color: #666; }
        h1, h2 { color: #8B4513; }
        ul { padding-left: 20px; }
        li { margin-bottom: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🐝 Baby Bee Celebration 🍯</h1>
        </div>
        <div class="content">
            {{message}}
        </div>
        <div class="footer">
            <p>With love,<br>Teja & Supraja 🍯</p>
        </div>
    </div>
</body>
</html>
```

4. **Copy your Template ID** (you'll need this later)

### Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your "Public Key" 
3. **Copy your Public Key** (you'll need this later)

### Step 5: Update Your Website
1. Open `script.js` in your website
2. Find this section around line 2678:
```javascript
const EMAILJS_CONFIG = {
    serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
    templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
    publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
};
```

3. Replace the placeholder values:
   - `YOUR_SERVICE_ID` → Your Service ID from Step 2
   - `YOUR_TEMPLATE_ID` → Your Template ID from Step 3
   - `YOUR_PUBLIC_KEY` → Your Public Key from Step 4

### Step 6: Test Your Setup
1. Save your changes and upload to GitHub Pages
2. Visit your website and submit an RSVP
3. Check if you receive the confirmation email
4. Check the browser console for any error messages

## 🎉 You're All Set!

### Available Email Functions
Your website now has these email functions:

```javascript
// Send welcome email
sendWelcomeEmail('user@example.com', 'John Doe');

// Send RSVP confirmation (automatically called after RSVP submission)
sendRSVPConfirmationEmail({
    name: 'John Doe',
    email: 'user@example.com',
    guests: '2',
    prediction: 'Buzzing Boy'
});

// Send gender reveal announcement
sendGenderRevealEmail('user@example.com', 'John Doe', 'boy'); // or 'girl'

// Send thank you email
sendThankYouEmail('user@example.com', 'John Doe');
```

## 🔧 Troubleshooting

### Common Issues:
1. **"EmailJS not loaded"** - Check your internet connection
2. **"Email sending failed"** - Verify your Service ID, Template ID, and Public Key
3. **Emails not received** - Check spam folder, verify email service setup

### Testing:
- Use the browser console to test email functions
- Check EmailJS dashboard for delivery status
- Verify your email service is properly connected

## 📊 Free Tier Limits
- **200 emails per month** (free tier)
- **Unlimited templates**
- **All features included**

## 💡 Pro Tips
1. **Test with your own email first**
2. **Keep your credentials secure** (don't share your Public Key publicly)
3. **Monitor your usage** in the EmailJS dashboard
4. **Use different templates** for different types of emails

## 🆘 Need Help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Happy emailing! 🐝📧✨**
