document.getElementById('submit').addEventListener('click', validateEmail);

function validateEmail(e) {
  let emailInput = document.getElementById('email');
  let errorIcon = document.getElementsByClassName('error-icon');

  let filter = /^([a-z\d\.-]+)@([a-z\d\-]+).([a-z]+)$/i;

  if (filter.test(emailInput.value)) {
    emailInput.classList.remove('invalid');
  } else {
    e.preventDefault();
    emailInput.className = 'invalid';
    errorIcon[0].setAttribute('style', 'visibility: visible;');
  }
}
