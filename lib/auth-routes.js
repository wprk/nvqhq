// Auth Pages
Router.map(function() {
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
    path: '/auth/email-verification/:token?',
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'emailNotVerified': {to: 'blankContent'}
    },
    onBefore: function() {
      console.log('beforeAction');
      if (this.params.token) {
        Accounts.verifyEmail(this.params.token, function(error) {
          if(!error) {
            console.log('email-verified');
            //goToDashboard();
          } else {
            console.log(error);
          }
        })
      }
    }
  });
});

// Error Pages
Router.map(function() {
  this.route('error403', {
    path: '/access-denied',
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'error403': {to: 'blankContent'}
    }
  });
  this.route('admError403', {
    path: '/access-denied/admin-only/',
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'error403': {to: 'blankContent'}
    }
  });
  this.route('superadmError403', {
    path: '/access-denied/superadmin-only',
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