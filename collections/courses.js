Courses = new Meteor.Collection('Courses');

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