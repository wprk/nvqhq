Accounts.validateNewUser(function (user) {
  if ('password' in user.services)
    return true;
  // @todo: Alter bootstrap errors so they can be shown on the front end
  console.log("Please register before attempting a third party login.");
  throw new Meteor.Error(403, "Please register before attempting a third party login.");
});

Accounts.onCreateUser(function(options, user) {
  var email, oldUser, service; 

  if (user.profile == null) {
    user.profile = {};
    if (options.profile != null) {
      user.profile.name = options.profile.name;
      user.profile.organisation = options.profile.organisation;
    }
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
          user.profile.organisation = Organisations.find({}, {'fields': {'_id':1}}).fetch()[0];
        }
      }
    }
  }
  return user;
});

// When new user added set roles
// Meteor.users.find().observe({
//   added: function(user) {
//     Roles.addUsersToRoles(user._id, ['admin'], user.profile.organisation._id);
//   }
// });
