Template.accountLoggedOut.events({
  "click #loginWithFacebook": function (event, form) {
    Meteor.loginWithFacebook();
  }
});

Template.accountLoggedOut.events({
  "click #loginWithTwitter": function (event, form) {
    Meteor.loginWithTwitter();
  }
});

Template.accountLoggedOut.events({
  "click #loginWithGoogle": function (event, form) {
    Meteor.loginWithGoogle();
  }
});

Template.accountLoggedOut.events({
  "click #login": function (event, form) {
    alert('coming soon');
    //Meteor.login();
  }
});
