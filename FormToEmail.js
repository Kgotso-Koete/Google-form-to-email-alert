/*
A programme to send email alerts to creators of Google forms when conditions in survey response are met
*/

function myFunction(e){

    // collect user data
    var userEmail = e.values[1];
    var userName = e.values[2];
    var userBusiness = e.values[3];
    var userRating = e.values[4];
    var userCallDay = e.values[6];

    // get URL of the form
    var s = SpreadsheetApp.getActiveSheet();
    var formResponsesURL = s.getParent().getUrl(); // the spreadsheet with the form responses

    // data to be used in the email
    var myEmail = "[my email to be inserted]"
    var subject = "URGENT INPUT REQUIRED: " + userName + " submitted a survey response that requires your attention";
    var message = "Please see customer response by clicking on the link below: " + "\n\n" + formResponsesURL;

    // only send the email if the user gave a bad rating or expects a call tomorrow
    if(userRating == "1 - Did not meet my expectation" || userCallDay == "Tomorrow"){
    MailApp.sendEmail (myEmail, subject, message);
    }

  // Code adopted from the following Make Tech Easier blog: https://www.maketecheasier.com/send-email-notifications-google-forms/
  // Originally developed by Jeff Everhart
  // Altered by Kgotso Koete
}
