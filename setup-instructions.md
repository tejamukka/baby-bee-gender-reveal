# 🚀 Quick Setup Instructions

## 📊 RSVP Data Viewing

### Current Setup (Local Storage)
- **Open `demo.html`** to see all RSVP responses
- Shows aggregated counts and individual responses
- Data is stored in browser's local storage

### For Real RSVP Collection
Use `index-with-formspree.html` instead of `index.html`

## 🌐 Free Hosting - Choose One:

### Option 1: GitHub Pages (Recommended)
```bash
# 1. Create GitHub account
# 2. Create new repository named "baby-bee-gender-reveal"
# 3. Run these commands:

git remote add origin https://github.com/YOUR_USERNAME/baby-bee-gender-reveal.git
git branch -M main
git push -u origin main

# 4. Go to repository Settings > Pages
# 5. Source: "Deploy from a branch" > "main" > "Save"
# 6. Your site: https://YOUR_USERNAME.github.io/baby-bee-gender-reveal
```

### Option 2: Netlify (Easiest)
1. Go to **netlify.com**
2. **Drag & drop** your folder
3. **Get instant live URL**

### Option 3: Vercel
1. Go to **vercel.com**
2. **Import from GitHub**
3. **Auto-deploy**

## 📧 Real RSVP Collection Setup

### Using Formspree (Free - 50 submissions/month)
1. **Sign up** at formspree.io
2. **Create new form**
3. **Copy your form ID** (looks like: `abc123def`)
4. **Replace `YOUR_FORM_ID`** in `index-with-formspree.html`
5. **Use `index-with-formspree.html`** as your main file

### Using Google Forms
1. **Create Google Form** for RSVPs
2. **Get embed code**
3. **Replace RSVP section** in HTML

## 🎯 Recommended Next Steps

1. **Choose hosting** (GitHub Pages recommended)
2. **Set up Formspree** for real RSVPs
3. **Customize content** (names, dates, registry links)
4. **Test on mobile**
5. **Share with guests!**

## 📱 Files Overview

- `index.html` - Main website (local storage RSVPs)
- `index-with-formspree.html` - Main website (real RSVP collection)
- `demo.html` - View RSVP data
- `styles.css` - Styling
- `script.js` - Local storage functionality
- `script-formspree.js` - Formspree functionality

## 🔧 Customization Checklist

- [ ] Update names (Teja & Suppu)
- [ ] Update date and time
- [ ] Update location/address
- [ ] Update contact information
- [ ] Add real registry links
- [ ] Set up Formspree (if using real RSVPs)
- [ ] Test on mobile devices
- [ ] Deploy to hosting service

---

**Need help?** I can guide you through any of these steps! 🐝✨
