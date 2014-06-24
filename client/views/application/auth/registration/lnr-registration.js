Template.lnrRegistration.events({
  "click #register": function (event) {
    event.preventDefault();

    var firstName = $('input#firstName').val(),
    familyName = $('input#familyName').val(),
    username = firstName + '.' + familyName,
    email = $('input#email').val(),
    password = $('input#password').val(),
    organisation_id = $('select#organisationId').val(),
    profile = {
    	name: firstName + ' ' + familyName,
        organisation: {
            _id: organisation_id,
            verified: 0,
            verified_by: 0
        }
    };

    user_id = Accounts.createUser({
    	email: email,
    	username: username,
    	password: password,
    	profile: profile,
    }, function(error) {
        if (error) {
            Errors.throw('danger', error);
            Router.go('lnrRegistration');
        }
    });

    Roles.addUsersToRoles(user_id, ['learner'], organisation_id);
  }
});