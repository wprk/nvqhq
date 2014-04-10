Template.listCourses.helpers({
  courses: function() {
    return Courses.find();
  }
});
