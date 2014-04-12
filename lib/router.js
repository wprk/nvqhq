Router.configure({
  notFoundTemplate: 'error404',
  loadingTemplate: 'loading'
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
  this.route('lnrDefaultDashboard', {
    path: '/learner',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('lnrProfile', {
    path: '/learner/profile',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrSidebarLeft': {to: 'sidebarLeft'}
    }
  });
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

var onLogin = function(pause) {
  if (Meteor.user()) {
    Router.go('index');
    pause();
  }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['login', 'notFound']});
Router.onBeforeAction(onLogin, {only: ['login']});
Router.onBeforeAction(goToDashboard, {only: ['index']});
