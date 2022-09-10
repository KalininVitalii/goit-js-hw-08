import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

const FEEDBACK_KEY = 'feedback-form-state';
let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500));

function onTextInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));

  console.log(formData);
  console.log(JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const message = localStorage.getItem(FEEDBACK_KEY);
  const savedMessage = JSON.parse(message);
  if (savedMessage) {
    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_KEY);
    formData = {};
    console.log(savedMessage);
  }
}

populateText();
function populateText() {
  const savedMessage = localStorage.getItem(FEEDBACK_KEY);
  if (savedMessage) {
    formData = JSON.parse(savedMessage);
    refs.email.value = formData.email;
    refs.message.value = formData.message;
  }
}
