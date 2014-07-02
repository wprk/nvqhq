// Auth Pages
Router.map(function() {
  this.route('auth', {
    path: '/auth',                 
    layoutTemplate: 'loading'
  });
  this.route('login', {
    path: '/auth/login',                 
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'login': {to: 'blankContent'}
    }
  });
  this.route('organisationRegistration', {
    path: '/auth/register/organisation',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admRegistration', {
    path: '/auth/register/admin',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('lnrRegistration', {
    path: '/auth/register/learner',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('selectRegistration', {
    path: '/auth/register',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('organisationNotVerified', {
    path: '/auth/organisation-verification',
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'organisationNotVerified': {to: 'blankContent'}
    }
  });
  this.route('emailNotVerified', {
    path: '/auth/email-verification/:email',
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'emailNotVerified': {to: 'blankContent'}
    }
  });
});