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
