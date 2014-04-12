Template.lnrSidebarLeft.helpers({
  courses: function() {
    return lnrCourses.find();
  }
});

Template.admSidebarLeft.helpers({
  courses: function() {
    return admCourses.find();
  }
});
