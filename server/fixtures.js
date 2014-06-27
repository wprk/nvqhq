Meteor.startup(function () {

  if (Roles.getAllRoles().count() === 0) {
    Roles.createRole('superadmin');
    Roles.createRole('admin');
    Roles.createRole('assessor');
    Roles.createRole('employer');
    Roles.createRole('learner');
    Roles.createRole('user');
  }

  if (Courses.find().count() === 0) {
    Courses.insert({
      title: 'Hairdressing',
      type: 'NVQ',
      level: '1',
      status: true
    });

    Courses.insert({
      title: 'Barbering',
      type: 'NVQ',
      level: '1',
      status: false
    });

     Courses.insert({
      title: 'Hairdressing',
      type: 'NVQ',
      level: '2',
      status: true
    });

    Courses.insert({
      title: 'Barbering',
      type: 'NVQ',
      level: '2',
      status: false
    });

    Courses.insert({
      title: 'Hairdressing',
      type: 'NVQ',
      level: '3',
      status: true
    });

    Courses.insert({
      title: 'Barbering',
      type: 'NVQ',
      level: '3',
      status: false
    });

    Courses.insert({
      title: 'Car Mechanics',
      type: 'NVQ',
      level: '1',
      status: false
    });
  }

  if (Organisations.find().count() === 0) {
    Organisations.insert({
      fullname: 'Test Organisation',
      nickname: 'Tester 1',
      contact: {},
      paymentDetails: {}
    });
  }

  if (OrganisationCourses.find().count() === 0) {
    var organisations = Organisations.find();
    var courses = Courses.find();
    organisations.forEach(function(organisation) {
      courses.forEach(function (course) {
        OrganisationCourses.insert({
          organisation_id: organisation._id,
          course_id: course._id,
          status: true
        });
      });
    });
  }

  // if (UserCourses.find().count() === 0) {
  //   var cursor = Users.find();
  //   cursor.forEach(function(user) {
  //     UserCourses.insert({
  //       user_id: organisation._id,
  //       course_id: Courses.find({}, {"_id": 1}).fetch(),
  //       status: true
  //     });
  //   });
  // }
});
