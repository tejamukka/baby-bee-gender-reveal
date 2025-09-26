# 📊 Google Sheets Integration for Real-time Shared Counts

## Overview
This setup allows all users to see the same RSVP counts in real-time, with all data stored in a Google Sheet.

## Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new sheet named "Baby Bee RSVPs"
3. Add headers in row 1: `Name`, `Email`, `Guests`, `Attending`, `Message`, `Timestamp`

## Step 2: Set up Google Apps Script
1. In your Google Sheet, go to `Extensions > Apps Script`
2. Replace the default code with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add new row
  sheet.appendRow([
    data.name,
    data.email,
    data.guests,
    data.attending,
    data.message || '',
    new Date()
  ]);
  
  // Return current counts
  const rows = sheet.getDataRange().getValues();
  const attending = rows.filter(row => row[3] === 'yes').length;
  const notAttending = rows.filter(row => row[3] === 'no').length;
  const totalGuests = rows.slice(1).reduce((sum, row) => sum + parseInt(row[2] || 0), 0);
  
  return ContentService
    .createTextOutput(JSON.stringify({
      attending,
      notAttending,
      totalGuests,
      totalRSVPs: rows.length - 1
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const rows = sheet.getDataRange().getValues();
  
  const attending = rows.filter(row => row[3] === 'yes').length;
  const notAttending = rows.filter(row => row[3] === 'no').length;
  const totalGuests = rows.slice(1).reduce((sum, row) => sum + parseInt(row[2] || 0), 0);
  
  return ContentService
    .createTextOutput(JSON.stringify({
      attending,
      notAttending,
      totalGuests,
      totalRSVPs: rows.length - 1,
      rsvps: rows.slice(1).map(row => ({
        name: row[0],
        email: row[1],
        guests: row[2],
        attending: row[3],
        message: row[4],
        timestamp: row[5]
      }))
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy as Web App
1. Click `Deploy > New Deployment`
2. Choose `Web app` as type
3. Set access to `Anyone`
4. Click `Deploy`
5. Copy the web app URL

## Step 4: Update Website Code
Replace the current RSVP handling with:

```javascript
const GOOGLE_SHEETS_URL = 'YOUR_WEB_APP_URL_HERE';

// Submit RSVP
function submitRSVP(formData) {
  return fetch(GOOGLE_SHEETS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
}

// Load RSVP data
function loadRSVPData() {
  return fetch(GOOGLE_SHEETS_URL)
    .then(response => response.json())
    .then(data => {
      // Update counts
      document.getElementById('attendingCount').textContent = data.attending;
      document.getElementById('notAttendingCount').textContent = data.notAttending;
      document.getElementById('totalGuestsCount').textContent = data.totalGuests;
      
      // Display RSVPs
      displayRSVPs(data.rsvps);
    });
}
```

## Benefits:
✅ **Real-time shared counts**: All users see the same numbers
✅ **Central data storage**: All RSVPs in one Google Sheet
✅ **Easy management**: View/edit data in Google Sheets
✅ **Export capability**: Download as Excel/CSV
✅ **Free**: No cost for Google Sheets
✅ **Reliable**: Google's infrastructure

## Limitations:
❌ **Setup complexity**: Requires Google Apps Script knowledge
❌ **Rate limits**: Google has API rate limits
❌ **CORS issues**: May need additional configuration

## Recommendation:
For most users, **Formspree** is the easier solution. Google Sheets integration is better if you need real-time shared counts visible to all users.
