import {
    log_in
} from './firestore.js'

const log_in_form = document.getElementById("log_in_form");
const log_in_username = document.getElementById("log_in_username");
const log_in_password = document.getElementById("log_in_password");
const log_in_id = document.getElementById("log_in_id");
const go_to_home_button = document.getElementById("go_to_home_button");

log_in_form.addEventListener("submit", (event) => {
    event.preventDefault();
    log_in(log_in_username.value, log_in_password.value, log_in_id.value).then((result) => {
        console.log(result);
        go_to_home_button.style.display = 'block';
        go_to_home_button.classList.remove("invisible");
        go_to_home_button.classList.add("normalButton");
        go_to_home_button.style.color = 'green';
    });
  });
