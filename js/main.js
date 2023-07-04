let fname = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submit = document.getElementById("submit-button");
let checksum = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", formValidation);

function formValidation(event) {
    event.preventDefault();
    let formData = {};
    let err = [];
    if (fname.value != "") {
        formData.fullname = fname.value;
    }
    else {
        err.push({ en: "Please enter full name" });
    }
    if (email.value != "") {
        if (checksum.test(email.value) === true) {
            formData.email = email.value;
        }
        else {
            err.push({ we: "Please enter a valid email." });
        }
    }
    else {
        err.push({ ne: "Please enter an email." });
    }
    if (message.value != "") {
        formData.message = message.value;
    }
    else {
        err.push({ em: "Please enter your message" });
    }
    if (err.length != 0) {
        console.log("Errors", err);
    }
    else {
        console.log("Form Data", formData);
        fname.value = "";
        email.value = "";
        message.value = "";
    }
} 
