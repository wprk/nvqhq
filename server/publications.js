Meteor.publish("courses", function () {
  if (this.userId) {
    user = Meteor.users.findOne({_id: this.userId});
    organisation = Organisations.find({
      _id: user.organisation._id
    });
    organisationCourses = Array.isArray(organisation.courses) ? organisation.courses : Array();
    if (Roles.userIsInRole(this.userId, ['admin'], user.organisation._id)) {
      return Courses.find({_id: {$in: organisationCourses}});
    } else if (Roles.userIsInRole(this.userId, ['learner'], user.organisation._id)) {
      return Courses.find({
        _id: {$in: organisationCourses},
        status: true
      });
    } else {
      this.stop();
    }
  } else {
    this.stop();
  }
});

Meteor.publish("organisations", function () {
  if (this.userId) {
    user = Meteor.users.findOne({_id: this.userId});
    organisation = Organisations.find({
      _id: user.organisation._id
    });
    return organisation;
  } else {
    this.stop();
  }
});

Meteor.publish("userData", function () {
  return Meteor.users.find(
    {_id: this.userId},
    {fields: {'organisation': 1}}
  );
});
