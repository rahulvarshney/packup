
const name: string = "packup";
console.log(`hello ${name}`);




const smtpEnvUrl =  Deno.env.get('EMAIL_SMTP_URL');
const emailApiKey = Deno.env.get('EMAIL_API_KEY');
console.log('EMAIL_SMTP_URL: ', smtpEnvUrl);
console.log('EMAIL_API_KEY: ', emailApiKey);