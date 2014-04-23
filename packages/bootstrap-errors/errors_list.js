Template.bootstrapErrors.helpers({
  errors: function() {
    return Errors.collection.find();
  }
});

Template.bootstrapError.rendered = function() {
  var error = this.data;
  Meteor.defer(function() {
    Errors.collection.update(error._id, {$set: {seen: true}});
  });
};