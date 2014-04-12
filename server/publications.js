Meteor.publish('courses', function() {
  return Courses.find({status: true});
});

// Roles for accounts
Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
})