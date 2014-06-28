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
      Meteor.call('addOrganisation', mergedData, function (error) {
        if (!error) {
          Router.go('admOrganisationView');
        }
      });
    }
  }];
}

Template.admOrganisationSetupStepOne.helpers({
  schema: function() {
    return Schemas.Organisations;
  }
});

Template.admOrganisationSetupStepTwo.helpers({
  schema: function() {
    return Schemas.Organisations;
  }
});

Template.admOrganisationSetupStepThree.helpers({
  schema: function() {
    return Schemas.Organisations;
  }
});

Template.admOrganisationSetupStepFour.helpers({
  schema: function() {
    return Schemas.Organisations;
  }
});

Template.admOrganisationSetupStepFive.helpers({
  schema: function() {
    return Schemas.Organisations;
  }
});
