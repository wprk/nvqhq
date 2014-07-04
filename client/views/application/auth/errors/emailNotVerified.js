Template.emailNotVerified.helpers({
  'email': function() {
    return Router.current().params.email;
  }
});