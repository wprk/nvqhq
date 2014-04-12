Meteor.publish('allCourses', function() {
  return Courses.find({});
});

Meteor.publish('admCourses', function() {
  return admCourses.find({status: true});
});

Meteor.publish('lnrCourses', function() {
  return lnrCourses.find({status: true});
});

// Roles for accounts
Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
})