Meteor.startup(function () {
  // code to run on server at startup
  try {
    ServiceConfiguration.configurations.remove({
      service: "facebook"
    });
    ServiceConfiguration.configurations.insert({
      "service" : "facebook",
      "appId" : "269805096526069",
      "secret" : "d5f20aad201ef0c2043713c92120b638"
    });
    ServiceConfiguration.configurations.remove({
      service: "twitter"
    });
    ServiceConfiguration.configurations.insert({
      "service" : "twitter",
      "consumerKey" : "p7UzoNxKFqBLXIPVP7GsDxabD",
      "secret" : "9jl8uSBRkuIjnxw6ivISN6NQbGZTMfMit1geCB6dXAV5X0PMz6"
    });
    ServiceConfiguration.configurations.remove({
      service: "google"
    });
    ServiceConfiguration.configurations.insert({
      "service" : "google",
      "clientId" : "181059737409-5cfcr237ab8flcbgeq0d0kesp701m7uk.apps.googleusercontent.com",
      "secret" : "20Rj2qOgSbcQF69qVOPxrFsA"
    });
  } catch(error) {
    console.log(error.message);
  }
});