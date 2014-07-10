// Learner Pages
Router.map(function() {
  this.route('lnrDefaultDashboard', {
    path: '/learner',
    layoutTemplate: 'appLayout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('lnrProfile', {
    path: '/learner/profile',
    layoutTemplate: 'appLayout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('lnrProfileSetup', {
    path: '/learner/profile/setup',
    layoutTemplate: 'appLayout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('lnrCoursesList', {
    path: '/learner/courses',
    layoutTemplate: 'appLayout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});