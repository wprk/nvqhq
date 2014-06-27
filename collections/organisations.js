Organisations = new Meteor.Collection('organisations', {
	schema: {
		fullname: {
			type: String,
			label: "Full Legal Name",
			min: 2,
			max: 100
		},
		nickname: {
			type: String,
			label: "Nickname",
			max: 30,
			optional: true
		},
		contact: {
			type: Object,
			label: "Contact",
			optional: true
		},
		paymentDetails: {
			type: Object,
			label: "Payment Details",
			optional: true
		}
	}
});
