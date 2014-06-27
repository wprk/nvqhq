Template.lnrRegistration.events({
	"click #lnrRegister": function (event) {
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
		},
		roles = {};
		roles[organisation_id] = ["learner"];

		Accounts.createUser({
			email: email,
			username: username,
			password: password,
			profile: profile,
			roles: roles
		}, function(error) {
			if (error) {
				Errors.throw('danger', error);
			}
		});
	}
});