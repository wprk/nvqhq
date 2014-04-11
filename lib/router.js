Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  yieldTemplates: {
    'sideBarLeft': {to: 'sidebarLeft'}
  },
  waitOn: function() {
    return Meteor.subscribe('courses');
  }
});

// Auth Pages
Router.map(function() {
  this.route('login', {path: '/'});
  this.route('lnrRegistration', {path: '/register/learner'});
  this.route('admRegistration', {path: '/register/admin'});
});

// Admin Pages
Router.map(function() {
  this.route('admDefaultDashboard', {path: '/admin/'});
});

// Learner Pages
Router.map(function() {
  this.route('lnrDefaultDashboard', {path: '/learner/'});
});
