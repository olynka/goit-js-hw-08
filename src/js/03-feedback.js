import throttle from "lodash.throttle";
import storageApi from "./storage";


// const reft = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('.feedback-form textarea')
// }
// reft.form.addEventListener('submit',onFormSubmit);
// reft.textarea.addEventListener('input',onTextareaInput);
// // toFillTextarea();

// function onFormSubmit(evn) {
//     evn.preventDefault();
//     console.log('ok');
//     evn.currentTarget.reset();
//     localStorage.removeItem("feedback-form-state");
    
// };
// function onTextareaInput(evn) {
//     const messege = evn.currentTarget.value;
//     // console.log(value);
// localStorage.setItem('feedback-form-state', messege);
// }

// function toFillTextarea() {
//     constsavedMessag = localStorage.getItem("feedback-form-state");
// if (constsavedMessag) { reft.textarea.value = constsavedMessag;
//      }
// }

const reft={
form: document.querySelector('.feedback-form'),
}

const STORAGE_KEY="feedback-form-state";
reft.form.addEventListener('input',throttle(onFormInput,500));
loadPage()

 

function onFormInput(e) {
 
const{name,value }=e.target;
   
    let savedData = storageApi.load(STORAGE_KEY);
    savedData = savedData ? savedData : {};
    savedData[name] = value; 
  storageApi.save(STORAGE_KEY,savedData) 
};
    function loadPage() {
    const savedData = storageApi.load(STORAGE_KEY);
 
    if (savedData) {
       Object.entries(savedData).forEach(([name,value]) => {
           reft.form.elements[name].value = value;
       });
    }
};


reft.form.addEventListener('submit', onFormSabmit);

function onFormSabmit(e) {
   e.preventDefault();
  const {
    elements: {email,message}
  } = e.currentTarget;
  

  if (email.value === "" || message.value === "") {
    return console.log("Please fill in all the fields!");
  }
    const formData = {
        name: email.value,
        message:message.value
    }
    console.log(formData);
    storageApi.remove(STORAGE_KEY)
  e.currentTarget.reset();
}
