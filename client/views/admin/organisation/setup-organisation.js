Template.admOrganisationSetupWizard.steps = function() {
  return [{
    id: 'step-one',
    title: 'Name',
    template: 'admOrganisationSetupStepOne',
    formId: 'adm-organisation-setup-step-one-form'
  }, {
    id: 'step-two',
    title: 'Contact Details',
    template: 'admOrganisationSetupStepTwo',
    formId: 'adm-organisation-setup-step-two-form'
  }, {
    id: 'step-three',
    title: 'Courses',
    template: 'admOrganisationSetupStepThree',
    formId: 'adm-organisation-setup-step-three-form'
  }, {
    id: 'step-four',
    title: 'Payment Details',
    template: 'admOrganisationSetupStepFour',
    formId: 'adm-organisation-setup-step-four-form'
  }, {
    id: 'step-five',
    title: 'Confirmation',
    template: 'admOrganisationSetupStepFive',
    formId: 'adm-organisation-setup-step-five-form',
    onSubmit: function(data, mergedData) {
      console.log(data, mergedData);
      Meteor.call('addOrganisation', mergedData, function (error, result) {
        console.log('error', error);
        console.log('result', result);
        if (!error) {
          Router.go('admOrganisationView');
        }
      });
    }
  }];
}

Template.admOrganisationSetupStepOne.helpers({
  schema: function() {
    return new SimpleSchema({
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
      }
    });
  }
});

Template.admOrganisationSetupStepTwo.helpers({
  schema: function() {
    return new SimpleSchema({
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
  }
});

Template.admOrganisationSetupStepThree.helpers({
  schema: function() {
    var courseSchema = new SimpleSchema({
      course: {
        type: [Object],
        minCount: 1
      },
      "course.$.course_id": {
        type: String,
        label: "Course"
      },
      "course.$.status": {
        type: Boolean,
        label: "Status"
      }
    })
    return new SimpleSchema({
      courses: {
        type: courseSchema,
        minCount: 1
      }
    });
  }
});

Template.admOrganisationSetupStepFour.helpers({
  schema: function() {
    return new SimpleSchema({
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
  }
});

Template.admOrganisationSetupStepFive.helpers({
  schema: function() {
    return new SimpleSchema({
      terms_accepted: {
        type: Boolean,
        label: "Terms and Conditions",
        allowedValues: [true]
      }
    });
  }
});
