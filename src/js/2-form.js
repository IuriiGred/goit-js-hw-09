let formData = {
  email: '',
  message: '',
};

const handleFormEl = document.querySelector('.feedback-form');

const lokalKey = 'feedback-form-state';

handleFormEl.addEventListener('input', onInput);

function onInput(event) {
  const {name, value} = event.target;
    formData[name] = value.trim();
    localStorage.setItem(lokalKey, JSON.stringify(formData));
}

const replaceValue = JSON.parse(localStorage.getItem(lokalKey));
if (replaceValue) {
  formData = { ...formData, ...replaceValue };
  handleFormEl.elements.email.value = formData.email;
  handleFormEl.elements.message.value = formData.message;
}

handleFormEl.addEventListener('submit', onSubmit);

function onSubmit(event){
  event.preventDefault();
  
  if(!event.target.email.value || !event.target.message.value){
    alert("Fill please all fields");
  return;
  }

  console.log(formData);
  
  formData.email = "";
  formData.message = "";
  localStorage.removeItem(lokalKey);

  handleFormEl.reset()
}
