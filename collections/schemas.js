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
});

var ContactSchema = new SimpleSchema({
  address: {
    type: AddressSchema
  }
});

var PaymentDetailsSchema = new SimpleSchema({
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