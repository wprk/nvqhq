Template.admOrganisationSetupWizard.steps = function() {
  return [{
    id: 'step-one',
    title: 'Name',
    template: 'admOrganisationSetupStepOne',
    formId: 'adm-organisation-setup-step-one-form',
    onSubmit: function(data, mergedData) {
      console.log(data, mergedData);
    }
  }, {
    id: 'step-two',
    title: 'Contact Details',
    template: 'admOrganisationSetupStepTwo',
    formId: 'adm-organisation-setup-step-two-form',
    onSubmit: function(data, mergedData) {
      console.log(data, mergedData);
    }
  }, {
    id: 'step-three',
    title: 'Courses',
    template: 'admOrganisationSetupStepThree',
    formId: 'adm-organisation-setup-step-three-form',
    onSubmit: function(data, mergedData) {
      console.log(data, mergedData);
    }
  }, {
    id: 'step-four',
    title: 'Payment Details',
    template: 'admOrganisationSetupStepFour',
    formId: 'adm-organisation-setup-step-four-form',
    onSubmit: function(data, mergedData) {
      console.log(data, mergedData);
    }
  }, {
    id: 'step-five',
    title: 'Confirmation',
    template: 'admOrganisationSetupStepFive',
    formId: 'adm-organisation-setup-step-five-form',
    onSubmit: function(data, mergedData) {
      console.log(data, mergedData);
    }
  }];
}
