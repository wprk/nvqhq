if (Accounts._resetPasswordToken) {
  Session.set('resetPassword', Accounts._resetPasswordToken);
} 

// Learner Registration form submission
Template.lnrRegistration.events({
  'submit #lnr-register-form' : function(event, form) {
    event.preventDefault();
    var email = form.find('#account-email').value
    , password = form.find('#account-password').value;
    
    // Trim and validate the input
    var email = trimInput(email);
    
    var fields = [
      {'field':'Email', 'fieldVal':email},
      {'field':'Password', 'fieldVal':password}
    ];
    
    
    if (
      isValidEmail(email) &&
      isValidPassword(password) &&
      isNotEmpty(fields)
    ) {
      Accounts.createUser({email: email, password : password}, function(error){
        if (error) {
          console.log(error);
          // Inform the user that account creation failed
        } else {
          // Success. Account has been created and the user
          // has logged in successfully. 
        }
        
      });
    }
    
    return false;
  }
});

// Admin Registration form submission
Template.admRegistration.events({
  'submit #adm-register-form' : function(event, form) {
    event.preventDefault();
    var email = form.find('#account-email').value
    , password = form.find('#account-password').value;
    
    // Trim and validate the input
    var email = trimInput(email);

    var fields = [
      {'field':'Email', 'fieldVal':email},
      {'field':'Password', 'fieldVal':password}
    ];
    
    if (
      isValidEmail(email) &&
      isValidPassword(password) &&
      isNotEmpty(fields)
    ) {
      Accounts.createUser({email: email, password : password}, function(error){
        if (error) {
          // Inform the user that account creation failed
        } else {
          // Success. Account has been created and the user
          // has logged in successfully. 
        }
        
      });
    }
    
    return false;
  }
});

// Login form submission
Template.login.events({
  'submit #login-form' : function(event, form){
    event.preventDefault();
    // retrieve the input field values
    var email = form.find('#login-email').value
    , password = form.find('#login-password').value;
    
    // Trim and validate your fields here....
    var email = trimInput(email);

    var fields = [
      {'field':'Email', 'fieldVal':email},
      {'field':'Password', 'fieldVal':password}
    ];
    
    console.log('submitted');    
    
    if (
      isValidEmail(email) &&
      isValidPassword(password) &&
      isNotEmpty(fields)
    ) {
      // If validation passes, supply the appropriate fields to the
      // Meteor.loginWithPassword() function.
      Meteor.loginWithPassword(email, password, function(error){
        if (error) {
          console.log(error);
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
        } else {
          console.log('logged in');
          // The user has been logged in.
        }
      });
    }
    return false; 
  }
});

Template.passwordRecovery.events({  
  'submit #recovery-form' : function(event, form) {
    event.preventDefault()
    var email = trimInput(form.find('#recovery-email').value)
    
    if (isNotEmpty(email) && isValidEmail(email)) {
      Accounts.forgotPassword({email: email}, function(error){
        if (error) {
          // Error Message
        } else {
          // Email Sent Message
        }
      });
    }
    return false; 
  },
  
  'submit #new-password' : function(event, form) {
    event.preventDefault();
    var password = form.find('#new-password-password').value;
    if (isNotEmpty(password) && isValidPassword(password)) {
      Accounts.resetPassword(Session.get('resetPassword'), password, function(error){
        if (error) {
          // Error Message here
        } else {
          Session.set('resetPassword', null);
        }
      });
    }
    return false; 
  }
});

// Validators, helpers
//

Template.passwordRecovery.helpers({
    resetPassword : function(t) {
      return Session.get('resetPassword');
    }
  });

// Trim Input
function trimInput(val) {
  return val.replace(/^\s*|\s*$/g, "");
}

// Validations
function isValidEmail(val, field) {
  if (val.indexOf('@') !== -1) {
      return true;
    } else {
      Session.set('displayMessage', 'Error & Please enter a valid email address.');
      return false;
    }
}

function isValidPassword(val, field) {
  if (val.length >= 6) {
    return true;
  } else {
    Session.set('displayMessage', 'Error & Your password should be 6 characters or longer.');
    return false;
  }
}

function isNotEmpty(vals) {
  for (var i=0; i<vals.length; i++) {
    // if null or empty, return false
    if (!vals[i].fieldVal || vals[i].fieldVal === ''){
      Session.set('displayMessage', 'Error & Please fill in field ' + vals[i].field + '.');
      // return false;
    }
  }
  return true;
}