// Router Configuration
Router.configure({
  notFoundTemplate: 'error404',
  loadingTemplate: 'loading'
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
];

var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
  } else {
    return true;
  }
};

Router.onBeforeAction(mustBeSignedIn, {only: userRoutes});