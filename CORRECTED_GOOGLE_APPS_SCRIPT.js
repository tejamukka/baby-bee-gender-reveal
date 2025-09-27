// CORRECTED Google Apps Script for Baby Bee Gender Reveal Messages
// Replace the content of your Code.gs file with this code

const SHEET_ID = '1Go42OxeU6Tge4ZgRQwMjdzdd_jWIVa5bgqZAYgNz6p0'; // Your actual Sheet ID
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
    
    // Skip header row and map to correct columns
    const messages = data.slice(1).map(row => ({
      name: row[0] || 'Anonymous',        // Column A
      email: row[1] || '',                // Column B  
      guests: row[2] || '',               // Column C
      message: row[3] || '',              // Column D
      prediction: row[4] || 'Sweet Surprise 🍯', // Column E
      timestamp: row[5] || new Date().toISOString() // Column F
    })).filter(msg => msg.message.trim() !== '');
    
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
    
    // Add new row with correct column mapping
    sheet.appendRow([
      data.name || 'Anonymous',           // Column A
      data.email || '',                   // Column B
      data.guests || '',                  // Column C  
      data.message || '',                 // Column D
      data.prediction || 'Sweet Surprise 🍯', // Column E
      data.timestamp || new Date().toISOString() // Column F
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

// IMPORTANT: For CORS to work, you need to deploy this as a Web App with these settings:
// 1. Go to Deploy → New deployment
// 2. Type: Web app
// 3. Execute as: Me
// 4. Who has access: Anyone
// 5. Click Deploy
// 6. Copy the Web app URL and use it in your website
