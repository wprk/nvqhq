var Schemas = {};

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
  course_id: {
    type: String,
    label: "Course"
  },
  status: {
    type: Boolean,
    label: "Status"
  }
});

Schemas.Organisations = new SimpleSchema({
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
  contact: {
    type: Schemas.ContactDetails
  },
  courses: {
    type: [Schemas.OrganisationCourses],
    minCount: 1
  },
  paymentDetails: {
    type: Schemas.PaymentDetails
  }
});

Organisations.attachSchema(Schemas.Organisations);
