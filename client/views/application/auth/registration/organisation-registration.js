Template.organisationRegistration.events({
  "click #register": function (event) {
    event.preventDefault();

    var firstName = $('input#firstName').val(),
    familyName = $('input#familyName').val(),
    username = firstName + '.' + familyName,
    email = $('input#email').val(),
    password = $('input#password').val(),
    profile = {
    	name: firstName + ' ' + familyName,
        organisation: {
            _id: "NOT_YET_SET",
            verified: 0,
            verified_by: 0
        }
    };

    Accounts.createUser({
    	email: email,
    	username: username,
    	password: password,
    	profile: profile,
        roles: ["superadmin"]
    }, function(error) {
        if (error) {
            Errors.throw('danger', error);
        }
    });
  }
});