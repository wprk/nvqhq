Meteor.publish("courses", function () {
  return Courses.find();
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