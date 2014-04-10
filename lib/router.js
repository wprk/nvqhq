Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('courses');
  }
});

// Auth Pages
Router.map(function() {
  this.route('lnrRegistration', {path: '/auth/registration/learner'});
  this.route('admRegistration', {path: '/auth/registration/admin'});
});

// Admin Pages
Router.map(function() {
  this.route('admDefaultDashboard', {path: '/admin/'});
});

// Learner Pages
Router.map(function() {
  this.route('lnrDefaultDashboard', {path: '/learner/'});
});
