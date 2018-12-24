  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBH4lFHvGxD6Ad9s-02jhmaLQQcPj3efDc",
    authDomain: "reesethebarber-8feaa.firebaseapp.com",
    databaseURL: "https://reesethebarber-8feaa.firebaseio.com",
    projectId: "reesethebarber-8feaa",
    storageBucket: "reesethebarber-8feaa.appspot.com",
    messagingSenderId: "439332511051"
  };
  firebase.initializeApp(config);


  var db = firebase.database();
//Construct Loyalty Member function:
  var Members = function (emailAdd){
      this.emailAdd = emailAdd;
  };
// LOYALTY PROGRAM: Upon clicking the 'join' button db will be updated with the new user sign up email address
  $('#joinBtn').on('click', function(e){
      e.preventDefault();
      var getEmailAdd = $('#loyalEmail').val().trim(' ');

          // if successfull display the user email has been add to our loyalty program.
          if (getEmailAdd == "" || getEmailAdd == undefined || getEmailAdd == " ") {
              $('#successMsg').text('Please enter a valid email address!');
          } else {
              var newSignUp = new Members (getEmailAdd);
              //Update DB with new member email address
              db.ref('/users/').push(newSignUp);
              //Display success message
              $('#successMsg').text(`Thank You! Your email address: ${getEmailAdd} has been added to our loyalty program`)
          }
      //empty the input
      $('#loyalEmail').val('');
  });