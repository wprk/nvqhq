Courses = new Meteor.Collection('courses');
UserCourses = new Meteor.Collection('userCourses');
OrganisationCourses = new Meteor.Collection('organisationCourses');

if (Meteor.isClient) {
  UI.registerHelper('userCourses', function() {
    return UserCourses.find();
  });
  UI.registerHelper('organisationCourses', function() {
      return OrganisationCourses.find();
  });
  UI.registerHelper('courseData', function() {
  	var courseContent = this;
	  var course = Courses.findOne({'_id': courseContent.course_id});
    return _.extend(courseContent, _.omit(course, '_id'));
  });
}
