Meteor.publish('allCourses', function() {
  return Courses.find({});
});

Meteor.publish('admCourses', function() {
  return Courses.find({status: true});
});

Meteor.publish('lnrCourses', function() {
  return Courses.find({status: true});
});

// Roles for accounts
Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
})