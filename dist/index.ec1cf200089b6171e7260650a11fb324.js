(() => {
  // main.ts
  var name = "packup";
  console.log(`hello ${name}`);
  var smtpEnvUrl = Deno.env.get("EMAIL_SMTP_URL");
  var emailApiKey = Deno.env.get("EMAIL_API_KEY");
  console.log("EMAIL_SMTP_URL: ", smtpEnvUrl);
  console.log("EMAIL_API_KEY: ", emailApiKey);
})();
