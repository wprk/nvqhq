Meteor.publish('courses', function() {
  return Courses.find({status: true});
});