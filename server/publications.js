Meteor.publish("courses", function () {
  if (this.userId) {
    user = Meteor.users.findOne({_id: this.userId});
    organisation = Organisations.findOne({
      _id: user.profile.organisation._id
    });
    organisationCourses = Array();
    for (i = 0; organisation.courses.length > i; i++) {
      organisationCourses.push(organisation.courses[i]._id);
    }
    if (Roles.userIsInRole(this.userId, ['admin'], user.profile.organisation._id)) {
      return Courses.find({_id: {$in: organisationCourses}});
    } else if (Roles.userIsInRole(this.userId, ['learner'], user.profile.organisation._id)) {
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
      _id: user.profile.organisation._id
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
