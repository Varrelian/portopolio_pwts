const form = document.getElementById( 'contact-form ' ) ;
const nameinput = form.name;
const emailinput = form.email;
const messageinput = form.message;
const successmsg = document.getElementById( ' success-message' ) ;

const nameError = document .getElementById( 'name-error' );
const emailError = document.getE1ementById( 'email-error' ) ;
const messageError =document.getElementById( 'message-error' ) ;

function validateName(email) {
// simple regex for email validasi
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
form.addEventListener( 'submit', function (e) {
    e. preventDefau1t( ) ;

    // resset eror
    nameError. textContent = '' ;
    emailError.textContent ='';
    messageError.textContent = '';
    successmsg.textContent ='' ;
    
    let valid = true;
    if (namelnput.value.trim() === '') {
        nameError. textContent = 'Please enter your name. ' ;
        valid = false;
    }
    if (!va1idateEmai1(emai11nput.va1ue.trim())) {
        emailError.textContent = 'Please enter a valid email address. ' ;
        valid = false;
    }
    if (messagelnput.value.trim() === '') {
        messageError .textContent = 'Please enter your message. ' ;
        valid = false;
    }
    if (valid) {
        successmsg.textContent = 'makasih bettt atas pesan yg sudah anda kirim' ;
        form.reset( ) ;
    }
}) ;







