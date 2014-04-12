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
      'noSidebarLeft': {to: 'sidebarLeft'},
      'index': {to: 'content'}
    }
  });
});

// Auth Pages
Router.map(function() {
  this.route('login', {
    path: '/login',                 
    layoutTemplate: 'blankLayout',
    yieldTemplates: {
      'login': {to: 'blankContent'}
    }
  });
  this.route('lnrRegistration', {path: '/register/learner'});
  this.route('admRegistration', {path: '/register/admin'});
});

// Admin Pages
Router.map(function() {
  this.route('admDashboard', {
    path: '/admin',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'},
      'admDefaultDashboard': {to: 'content'}
    }
  });
  this.route('admProfile', {
    path: '/admin/profile',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'},
      'admProfile': {to: 'content'}
    }
  });
  this.route('admProfileSetup', {
    path: '/admin/profile/setup',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'},
      'admProfileSetup': {to: 'content'}
    }
  });
  this.route('admCourses', {
    path: '/admin/courses',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'admSidebarLeft': {to: 'sidebarLeft'},
      'admCoursesList': {to: 'content'}
    }
  });
});

// Learner Pages
Router.map(function() {
  this.route('lnrDashboard', {
    path: '/learner',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'},
      'lnrDefaultDashboard': {to: 'content'}
    }
  });
  this.route('lnrProfile', {
    path: '/learner/profile',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'},
      'lnrProfile': {to: 'content'}
    }
  });
  this.route('lnrProfileSetup', {
    path: '/learner/profile/setup',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'},
      'lnrProfileSetup': {to: 'content'}
    }
  });
  this.route('lnrCourses', {
    path: '/learner/courses',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'lnrHeader': {to: 'header'},
      'lnrSidebarLeft': {to: 'sidebarLeft'},
      'lnrCoursesList': {to: 'content'}
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
      Meteaor.user().profile.name != null &&
      Meteaor.user().profile.phone != null
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
