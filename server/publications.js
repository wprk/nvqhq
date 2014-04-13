Meteor.publish("courses", function (group) {
  if (Roles.userIsInRole(this.userId, ['admin'], group)) {
    return Courses.find();     
  } else {
    this.stop();
    return;
    //return Courses.find(
    //  {status: true}
    //);      
  }
});