Template.login.events({
  "click #loginWithFacebook": function (event) {
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
  "click #loginWithGoogle": function (event) {
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
  "click #login": function (e) {
    e.preventDefault();
    
    var username = $('input#username').val(),
    password = $('input#password').val();
    
    Meteor.loginWithPassword(username, password, function(error) {
        if (error) {
            Errors.throw('danger', error);
            Router.go('login');
        }
    });
  }
});

Template.accountLoggedIn.events({
  "click #logout": function (event) {
    event.preventDefault();
    Meteor.logout(function() {
        Errors.throw('danger', 'You have been logged out.');
        Router.go('login');
    });
  }
});