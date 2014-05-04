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
  UI.registerHelper('userCoursesData', function() {
  	var courseContent = this;
	var courses = Courses.find({'_id': courseContent.course_id});
    return _.extend(courseContent, _.omit(courses, '_id'));
  });
  UI.registerHelper('organisationCoursesData', function() {
  	var courseContent = this;
	var courses = Courses.find({'_id': courseContent.organisation_id});
    return _.extend(courseContent, _.omit(courses, '_id'));
  });
}
