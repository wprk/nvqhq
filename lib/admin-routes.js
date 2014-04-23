// Admin Pages
Router.map(function() {
  this.route('admDefaultDashboard', {
    path: '/admin',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admProfile', {
    path: '/admin/profile',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admProfileSetup', {
    path: '/admin/profile/setup',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admOrganisationView', {
    path: '/admin/organisation',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admOrganisationSetup', {
    path: '/admin/organisation/setup',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'superadmSidebarLeft': {to: 'sidebarLeft'}
    }
  });  this.route('admOrganisationEdit', {
    path: '/admin/organisation/edit',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admCoursesList', {
    path: '/admin/courses',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});
