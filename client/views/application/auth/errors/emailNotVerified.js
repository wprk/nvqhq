Template.emailNotVerified.helpers({
  'emailList': function() {
    emails = Meteor.user().emails,
    emailList = [];
    for (var i = 0; i < emails.length; i++) {
      if (emails[i].verified == false) {
        emailList.push({email: emails[i].address});
      }
    }
    return emailList;
  }
});

Template.emailNotVerified.events({
  "click #sendVerificationEmail": function (event) {
    event.preventDefault();
    
    var userId = Meteor.userId(),
    email = $('input#verificationEmail').val();
    
    console.log(userId);

    Meteor.call('sendVerificationEmail', email);
  }
});