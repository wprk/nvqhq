var addUserService;

Template.lnrProfile.events({
  "click .addService": function(e) {
    var service;
    e.preventDefault();
    service = $(event.target).data("service");
    return addUserService(service);
  }
});

addUserService = function(service) {
  if (service === "email") {

  } else {
    switch (service) {
      case "facebook":
        return Facebook.requestCredential({
          requestPermissions: ["email", "user_friends", "manage_notifications"]
        }, function(token) {
          return Meteor.call("userAddOauthCredentials", token, Meteor.userId(), service, function(err, resp) {
            if (err != null) {
              return Meteor.userError.throwError(err.reason);
            }
          });
        });
      case "google":
        return Google.requestCredential({
          requestPermissions: ["email", "https://www.googleapis.com/auth/calendar"],
          requestOfflineToken: true
        }, function(token) {
          return Meteor.call("userAddOauthCredentials", token, Meteor.userId(), service, function(err, resp) {
            if (err != null) {
              return Meteor.userError.throwError(err.reason);
            }
          });
        });
    }
  }
};