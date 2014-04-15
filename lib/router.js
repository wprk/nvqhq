Router.configure({
  notFoundTemplate: 'error404',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [
      Meteor.subscribe('organisations'),
      Meteor.subscribe("userData"),
      Meteor.subscribe('courses')
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
    if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().organisation._id)) {
      Router.go('admDefaultDashboard');
      pause();
    } else if (Roles.userIsInRole(Meteor.userId(), 'learner', Meteor.user().organisation._id)) {
      Router.go('lnrDefaultDashboard');
      pause();
    }
  }
};

var onLogin = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().organisation._id)) {
      Router.go('admDefaultDashboard');
      pause();
    } else if (Roles.userIsInRole(Meteor.userId(), 'learner', Meteor.user().organisation._id)) {
      Router.go('lnrDefaultDashboard');
      pause();
    }
  }
};

var mustConfigureOrganisation = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'superadmin', Meteor.user().organisation._id)) {
      Router.go('admOrganisationSetup');
      pause();
    } else {
      pause();
    }
  }
};

var mustConfigureProfile = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().organisation._id)) {
      Router.go('admProfileSetup');
      pause();
    } else if (Roles.userIsInRole(Meteor.userId(), 'learner', Meteor.user().organisation._id)) {
      Router.go('lnrProfileSetup');
      pause();
    } else {
      pause();
    }
  }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['error403', 'error404', 'error500', 'login', 'index', 'selectRegistration', 'organisationRegistration', 'lnrRegistration', 'admRegistration']});
// Router.onBeforeAction(mustConfigureOrganisation, {except: ['index', 'admOrganisationSetup']});
// Router.onBeforeAction(mustConfigureProfile, {except: ['index', 'admProfileSetup', 'lnrProfileSetup']});
Router.onBeforeAction(goToDashboard, {only: ['lnrRegistration', 'admRegistration']});
Router.onBeforeAction(onLogin, {only: ['login']});
Router.onBeforeAction(function() { Errors.clearSeen(); });
