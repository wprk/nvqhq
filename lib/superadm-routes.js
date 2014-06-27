// Superadm Pages
Router.map(function() {
  this.route('admOrganisationSetup', {
    path: '/admin/organisation/setup',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'superadmSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admOrganisationView', {
    path: '/admin/organisation',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'superadmSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('admOrganisationEdit', {
    path: '/admin/organisation/edit',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'admHeader': {to: 'header'},
      'superadmSidebarLeft': {to: 'sidebarLeft'}
    }
  }); 
});
