Router.configure({
  notFoundTemplate: 'error404',
  loadingTemplate: 'loading',
  waitOn: function() { 
    return [
      Meteor.subscribe("userData"),
      Meteor.subscribe('courses'),
      Meteor.subscribe('organisations')
    ]
  }
});

Router.map(function() {
  this.route('error403', {
    path: '/access-denied',
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'error403': {to: 'blankContent'}
    }
  });
  this.route('error404', {
    path: '/page-not-found',
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'error404': {to: 'blankContent'}
    }
  });
  this.route('error500', {
    path: '/error',
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'error404': {to: 'blankContent'}
    }
  });
});

var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    console.log('not logged in');
    Router.go('login');
    pause();
  }
};

var goToDashboard = function(pause) {
  if (Meteor.user()) {
    console.log('logged in');
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      Router.go('admDefaultDashboard');
      pause();
    } else if (Roles.userIsInRole(Meteor.userId(), 'learner')) {
      Router.go('lnrDefaultDashboard');
      pause();
    }
  }
};

var onLogin = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      Router.go('admDefaultDashboard');
    } else {
      Router.go('lnrDefaultDashboard');
    }
    pause();
  }
};

Router.onBeforeAction(goToDashboard, {only: ['login', 'lnrRegistration', 'admRegistration']});
Router.onBeforeAction(mustBeSignedIn, {except: ['error403', 'error404', 'error500', 'login', 'index', 'selectRegistration', 'organisationRegistration', 'lnrRegistration', 'admRegistration']});
Router.onBeforeAction(onLogin, {only: ['login']});
Router.onBeforeAction(function() { Errors.clearSeen(); });