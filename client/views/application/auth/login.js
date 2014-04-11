Template.login.events({
  "click #loginWithFacebook": function (event, tmpl) {
    event.preventDefault();
    Meteor.loginWithFacebook({

    }, function(error) {
        if (error) {
            alert(error);
        }
    });
  }
});

Template.login.events({
  "click #loginWithTwitter": function (event, tmpl) {
    event.preventDefault();
    Meteor.loginWithTwitter({

    }, function(error) {
        if (error) {
            alert(error);
        }
    });
  }
});

Template.login.events({
  "click #loginWithGoogle": function (event, tmpl) {
    event.preventDefault();
    Meteor.loginWithGoogle({

    }, function(error) {
        if (error) {
            alert(error);
        }
    });
  }
});

Template.login.events({
  "click #loginWithGoogle": function (event, tmpl) {
    event.preventDefault();
    Meteor.loginWithPassword({
      $('#username').val(),
      $('#password').val()
    }, function(error) {
        if (error) {
            alert(error);
        }
    });
  }
});

Template.accountLoggedIn.events({
  "click #logout": function (event, tmpl) {
    event.preventDefault();
    Meteor.logout(function() {
        Router.go('login');
    });
  }
});