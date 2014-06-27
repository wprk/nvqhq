Template.admOrganisationSetupWizard.steps = function() {
  return [{
    id: 'step-one',
    title: 'Name',
    template: 'admOrganisationSetupStepOne',
    formId: 'admOrganisationSetupStepOneForm'
  }, {
    id: 'step-two',
    title: 'Contact Details',
    template: 'admOrganisationSetupStepTwo',
    formId: 'admOrganisationSetupStepTwoForm'
  }, {
    id: 'step-three',
    title: 'Courses',
    template: 'admOrganisationSetupStepThree',
    formId: 'admOrganisationSetupStepThreeForm'
  }, {
    id: 'step-four',
    title: 'Payment Details',
    template: 'admOrganisationSetupStepFour',
    formId: 'admOrganisationSetupStepFourForm'
  }, {
    id: 'step-five',
    title: 'Confirmation',
    template: 'admOrganisationSetupStepFive',
    formId: 'admOrganisationSetupStepFiveForm'
  }];
}