Meteor.methods({
  userAddOauthCredentials: function(token, userId, service) {
    var data, oldUser, selector, updateSelector;
    switch (service) {
      case "facebook":
        data = Facebook.retrieveCredential(token).serviceData;
        break;
      case "google":
        data = Google.retrieveCredential(token).serviceData;
    }
    selector = "services." + service + ".id";
    oldUser = Meteor.users.findOne({
      selector: data.id
    });
    if (oldUser != null) {
      throw new Meteor.Error(500, ("This " + service + " account has already") + "been assigned to another user.");
    }
    updateSelector = "services." + service;
    Meteor.users.update(userId, {
      $set: {
        updateSelector: data
      }
    });
    if (!_.contains(Meteor.user().emails, data.email)) {
      return Meteor.users.update(userId, {
        $push: {
          "emails": {
            address: data.email,
            verified: true
          }
        }
      });
    }
  }
});
