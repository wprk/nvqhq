Schemas = {};

Schemas.OrganisationProfile = new SimpleSchema({
  fullname: {
    type: String,
    label: "Full Legal Name",
    min: 2,
    max: 100
  },
  nickname: {
    type: String,
    label: "Nickname",
    min: 2,
    max: 30,
    optional: true
  },
})

Schemas.AddressDetails = new SimpleSchema({
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

Schemas.ContactDetails = new SimpleSchema({
  phone: {
    type: String
  },
  address: {
    type: Schemas.AddressDetails
  }
});

Schemas.PaymentDetails = new SimpleSchema({
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

Schemas.OrganisationCourses = new SimpleSchema({
  courses: {
    type: [Object],
    minCount: 1
  },
  "courses.$.course_id": {
    type: String,
    label: "Course"
  }
});

Schemas.Organisations = new SimpleSchema({
  profile: {
    type: Schemas.OrganisationProfile,
    optional: true
  },
  contactDetails: {
    type: Schemas.ContactDetails,
    optional: true
  },
  courses: {
    type: Schemas.OrganisationCourses,
    optional: true
  },
  paymentDetails: {
    type: Schemas.PaymentDetails,
    optional: true
  },
  terms_accepted: {
    type: Boolean,
    label: "Terms and Conditions",
    allowedValues: [true],
    optional: true
  }
});