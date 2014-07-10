// Auth Pages
Router.map(function() {
  this.route('login', {
    path: '/auth/login',                 
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('organisationRegistration', {
    path: '/auth/register/organisation',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admRegistration', {
    path: '/auth/register/admin',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('lnrRegistration', {
    path: '/auth/register/learner',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('selectRegistration', {
    path: '/auth/register',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('organisationNotVerified', {
    path: '/auth/organisation-verification',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('emailNotVerified', {
    path: '/auth/email-verification/:token?',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
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
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admError403', {
    path: '/access-denied/admin-only/',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('superadmError403', {
    path: '/access-denied/superadmin-only',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('error404', {
    path: '/page-not-found',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('error500', {
    path: '/error',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});