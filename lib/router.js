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

var goToDashboard = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
      Router.go('admDefaultDashboard');
      pause();
    } else if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().profile.organisation._id)) {
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
      if (organisationNotConfigured()) {
        Router.go('admOrganisationSetup');
        pause();
      }
    }
  }
};

var organisationSetupComplete = function(pause) {
  if (organisationNotConfigured()) {
  } else {
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
  if (Meteor.user()) {
    user = Meteor.user();
    organisation = user.profile.organisation;
    if (organisation._id == "NOT_YET_SET") {
        return true;
    }
    return false;
  }
};

var adminNotConfigured = function() {
  // if (Meteor.user()) {
  //   user = Meteor.user();
  //   if ((user.name.length > 0) &&
  //     (typeof user.courses !== 'undefined' && user.courses.length > 0) &&
  //     (typeof user.emails !== 'undefined' && user.emails.length > 0)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  return false;
};

var learnerNotConfigured = function() {
  // if (Meteor.user()) {
  //   user = Meteor.user();
  //   if ((user.profile.name.length > 0) &&
  //     (typeof user.courses !== 'undefined' && user.courses.length > 0) &&
  //     (typeof user.emails !== 'undefined' && user.emails.length > 0)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  return false;
};

var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
    pause();
  }
};

var mustBeSignedInAsLearner = function(pause) {
  if (Roles.userIsInRole(Meteor.userId(), 'learner', Meteor.user().profile.organisation._id)) {
  } else {
    Router.go('error403');
  }
};

var mustBeSignedInAsAdmin = function(pause) {
  if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().profile.organisation._id)) {
  } else {
    if (Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
    } else {
      Router.go('error403');
    }
  }
};

var mustBeSignedInAsSuperadm = function(pause) {
  if (Roles.userIsInRole(Meteor.userId(), 'superadmin')) {
  } else {
    Router.go('error403');
  }
};

var includeNonUserRoutes = function(newArray) {
  for (var i = nonUserRoutes.length - 1; i >= 0; i--) {
    newArray.push(nonUserRoutes[i]);
  };
  return newArray;
}

var includeLearnerRoutes = function(newArray) {
  for (var i = learnerRoutes.length - 1; i >= 0; i--) {
    newArray.push(learnerRoutes[i]);
  };
  return newArray;
}

var includeAdminRoutes = function(newArray) {
  for (var i = adminRoutes.length - 1; i >= 0; i--) {
    newArray.push(adminRoutes[i]);
  };
  return newArray;
}

var includeSuperadmRoutes = function(newArray) {
  for (var i = superadmRoutes.length - 1; i >= 0; i--) {
    newArray.push(superadmRoutes[i]);
  };
  return newArray;
}

var nonUserRoutes = [
  'error403',
  'error404',
  'error500',
  'login',
  'index',
  'selectRegistration',
  'organisationRegistration',
  'lnrRegistration',
  'admRegistration',
  'contact',
  'about',
  'termsOfService',
  'privacyPolicy',
  'sitemap'
];

var learnerRoutes = [
  'lnrDefaultDashboard',
  'lnrProfile',
  'lnrProfileSetup',
  'lnrCoursesList'
];

var adminRoutes = [
  'admDefaultDashboard',
  'admProfile',
  'admProfileSetup',
  'admCoursesList'
];

var superadmRoutes = [
  'admOrganisationSetup',
  'admOrganisationView',
  'admOrganisationEdit'
];

Router.onBeforeAction(mustBeSignedIn, {except: includeNonUserRoutes(new Array())});
Router.onBeforeAction(mustBeSignedInAsLearner, {only: includeLearnerRoutes(new Array())});
Router.onBeforeAction(mustBeSignedInAsAdmin, {only: includeAdminRoutes(new Array())});
Router.onBeforeAction(mustBeSignedInAsSuperadm, {only: includeSuperadmRoutes(new Array())});

Router.onBeforeAction(mustConfigureOrganisation, {except: includeNonUserRoutes(new Array('admOrganisationSetup'))});
Router.onBeforeAction(mustConfigureProfile, {except: includeNonUserRoutes(new Array('admOrganisationSetup', 'admProfileSetup', 'lnrProfileSetup'))});
Router.onBeforeAction(goToDashboard, {only: ['login', 'lnrRegistration', 'admRegistration', 'organisationRegistration']});

Router.onBeforeAction(organisationSetupComplete, {only: ['admOrganisationSetup']});
Router.onBeforeAction(profileSetupComplete, {only: ['admProfileSetup', 'lnrProfileSetup']});

Router.onBeforeAction(function() { Errors.clearSeen(); });