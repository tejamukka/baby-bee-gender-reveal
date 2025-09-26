# 🚀 Formspree + AddEvent Setup Instructions

## 📧 **Step 1: Formspree Setup (Email Notifications)**

### **Create Formspree Account:**
1. **Go to [formspree.io](https://formspree.io)**
2. **Sign up for free account** (50 submissions/month)
3. **Create new form**:
   - Name: "Baby Bee Gender Reveal RSVP"
   - Get your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

### **Update Your Website:**
1. **Open `index.html`**
2. **Find line 225**: `<form class="rsvp-form" id="rsvpForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
3. **Replace `YOUR_FORM_ID`** with your actual Formspree form ID
4. **Save the file**

### **Configure Formspree Settings:**
1. **In Formspree dashboard**:
   - **Email notifications**: ✅ Enabled (you'll get emails for each RSVP)
   - **Auto-reply**: ✅ Enabled (guests get confirmation email)
   - **Spam protection**: ✅ Enabled
   - **Customize auto-reply message** with your bee theme!

### **Test the Setup:**
1. **Submit a test RSVP** on your website
2. **Check your email** for the notification
3. **Check the guest's email** for the auto-reply

---

## 📅 **Step 2: AddEvent Calendar Widget (Already Added!)**

### **What's Already Set Up:**
✅ **Calendar widget** added to event details section
✅ **Event details** configured:
- **Date**: October 25th, 2024
- **Time**: 11:00 AM - 2:00 PM (Pacific Time)
- **Location**: 6565 Scenery Ct, San Jose, CA 95120
- **Title**: "Baby Bee Gender Reveal Party"
- **Description**: Bee-themed description included

### **How It Works:**
- **Guests click "Add to Calendar"**
- **Dropdown appears** with calendar options:
  - Google Calendar
  - Outlook
  - Apple Calendar
  - Yahoo Calendar
  - iCal download
- **One-click adds** to their preferred calendar
- **Automatic reminders** based on their calendar settings

---

## 🎯 **Complete RSVP Flow:**

### **For Guests:**
1. **Visit your website**
2. **Fill out RSVP form**
3. **Get confirmation email** (Formspree auto-reply)
4. **Add event to calendar** (AddEvent widget)
5. **Get calendar reminders** automatically

### **For You (Host):**
1. **Get email notification** for each RSVP
2. **View all RSVPs** in Formspree dashboard
3. **Export data** to spreadsheet if needed
4. **Track attendance** in real-time

---

## 🔧 **Next Steps:**

1. **Set up Formspree account** (5 minutes)
2. **Update form action URL** in index.html
3. **Test the complete flow**
4. **Deploy to GitHub Pages**
5. **Share with guests!**

---

## 💡 **Pro Tips:**

- **Customize auto-reply email** with your bee theme
- **Set up email filters** to organize RSVP notifications
- **Test on mobile** to ensure calendar widget works
- **Monitor Formspree dashboard** for spam submissions
- **Backup RSVP data** regularly

---

**Need help with any step?** I can guide you through the entire process! 🐝✨
