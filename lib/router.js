// Router Configuration
Router.configure({
  notFoundTemplate: 'error404',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [
      Meteor.subscribe('organisations'),
      Meteor.subscribe('organisation'),
      Meteor.subscribe('courses'),
    ]
  }
});

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
  'sitemap',
  'emailNotVerified',
  'organisationNotVerified'
];

var userRoutes = [
  'emailNotVerified',
  'organisationNotVerified'
]
.concat(learnerRoutes)
.concat(adminRoutes)
.concat(superadmRoutes);

var learnerRoutes = [
  'lnrDefaultDashboard',
  'lnrProfile',
  'lnrProfileSetup',
  'lnrCoursesList'
];

var adminRoutes = [
  'admDefaultDashboard',
  'admOrganisationView',
  'admProfileSetup',
  'admProfile',
  'admCoursesList'
];

var superadmRoutes = [
  'admOrganisationSetup',
  'admOrganisationEdit'
];

var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
  } else {
    return true;
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
      Router.go('admError403');
    }
  }
};

var mustBeSignedInAsSuperadm = function(pause) {
  if (Roles.userIsInRole(Meteor.userId(), 'superadmin', Meteor.user().profile.organisation._id)) {
  } else {
    Router.go('superadmError403');
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

var organisationSetupComplete = function(pause) {
  if (organisationNotConfigured()) {
  } else {
    Router.go('admOrganisationView');
    pause();
  }
};

var profileSetupComplete = function(pause) {
  if (Meteor.user()) {
    if (Roles.userIsInRole(Meteor.userId(), 'admin', Meteor.user().profile.organisation._id)) {
      if(adminNotConfigured()) {
      } else {
        Router.go('admProfile');
        pause();
      }
    } else if (Roles.userIsInRole(Meteor.userId(), 'learner', Meteor.user().profile.organisation._id)) {
      if(learnerNotConfigured()) {
      } else {
        Router.go('lnrProfile');
        pause();
      }
    }
  }
};

var emailVerificationComplete = function() {
  if (emailNotVerified()) {
  } else {
    goToDashboard();
  }
};

var organisationVerificationComplete = function() {
  if (organisationNotVerified()) {
    console.log('organisationStillNotVerified');
  } else {
    goToDashboard();
  }
};

Router.onBeforeAction(mustBeSignedIn, {only: userRoutes});

// Router.onBeforeAction(mustBeSignedInAsLearner, {only: learnerRoutes});
// Router.onBeforeAction(mustBeSignedInAsAdmin, {only: adminRoutes});
// Router.onBeforeAction(mustBeSignedInAsSuperadm, {only: superadmRoutes});

Router.onBeforeAction(mustConfigureOrganisation, {except: nonUserRoutes.concat(['admOrganisationSetup'])});
//Router.onBeforeAction(organisationNotVerified, {except: nonUserRoutes.concat('admOrganisationSetup')});

// Router.onBeforeAction(emailNotVerified, {except: nonUserRoutes});
Router.onBeforeAction(mustConfigureProfile, {except: nonUserRoutes.concat(['admOrganisationSetup', 'admProfileSetup', 'lnrProfileSetup'])});

Router.onBeforeAction(goToDashboard, {only: ['login', 'lnrRegistration', 'admRegistration', 'organisationRegistration']});

Router.onAfterAction(organisationSetupComplete, {only: ['admOrganisationSetup']});
Router.onAfterAction(profileSetupComplete, {only: ['admProfileSetup', 'lnrProfileSetup']});

// Router.onAfterAction(emailVerificationComplete, {only: ['emailNotVerified']});
Router.onAfterAction(organisationVerificationComplete, {only: ['organisationNotVerified']});

Router.onAfterAction(function() { Errors.clearSeen(); });

function organisationNotConfigured() {
  if (Meteor.user()) {
    user = Meteor.user();
    organisation = user.profile.organisation;
    if (organisation._id == "NOT_YET_SET") {
        return true;
    }
    return false;
  }
};

function adminNotConfigured() {
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

function learnerNotConfigured() {
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

function emailNotVerified() {
  if (mustBeSignedIn) {
    emails = Meteor.user().emails;
    for (var i = 0; i < emails.length; i++) {
      if (emails[i].verified == false) {
        Router.go('emailNotVerified', {email: emails[i].address});
      }
    }
  }
};

function organisationNotVerified() {
  if (mustBeSignedIn) {
    organisation = Meteor.user().profile.organisation;
    if (organisation.verified == false) {
      Router.go('organisationNotVerified');
    }
  }
};