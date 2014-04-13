// Default Pages
Router.map(function() {
  this.route('index', {
    path: '/',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});