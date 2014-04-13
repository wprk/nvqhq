Template.login.events({
  "click #loginWithFacebook": function (event, tmpl) {
    event.preventDefault();
    Meteor.loginWithFacebook({

    }, function(error) {
        if (error) {
            console.log(error);
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
            console.log(error);
        }
    });
  }
});

Template.login.events({
  "click #login": function (event, tmpl) {
    event.preventDefault();
    
    var email = tmpl.find('#username').val(),
    password = tmpl.find('#password').val();
    
    Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
            console.log(error);
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