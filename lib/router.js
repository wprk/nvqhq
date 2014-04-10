Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('courses'); }
});

Router.map(function() {
  this.route('defaultDashboard', {path: '/'});
});
