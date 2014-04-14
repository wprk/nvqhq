Organisations = new Meteor.Collection('organisations');

if (Meteor.isClient) {
  UI.registerHelper('organisation', function() {
    // user = Meteor.users.find({_id: Meteor.userId()});
    organisation = Organisations.find();
    return organisation.fetch()[0];
  });
}