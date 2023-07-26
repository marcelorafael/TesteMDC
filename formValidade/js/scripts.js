const form = document.querySelector('#form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const messageTextArea = document.querySelector('#message');

const phrase1 = document.getElementById('#phrase1');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value === '') {
    alert("Name is void")
  }

  if (messageTextArea.value === '') {
    alert("Message is void")
  }

  if (emailInput.value === '' || !emailValidate(emailInput.value)) {
    alert("Email is invalid or void")
  }

  form.submit()

})


function emailValidate(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true
  }

  return false
}

