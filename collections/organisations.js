Organisations = new Meteor.Collection('organisations');

if (Meteor.isClient) {
  UI.registerHelper('organisations', function() {
    organisations = Organisations.find();
    return organisations;
  });
  UI.registerHelper('organisation', function() {
    // user = Meteor.users.findOne({_id: Meteor.userId()});
    organisation = Organisations.find().fetch()[0];
    return organisation;
  });
  UI.registerHelper('isOrganisationConfigured', function(organisation) {
    if(organisation) {
      if (organisation._id == "NOT_YET_SET") {
        return false;
      }  else {
        return true;
      }
    } else {
      return false
    }
  });
}
