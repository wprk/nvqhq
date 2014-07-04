Meteor.methods({
  sendVerificationEmail: function (emailAddress) {
    Accounts.sendVerificationEmail(Meteor.userId(), emailAddress);
  }
});