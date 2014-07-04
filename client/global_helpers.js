// Organisations
UI.registerHelper('organisations', function() {
	organisations = Organisations.find();
	return organisations;
});
UI.registerHelper('organisation', function() {
	if (Meteor.user()) {
		organisation = Organisations.findOne({_id: Meteor.user().profile.organisation._id});
		return organisation;
	} else {
		return false;
	}
});
UI.registerHelper('isOrganisationConfigured', function() {
	user = Meteor.user();
	if (user) {
		organisation = user.profile.organisation;
		if (organisation) {
			if (organisation._id != "NOT_YET_SET") {
				return true;
			}
		}
	}
	return false
});

//Courses
UI.registerHelper('userCourses', function() {
	user = Meteor.user();
	courses = user.profile.courses;
	return courses;
});
UI.registerHelper('organisationCourses', function() {
	user = Meteor.user();
	if (user) {
		organisation = Organisations.findOne({_id: user.profile.organisation._id});
		courses = organisation.courses.courses;
		return courses;
	} else {
		return false;
	}
});
UI.registerHelper('courseData', function() {
	var courseContent = this;
	var course = Courses.findOne({'_id': courseContent.course_id});
	return _.extend(courseContent, _.omit(course, '_id'));
});