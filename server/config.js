Meteor.startup(function () {
  //process.env.MAIL_URL="smtp://wprk14%40gmail.com:peterGRUBB14!!@smtp.gmail.com:465/";
  
  Accounts.emailTemplates.siteName = "NVQhq";
  Accounts.emailTemplates.from = "NVQhq Admin <noreply@nvqhq.co.uk>";
  Accounts.emailTemplates.verifyEmail = {
    subject: function(user) {
      return user.profile.name + ", Welcome to the NVQhq E-learning Platform";
    },
    text: function (user, url) {
     return "Hello " + user.profile.name + ", \n\n"
       + "Thank you for registering with NVQhq. To activate your account, simply click the link below:\n\n"
       + url + "\n\n"
       + "Thanks, \n\n"
       + "The NVQhq Team";
    }
  };
  
  enviroment = process.env.NODE_ENV;

  Accounts.config({
    sendVerificationEmail: true,
    loginExpirationInDays: 1
  });  
  
  try {
    if (enviroment == 'production') {
      ServiceConfiguration.configurations.remove({
        service: "facebook"
      });
      ServiceConfiguration.configurations.insert({
        "service" : "facebook",
        "appId" : "269805096526069",
        "secret" : "d5f20aad201ef0c2043713c92120b638"
      });
      // ServiceConfiguration.configurations.remove({
      //   service: "twitter"
      // });
      // ServiceConfiguration.configurations.insert({
      //   "service" : "twitter",
      //   "consumerKey" : "p7UzoNxKFqBLXIPVP7GsDxabD",
      //   "secret" : "9jl8uSBRkuIjnxw6ivISN6NQbGZTMfMit1geCB6dXAV5X0PMz6"
      // });
      ServiceConfiguration.configurations.remove({
        service: "google"
      });
      ServiceConfiguration.configurations.insert({
        "service" : "google",
        "clientId" : "181059737409-5cfcr237ab8flcbgeq0d0kesp701m7uk.apps.googleusercontent.com",
        "secret" : "20Rj2qOgSbcQF69qVOPxrFsA"
      });
    } else {
      ServiceConfiguration.configurations.remove({
        service: "facebook"
      });
      ServiceConfiguration.configurations.insert({
        "service" : "facebook",
        "appId" : "292648167575095",
        "secret" : "3e250bc62928b50a7f33377cb2db591f"
      });
      // ServiceConfiguration.configurations.remove({
      //   service: "twitter"
      // });
      // ServiceConfiguration.configurations.insert({
      //   "service" : "twitter",
      //   "consumerKey" : "p7UzoNxKFqBLXIPVP7GsDxabD",
      //   "secret" : "9jl8uSBRkuIjnxw6ivISN6NQbGZTMfMit1geCB6dXAV5X0PMz6"
      // });
      ServiceConfiguration.configurations.remove({
        service: "google"
      });
      ServiceConfiguration.configurations.insert({
        "service" : "google",
        "clientId" : "181059737409-4ljduubsrrimbifgcbhj1ti93l6600ai.apps.googleusercontent.com",
        "secret" : "7W5D5pbsh7euajSJRaw3mWhM"
      });
    }
  } catch(error) {
    console.log(error.message);
  }
});