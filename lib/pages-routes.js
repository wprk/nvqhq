// Default Pages
Router.map(function() {
  this.route('index', {
    path: '/',
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});
