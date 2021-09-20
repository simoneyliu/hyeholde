function submitContactForm(event) {
  event.preventDefault();

  const form = document.getElementById('contactform');
  const name = event.target['name'].value;
  const email = event.target['email'].value;
  const subject = event.target['subject'].value;
  const message = event.target['message'].value;

  emailjs.send('service_2019xww', 'template_tyusmtl', {
    message: message,
    email: email,
    name: name,
    subject: subject,
  });
}
