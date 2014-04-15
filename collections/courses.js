Courses = new Meteor.Collection('courses');

if (Meteor.isClient) {
  Template.lnrSidebarLeft.helpers({
    courses: function() {
      return Courses.find();
    }
  });

  Template.admSidebarLeft.helpers({
    courses: function() {
      return Courses.find();
    }
  });
  Template.admCoursesList.helpers({
    courses: function() {
      return Courses.find();
    }
  });
  Template.lnrCoursesList.helpers({
    courses: function() {
      return Courses.find();
    }
  });
}
