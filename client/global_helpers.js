// Organisations
UI.registerHelper('organisations', function() {
	organisations = Organisations.find();
	return organisations;
});
UI.registerHelper('organisation', function() {
	user = Meteor.user();
	organisation = user.profile.organisation;
	return organisation;
});
UI.registerHelper('isOrganisationConfigured', function(organisation) {
	if(organisation) {
		if (organisation._id == "NOT_YET_SET") {
			return false;
		} else {
			return true;
		}
	} else {
		return false
	}
});

//Courses
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