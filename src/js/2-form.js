const formData = {
    email: "",
    message: "",
}
const lokalKey = "feedback-form-state";
const obj = {};

const handleFormEl = document.querySelector('.feedback-form');
const handleInputEl = document.querySelector('input');
const handleTextareaEl = document.querySelector('textarea');

handleFormEl.addEventListener('input', onInput);

function onInput(event) {
  const name = event.target.name;
  const value = event.target.value;
  obj[name] = value.trim();
  localStorage.setItem(lokalKey, JSON.stringify(obj))
}

const loadFormValue = () => {
  const replaceValue = localStorage.getItem(lokalKey);
  if (replaceValue !== null) {
    const formStorage = JSON.parse(replaceValue);
    handleInputEl.value = formStorage.email;
    handleTextareaEl.value = formStorage.message;
  }
};


handleFormEl.addEventListener('submit', onSubmit);

function onSubmit(event){
  event.preventDefault();
  const savedSetting = localStorage.getItem(lokalKey);
  const parceSetting = JSON.parse(savedSetting);

  const {email, message} = parceSetting;

  if(!email || !message){
    alert("Fill please all fields");
  return;
  }

  formData.email = email;
  formData.message = message;

  console.log(formData);

  clearFormValue();
}

const clearFormValue = () => {
  localStorage.removeItem(lokalKey);

  handleInputEl.value = '';
  handleTextareaEl.value = '';
};

loadFormValue();
























// const handleFormEl = document.querySelector('.feedback-form');
// const handleInputEl = document.querySelector('input');
// const handleTextareaEl = document.querySelector('textarea');

// function saveInputFields() {
//     const savedValues = {
//         email: handleInputEl.value,
//         message: handleTextareaEl.value,
//     };
//     localStorage.setItem(lokalKey, JSON.stringify(savedValues));
// };

// handleFormEl.addEventListener('input', saveInputFields);

// const loadFormValue = () => {
//   const replaceValue = localStorage.getItem(lokalKey);
//   if (replaceValue !== null) {
//     const formStorage = JSON.parse(replaceValue);
//     handleInputEl.value = formStorage.email;
//     handleTextareaEl.value = formStorage.message;
//   }
// };

// const clearFormValue = () => {
//   localStorage.removeItem(lokalKey);

//   handleInputEl.value = '';
//   handleTextareaEl.value = '';
// };

// handleFormEl.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();
//     formData.email =  handleInputEl.value;
//     formData.message = handleTextareaEl.value;

// if(!handleInputEl.value || !handleTextareaEl.value) {
//   alert("Fill please all fields");
//   return;
// }

// console.log(formData);

// clearFormValue();
// };

// loadFormValue();
