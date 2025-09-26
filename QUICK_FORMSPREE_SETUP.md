# 🚀 Quick Formspree Setup (5 minutes)

## ⚠️ **Current Status:**
Your form is now working in **demo mode** - it stores RSVPs locally and shows success messages. To get real email notifications, follow these steps:

## 📧 **Step 1: Create Formspree Account**

1. **Go to [formspree.io](https://formspree.io)**
2. **Click "Get Started"** or "Sign Up"
3. **Create account** with your email
4. **Verify your email** (check inbox)

## 📝 **Step 2: Create New Form**

1. **Click "New Form"** in your dashboard
2. **Form Name**: "Baby Bee Gender Reveal RSVP"
3. **Click "Create Form"**
4. **Copy your form endpoint** (looks like: `https://formspree.io/f/abc123def`)

## 🔧 **Step 3: Update Your Website**

1. **Open `index.html`** in your project
2. **Find line 229**: 
   ```html
   <form class="rsvp-form" id="rsvpForm" action="#" method="POST">
   ```
3. **Replace `action="#"`** with your Formspree endpoint:
   ```html
   <form class="rsvp-form" id="rsvpForm" action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST">
   ```
4. **Save the file**

## ⚙️ **Step 4: Configure Formspree Settings**

1. **In Formspree dashboard**:
   - **Email notifications**: ✅ Enabled
   - **Auto-reply**: ✅ Enabled  
   - **Spam protection**: ✅ Enabled
2. **Customize auto-reply message**:
   ```
   Thank you for your RSVP to our Baby Bee Gender Reveal! 🐝
   
   We're so excited to celebrate with you on October 25th!
   
   Love,
   Teja & Supraja
   ```

## 🧪 **Step 5: Test Your Form**

1. **Submit a test RSVP** on your website
2. **Check your email** for the notification
3. **Check the test email** for the auto-reply

## 🎯 **What You'll Get:**

✅ **Email notifications** for each RSVP  
✅ **Auto-reply emails** to guests  
✅ **Spam protection**  
✅ **Form data** in Formspree dashboard  
✅ **Export to CSV** if needed  

## 🔄 **To Switch from Demo to Real:**

Once you have your Formspree form ID, update the JavaScript:

1. **Open `script.js`**
2. **Find line 505**: `e.preventDefault(); // Prevent default submission for now`
3. **Remove the `e.preventDefault();`** line
4. **Save and test**

## 🆘 **Need Help?**

- **Formspree Documentation**: [help.formspree.io](https://help.formspree.io)
- **Free Plan**: 50 submissions/month
- **Paid Plans**: Available if you need more submissions

---

**Your form is ready to go live!** 🐝✨
