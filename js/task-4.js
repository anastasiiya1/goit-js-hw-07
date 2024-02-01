const registrationForm = document.querySelector('.login-form');
registrationForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = {};

  for (const input of form.elements) {
    if (input.tagName === 'INPUT' && input.type !== 'submit') {
      const trimmedValue = input.value.trim();

      if (trimmedValue === '') {
        alert('All form fields must be filled in');
        return;
      }
      formData[input.name] = trimmedValue;
    }
  }
  console.log(formData);
  form.reset();
}