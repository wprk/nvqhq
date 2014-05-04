Meteor.publish("courses", function () {
  return Courses.find();
});

Meteor.publish("organisations", function () {
  return Organisations.find();
});

Meteor.publish("organisation", function () {
  if (this.userId) {
    user = Meteor.users.findOne({_id: this.userId});
    organisation = Organisations.find({
      _id: user.profile.organisation._id
    });
    return organisation;
  } else {
    this.stop();
  }
});

Meteor.publish("organisationCourses", function () {
  if (this.userId) {
    user = Meteor.users.findOne({_id: this.userId});
    courses = OrganisationCourses.find({
      organisation_id: user.profile.organisation._id
    });
    return courses;
  } else {
    this.stop();
  }
});

Meteor.publish("userCourses", function () {
  if (this.userId) {
    courses = UserCourses.find({
      user_id: this.userId
    });
    return courses;
  } else {
    this.stop();
  }
});
