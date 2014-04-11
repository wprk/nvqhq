Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  yieldTemplates: {
    'lnrSideBarLeft': {to: 'sideBarLeft'}
  },
  waitOn: function() {
    return Meteor.subscribe('courses');
  }
});

// Auth Pages
Router.map(function() {
  this.route('index', {path: '/'});
  this.route('login', {path: '/login',                 
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'login': {to: 'content'}
    }
  });
  this.route('lnrRegistration', {path: '/register/learner'});
  this.route('admRegistration', {path: '/register/admin'});
});

// Admin Pages
Router.map(function() {
  this.route('admDefaultDashboard', {path: '/admin'});
});

// Learner Pages
Router.map(function() {
  this.route('lnrDefaultDashboard', {path: '/learner'});
});

var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
    pause();
  }
};

var goToDashboard = function(pause) {
  if (Meteor.user()) {
    Router.go('lnrDefaultDashboard');
    pause();
  }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['index', 'login']});
Router.onBeforeAction(goToDashboard, {only: ['index']});
