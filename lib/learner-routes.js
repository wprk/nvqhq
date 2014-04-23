// Learner Pages
Router.map(function() {
  this.route('lnrDefaultDashboard', {
    path: '/learner',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('lnrProfile', {
    path: '/learner/profile',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('lnrProfileSetup', {
    path: '/learner/profile/setup',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('lnrCoursesList', {
    path: '/learner/courses',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});