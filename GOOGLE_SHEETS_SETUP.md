# Google Sheets Integration Setup Guide

## 🎯 Overview
This guide will help you set up Google Sheets as a database for your guest messages, allowing real-time display of user submissions in the carousel.

## 📋 Step 1: Create Google Sheet

1. **Go to Google Sheets**: https://sheets.google.com
2. **Create a new sheet** with these columns:
   - **A1**: Name
   - **B1**: Message  
   - **C1**: Prediction
   - **D1**: Timestamp

3. **Make it publicly readable**:
   - Click "Share" button
   - Set to "Anyone with the link can view"
   - Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)

## 🔧 Step 2: Create Google Apps Script

1. **Go to Google Apps Script**: https://script.google.com
2. **Create a new project**
3. **Replace the default code** with this:

```javascript
// Google Apps Script for Baby Bee Gender Reveal Messages
const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Replace with your actual Sheet ID
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name

function doGet(e) {
  const action = e.parameter.action;
  
  if (action === 'getMessages') {
    return getMessages();
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    success: false,
    error: 'Invalid action'
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const action = data.action;
  
  if (action === 'addMessage') {
    return addMessage(data);
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    success: false,
    error: 'Invalid action'
  })).setMimeType(ContentService.MimeType.JSON);
}

function getMessages() {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    
    // Skip header row
    const messages = data.slice(1).map(row => ({
      name: row[0] || 'Anonymous',
      email: row[1] || '',
      guests: row[2] || '',
      message: row[3] || '',
      prediction: row[4] || 'Sweet Surprise 🍯',
      timestamp: row[5] || new Date().toISOString()
    })).filter(msg => msg.message.trim() !== ''); // Only return messages with content
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      messages: messages
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function addMessage(data) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Add new row
    sheet.appendRow([
      data.name || 'Anonymous',
      data.email || '',
      data.guests || '',
      data.message || '',
      data.prediction || 'Sweet Surprise 🍯',
      data.timestamp || new Date().toISOString()
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Message added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 🚀 Step 3: Deploy the Apps Script

1. **Save the project** (Ctrl+S)
2. **Click "Deploy"** → "New deployment"
3. **Choose type**: "Web app"
4. **Execute as**: "Me"
5. **Who has access**: "Anyone"
6. **Click "Deploy"**
7. **Copy the Web App URL** (you'll need this for the website)

## 🔗 Step 4: Update Your Website

1. **Open `script.js`**
2. **Replace these lines**:
   ```javascript
   const GOOGLE_SHEET_ID = 'YOUR_SHEET_ID_HERE';
   const GOOGLE_APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
   ```
   
3. **With your actual values**:
   ```javascript
   const GOOGLE_SHEET_ID = '1ABC123def456GHI789jkl'; // Your actual Sheet ID
   const GOOGLE_APPS_SCRIPT_URL = 'AKfycbx...'; // Your actual Apps Script URL
   ```

## ✅ Step 5: Test the Integration

1. **Open your website**
2. **Go to the Messages section**
3. **Submit a test message**
4. **Check your Google Sheet** - the message should appear
5. **Check the carousel** - it should show the new message

## 🎯 How It Works

- **Form Submission**: When someone submits a message, it goes to Google Sheets
- **Real-time Display**: The carousel fetches messages from Google Sheets
- **Email Backup**: You still get email notifications via Formspree
- **Moderation**: You can edit/delete messages directly in the Google Sheet

## 🔧 Troubleshooting

**Messages not appearing?**
- Check that the Sheet ID and Apps Script URL are correct
- Make sure the Google Sheet is publicly readable
- Check the browser console for error messages

**Apps Script not working?**
- Make sure you deployed it as a web app with "Anyone" access
- Check that the sheet name matches (default is "Sheet1")

**Need help?**
- Check the Google Apps Script logs in the Apps Script editor
- Test the Apps Script URL directly in your browser

## 🎉 Benefits

✅ **Real-time updates** - Messages appear immediately  
✅ **Easy moderation** - Edit messages in the spreadsheet  
✅ **No API limits** - Google Sheets is free and reliable  
✅ **Backup system** - Email notifications still work  
✅ **Mobile friendly** - Works on all devices  

Your guest messages will now be stored in Google Sheets and displayed in real-time in the carousel! 🍯🐝