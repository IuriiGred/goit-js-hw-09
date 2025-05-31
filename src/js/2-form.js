const formData = {
    email: "",
    message: "",
}
const lokalKey = "feedback-form-state";

const handleFormEl = document.querySelector('.feedback-form');
const handleInputEl = document.querySelector('input');
const handleTextareaEl = document.querySelector('textarea');

function saveInputFields() {
    const savedValues = {
        email: handleInputEl.value,
        message: handleTextareaEl.value,
    };
    localStorage.setItem(lokalKey, JSON.stringify(savedValues));
};

handleFormEl.addEventListener('input', saveInputFields);

const loadFormValue = () => {
  const replaceValue = localStorage.getItem(lokalKey);
  if (replaceValue !== null) {
    const formStorage = JSON.parse(replaceValue);
    handleInputEl.value = formStorage.email;
    handleTextareaEl.value = formStorage.message;
  }
};

const clearFormValue = () => {
  localStorage.removeItem(lokalKey);

  handleInputEl.value = '';
  handleTextareaEl.value = '';
};

handleFormEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
    formData.email =  handleInputEl.value;
    formData.message = handleTextareaEl.value;

if(!handleInputEl.value || !handleTextareaEl.value) {
  alert("Fill please all fields");
  return;
}

console.log(formData);

clearFormValue();
};

loadFormValue();
