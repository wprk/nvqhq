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
  this.route('admCoursesList', {
    path: '/admin/courses',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});