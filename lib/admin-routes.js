// Admin Pages
Router.map(function() {
  this.route('admDefaultDashboard', {
    path: '/admin',
    layoutTemplate: 'appLayout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  
  this.route('admProfile', {
    path: '/admin/profile',
    layoutTemplate: 'appLayout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admProfileSetup', {
    path: '/admin/profile/setup',
    layoutTemplate: 'appLayout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  
  this.route('admCoursesList', {
    path: '/admin/courses',
    layoutTemplate: 'appLayout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});
