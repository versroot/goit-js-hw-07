const formLog = document.querySelector('.login-form');

formLog.addEventListener('submit', submitFunc);

function submitFunc(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  }
  console.log(`E-mail: ${email}, Password: ${password}`);
  formLog.reset();
}
