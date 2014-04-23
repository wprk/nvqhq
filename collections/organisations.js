Organisations = new Meteor.Collection('organisations');

if (Meteor.isClient) {
  UI.registerHelper('organisation', function() {
    // user = Meteor.users.findOne({_id: Meteor.userId()});
    organisation = Organisations.find().fetch()[0];
    return organisation;
  });
}
