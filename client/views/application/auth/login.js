Template.accountLoggedOut.events({
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

// Template.accountLoggedOut.events({
//   "click #loginWithTwitter": function (event, tmpl) {
//     event.preventDefault();
//     Meteor.loginWithTwitter({

//     }, function(error) {
//         if (error) {
//             alert(error);
//         }
//     });
//   }
// });

// Template.accountLoggedOut.events({
//   "click #loginWithGoogle": function (event, tmpl) {
//     event.preventDefault();
//     Meteor.loginWithGoogle({

//     }, function(error) {
//         if (error) {
//             alert(error);
//         }
//     });
//   }
// });

Template.accountLoggedOut.events({
  "click #login": function (event, tmpl) {
    alert('coming soon');
    //Meteor.login();
  }
});

Template.accountLoggedIn.events({
  "click #logout": function (event, tmpl) {
    event.preventDefault();
    Meteor.logout({
        function (error) {
            if (error) {
                alert('error');
            }
        }
    });
  }
});
