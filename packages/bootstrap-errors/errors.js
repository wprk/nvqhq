Errors = {
  // Local (client-only) collection
  collection: new Meteor.Collection(null),

  throw: function(type, message) {
    Errors.collection.insert({
      type: type,
      message: message,
      seen: false
    })
  },
  clearSeen: function() {
    Errors.collection.remove({seen: true});
  }
};