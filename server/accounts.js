Accounts.onCreateUser(function(options, user) {
  var email, oldUser, service;
  user.organisationId = null;
  user.type = 'admin';
  user.networks = [];
  user.attending = [];
  if (user.profile == null) {
    user.profile = {};
  }
  if (user.services != null) {
    service = _.keys(user.services)[0];
    email = user.services[service].email;
    if (email != null) {
      oldUser = Meteor.users.findOne({
        "emails.address": email
      });
      if (oldUser != null) {
        if (oldUser.services == null) {
          oldUser.services = {};
        }
        if (service === "google" || service === "facebook") {
          oldUser.services[service] = user.services[service];
          Meteor.users.remove(oldUser._id);
          user = oldUser;
        }
      } else {
        if (service === "google" || service === "facebook") {
          if (user.services[service].email != null) {
            user.emails = [
              {
                address: user.services[service].email,
                verified: true
              }
            ];
          } else {
            throw new Meteor.Error(500, "" + service + " account has no email attached");
          }
          user.profile.name = user.services[service].name;
        }
      }
    }
  }
  return user;
});