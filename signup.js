import {
    sign_up
} from './firestore.js'

const sign_up_form = document.getElementById("sign_up_form");
const sign_up_username = document.getElementById("sign_up_username");
const sign_up_password = document.getElementById("sign_up_password");
const sign_up_email = document.getElementById("sign_up_email");

sign_up_form.addEventListener("submit", (event) => {
    event.preventDefault();
    sign_up(sign_up_username.value, sign_up_password.value, sign_up_email.value);
  });