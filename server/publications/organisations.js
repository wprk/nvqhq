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
    console.log(organisationData);
    console.log(Meteor.Organisations);
    Organisations.insert(organisationData, function(error) {
      console.log(error);
      // if (!error) {
      //   return "Organisation Added";
      // } else {
      //   return "Organisation Creation Failed";
      //   Meteor.Error(500, 'An unknown error occured. The organisation was not created.');
      // }
    });
  }
});