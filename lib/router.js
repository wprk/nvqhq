Router.configure({
  notFoundTemplate: 'error404',
  loadingTemplate: 'loading'
});

// Default Pages
Router.map(function() {
  this.route('index', {
    path: '/',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});

// Auth Pages
Router.map(function() {
  this.route('login', {
    path: '/login',                 
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
});

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
});

var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
    pause();
  }
};

var goToDashboard = function(pause) {
  if (Meteor.user()) {
    if (Meteor.user().type == 'admin') {
      Router.go('admDefaultDashboard');
    } else {
      Router.go('lnrDefaultDashboard');
    }
    pause();
  }
};

var onLogin = function(pause) {
  if (Meteor.user()) {
    Router.go('index');
    pause();
  }
};

var onIncompleteProfile = function(pause) {
  if (Meteor.user() &&
      Meteaor.user.profile.name != null
  ) {
    if (Meteor.user().type == 'admin') {
      Router.go('admProfileSetup');
    } else {
      Router.go('lnrProfileSetup');
    }
    pause();
  }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['login', 'index']});
Router.onBeforeAction(onLogin, {only: ['login']});
Router.onBeforeAction(goToDashboard, {only: ['index', 'login']});

Router.onAfterAction(onIncompleteProfile, {only: ['login']});
