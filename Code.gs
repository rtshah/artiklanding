function doPost(e) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Handle preflight OPTIONS request
  if (e.postData.type === "application/x-www-form-urlencoded") {
    return ContentService.createTextOutput(JSON.stringify({'status': 'ok'}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }

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
  }))
  .setMimeType(ContentService.MimeType.JSON)
  .setHeaders(headers);
}

// Add this new function to handle OPTIONS requests
function doOptions(e) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
} 