Template.lnrListCourses.helpers({
  courses: function() {
    return Courses.find();
  }
});