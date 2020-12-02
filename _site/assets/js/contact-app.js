// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJdatPE8t1ZusE7wRc8Te-WADK9WE1ePA",
    authDomain: "airbee-website.firebaseapp.com",
    databaseURL: "https://airbee-website.firebaseio.com",
    projectId: "airbee-website",
    storageBucket: "airbee-website.appspot.com",
    messagingSenderId: "733844281719",
    appId: "1:733844281719:web:5c35982e2eb2f53dc3a972",
    measurementId: "G-M93SYN8Z0Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Daten im sessionStorage speichern
sessionStorage.setItem('firebaseInitialized', 'true');

// Get a reference to the database service
var database = firebase.database();

// Get a reference to analytics;
var analytics = firebase.analytics();

async function writeContactRequest(data) {
    let jsonObject = {};

    for (const [key, value]  of data.entries()) {
        jsonObject[key] = value;
    }

    analytics.logEvent('generate_lead', 50000.00, "EUR");

    return firebase.database().ref().child('contactRequests').push(jsonObject, function(error){
        if (error) {
         console.error(error);
         return false;
        }else{
            return true;
        }
    });
}


let consent = false;
const submitButton = document.getElementById("submit__button");
const consentCheckBox = document.getElementById("checkbox__consent");
const contactForm = document.getElementById('contact__form');

consentCheckBox.addEventListener('change', (event) => {
    
});

submitButton.addEventListener('click', (event) => {
    if(consent) {
        if(validateForm()){
            submitForm();
        }else{
            return;
        }
    }
});

contactForm.addEventListener('change', e => {
    validateForm();
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwCt2mxgs5LMsibKDeQ0NC27JkCINXw-ltMyBCf7mqdmavESrYN/exec';

async function submitForm(){
    var form_data = new FormData(contactForm);
    if(writeContactRequest(form_data)){
        //clear the form
        contactForm.reset();
        //redirect to success page
        window.open('./contact-success.html', "_self");
    }else{
        //display warning text
        const submitButtonLabel = document.getElementById("label_submit__button");
        submitButtonLabel.hidden = false;
    }
}

async function handleForm(event) { event.preventDefault(); } 
contactForm.addEventListener('submit', handleForm);
    

const nameLabel = document.getElementById("label_text__full__name");
const emailLabel = document.getElementById("label_email__address");
const messageLabel = document.getElementById("label_textarea__message");
async function validateForm() {
    var returnVal = false;
    var x = document.forms['contact_form']['text_full_name'].value;
    if (x == "") {
        nameLabel.hidden = false;
        returnVal = false;
    }else{
        nameLabel.hidden = true;
        returnVal = true;
    }
    var x = document.forms['contact_form']['email_address'].value;
    if (x == "") {
        emailLabel.hidden = false;
        returnVal = false;
    }else{
        emailLabel.hidden = true;
    }
    var x = document.forms['contact_form']['textarea_message'].value;
    if (x == "") {
        messageLabel.hidden = false;
        returnVal = false;
    }else{
        messageLabel.hidden = true;
    }

    if(returnVal && consentCheckBox.checked == true){
        submitButton.disabled = false;
    }else{
        submitButton.disabled = true;
    }

    if (consentCheckBox.checked) {
        consent = true;
    } else {
        consent = false;
    }

    return returnVal;
}




