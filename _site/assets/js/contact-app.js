let consent = false;
const submitButton = document.getElementById("submit__button");
const consentCheckBox = document.getElementById("checkbox__consent");
const contactForm = document.getElementById('contact__form');

const nameLabel = document.getElementById("label_text__full__name");
const emailLabel = document.getElementById("label_email__address");
const messageLabel = document.getElementById("label_textarea__message");
const submitButtonLabel = document.getElementById("label_textarea__message");

consentCheckBox.addEventListener('change', (event) => {
    if(consent) {
        consent = false;
    }else{
        consent = true;
    }
});

submitButton.addEventListener('click', (event) => {
    if(consent) {
        if(validateForm()){

            contactForm.submit();
            contactForm.onsubmit();
            
            setTimeout(()=>{
                //clear the form
                contactForm.reset();
                //redirect to success page
                window.open('./contact-redirect.html', "_self");
              },100);
            
        }else{
            //display warning text
            submitButtonLabel.hidden = false;
        }
    }
});

contactForm.addEventListener('change', e => {
    validateForm();
});

async function handleForm(event) { event.preventDefault(); } 
contactForm.addEventListener('submit', handleForm);
contactForm.addEventListener('onsubmit', handleForm);



async function validateForm() {
    var returnVal = false;
    var x = document.forms['contact_form']['entry.607849263'].value;
    if (x == "") {
        nameLabel.hidden = false;
        returnVal = false;
    }else{
        nameLabel.hidden = true;
        returnVal = true;
    }
    var x = document.forms['contact_form']['entry.1234351144'].value;
    if (x == "") {
        emailLabel.hidden = false;
        returnVal = false;
    }else{
        emailLabel.hidden = true;
    }
    var x = document.forms['contact_form']['entry.1999305853'].value;
    if (x == "") {
        messageLabel.hidden = false;
        returnVal = false;
    }else{
        messageLabel.hidden = true;
    }

    if(returnVal && consentCheckBox.checked == true){
        submitButton.disabled = false;
        submitButtonLabel.hidden = true;
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
