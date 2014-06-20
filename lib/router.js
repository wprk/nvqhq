Router.configure({
  notFoundTemplate: 'error404',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [
      Meteor.subscribe('organisations'),
      Meteor.subscribe('organisation'),
      Meteor.subscribe('courses'),
      Meteor.subscribe('userCourses'),
      Meteor.subscribe('organisationCourses')
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
    Router.go('login');
    pause();
  }
};

var goToDashboard = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().profile.organisation._id)) {
      Router.go('admDefaultDashboard');
      pause();
    } else if (Roles.userIsInRole(Meteor.userId(), 'learner', Meteor.user().profile.organisation._id)) {
      Router.go('lnrDefaultDashboard');
      pause();
    }
  }
};

var onLogin = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().profile.organisation._id)) {
      Router.go('admDefaultDashboard');
      pause();
    } else if (Roles.userIsInRole(Meteor.userId(), 'learner', Meteor.user().profile.organisation._id)) {
      Router.go('lnrDefaultDashboard');
      pause();
    }
  }
};

var mustConfigureOrganisation = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
      //if (organisationNotConfigured()) {
        Router.go('admOrganisationSetup');
        pause();
      //}
    }
  }
};

var organisationSetupComplete = function(pause) {
  if (!organisationNotConfigured()) {
    Router.go('admOrganisationView');
    pause();
  }
};

var mustConfigureProfile = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().profile.organisation._id)) {
      if (adminNotConfigured()) {
        Router.go('admProfileSetup');
        pause();
      }
    } else if (Roles.userIsInRole(Meteor.userId(), 'learner', Meteor.user().profile.organisation._id)) {
      if (learnerNotConfigured()) {
        Router.go('lnrProfileSetup');
        pause();
      }
    }
  }
};

var profileSetupComplete = function(pause) {
  if (Meteor.user()) {
    isComplete = true;
    if (isComplete) {
      console.log(Meteor.user());
      if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().profile.organisation._id)) {
        Router.go('admProfile');
        pause();
      } else if (Roles.userIsInRole(Meteor.userId(), 'learner', Meteor.user().profile.organisation._id)) {
        Router.go('lnrProfile');
        pause();
      }
    }
  }
};

organisationNotConfigured = function() {
  // user = Meteor.user();
  // organisation = user.profile.organisation;
  // if ((organisation.name.length > 0) &&
  //   (typeof organisation.contact !== 'undefined' && organisation.contact.length > 0) &&
  //   (typeof organisation.courses !== 'undefined' && organisation.courses.length > 0) &&
  //   (typeof organisation.paymentDetails !== 'undefined' && organisation.paymentDetails.length > 0)) {
  //     return false;
  // } else {
  //     return true;
  // }
  return true;
};

var adminNotConfigured = function() {
  // user = Meteor.user();
  // if ((user.name.length > 0) &&
  //   (typeof user.courses !== 'undefined' && user.courses.length > 0) &&
  //   (typeof user.emails !== 'undefined' && user.emails.length > 0)) {
  //   return false;
  // } else {
  //   return true;
  // }
};

var learnerNotConfigured = function() {
  // user = Meteor.user();
  // if ((user.profile.name.length > 0) &&
  //   (typeof user.courses !== 'undefined' && user.courses.length > 0) &&
  //   (typeof user.emails !== 'undefined' && user.emails.length > 0)) {
  //   return false;
  // } else {
  //   return true;
  // }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['error403', 'error404', 'error500', 'login', 'index', 'selectRegistration', 'organisationRegistration', 'lnrRegistration', 'admRegistration', 'contact', 'about', 'termsOfService', 'privacyPolicy', 'sitemap']});
Router.onBeforeAction(goToDashboard, {only: ['lnrRegistration', 'admRegistration']});
Router.onBeforeAction(mustConfigureOrganisation, {except: ['index', 'admOrganisationSetup']});
Router.onBeforeAction(mustConfigureProfile, {except: ['index', 'admOrganisationSetup', 'admProfileSetup', 'lnrProfileSetup']});
Router.onBeforeAction(organisationSetupComplete, {only: ['admOrganisationSetup']});
Router.onBeforeAction(profileSetupComplete, {only: ['admProfileSetup', 'lnrProfileSetup']});
Router.onBeforeAction(onLogin, {only: ['login']});
Router.onBeforeAction(function() { Errors.clearSeen(); });
