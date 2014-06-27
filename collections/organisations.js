var AddressSchema = new SimpleSchema({
  address_line_1: {
    type: String,
    max: 100
  },
  address_line_2: {
    type: String,
    max: 100,
    optional: true
  },
  city: {
    type: String,
    max: 50
  },
  county: {
    type: String,
    max: 50
  },
  postcode: {
    type: String,
    max: 8
  }
}),

ContactSchema = new SimpleSchema({
  address: {
    type: AddressSchema
  }
}), 

PaymentDetailsSchema = new SimpleSchema({
  account_number: {
    type: String,
    min: 8,
    max: 8
  },
  sort_code: {
    type: String,
    min: 6,
    max: 8
  }
});

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
			type: ContactSchema,
			optional: true
		},
		paymentDetails: {
			type: PaymentDetailsSchema,
			optional: true
		}
	}
});
