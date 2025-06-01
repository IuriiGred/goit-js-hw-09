const formData = {
    email: "",
    message: "",
}
const lokalKey = "feedback-form-state";
const handleFormEl = document.querySelector('.feedback-form');

handleFormEl.addEventListener('input', onInput);

const obj = {};
function onInput(event) {
  const {name, value} = event.target;
  obj[name] = value.trim();
  localStorage.setItem(lokalKey, JSON.stringify(obj))
}

const replaceValue = JSON.parse(localStorage.getItem(lokalKey));

if (replaceValue !== null) {
  const newObj = { ...formData, ...replaceValue}
  
  handleFormEl.elements.message.value = newObj.message;
  handleFormEl.elements.email.value = newObj.email;
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
  
  formData.email = "";
  formData.message = "";
  localStorage.removeItem(lokalKey);

  handleFormEl.reset()
}
