function doPost(e) {
    var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.name]); // Add data to the spreadsheet
    return ContentService.createTextOutput(JSON.stringify({ message: "Data added successfully!" }))
        .setMimeType(ContentService.MimeType.JSON);
}
