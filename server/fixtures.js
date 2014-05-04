Meteor.startup(function () {

  if (Roles.getAllRoles().count() === 0) {
    Roles.createRole('superadmin');
    Roles.createRole('admin');
    Roles.createRole('assessor');
    Roles.createRole('employer');
    Roles.createRole('learner');
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
      name: 'Test Organisation',
      contact: [],
      paymentDetails: []
    });
    Organisations.insert({
      name: 'Test Organisation 2',
      contact: [],
      paymentDetails: []
    });
    Organisations.insert({
      name: 'Test Organisation 3',
      contact: [],
      paymentDetails: []
    });
  }

  if (OrganisationCourses.find().count() === 0) {
    var cursor = Organisations.find();
    cursor.forEach(function(organisation) {
      OrganisationCourses.insert({
        organisation_id: organisation._id,
        course_id: Courses.find({}, {"_id": 1}).fetch(),
        status: true
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
