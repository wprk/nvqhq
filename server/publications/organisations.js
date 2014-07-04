Meteor.publish("organisations", function () {
  return Organisations.find();
});

Meteor.publish("organisation", function () {
  if (this.userId) {
    user = Meteor.users.findOne({_id: this.userId});
    organisation = Organisations.find({
      _id: user.profile.organisation._id
    });
    return organisation;
  } else {
    this.stop();
  }
});

Meteor.methods({
  addOrganisation: function (organisationData) {
    var user = Meteor.user();
    if (user && (user.profile.organisation._id === "NOT_YET_SET")) {
      new_organisation_id = Organisations.insert(organisationData, function(error) {
        if (!error) {
          Meteor.users.update({_id: user._id}, 
            {"$set" :
              {"profile.organisation":
                {
                  _id: new_organisation_id,
                  verified: true,
                  verified_by: "system"
                }
              }
            }
          );
          Roles.setUserRoles(user._id, [], Roles.GLOBAL_GROUP);
          Roles.setUserRoles(user._id, ['superadmin', 'admin'], new_organisation_id);
          return true;
        } else {
          Meteor.Error(500, 'An error occured. The organisation was not created.');
        }
      });
    } else {
      Meteor.Error(403, 'You do not have the correct permissions to perform this action.');
    }
  }
});