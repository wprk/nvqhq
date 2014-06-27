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
});
