function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(), // Timestamp
    data.name,
    data.email,
    data.description
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'success',
    'message': 'Data added successfully'
  })).setMimeType(ContentService.MimeType.JSON);
} 