// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authAIzaSyCOkoZS9ik2pynFtQg_5jgNRZONWSGkna0Domain: "recipe-website-users.firebaseapp.com",
  projectId: "recipe-website-users",
  storageBucket: "recipe-website-users.appspot.com",
  messagingSenderId: "390026302415",
  appId: "1:390026302415:web:b05b727c396124b83078ba",
  measurementId: "G-54WTSZDLVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
var user_list = [];


async function getUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  var get_users = [];
  querySnapshot.forEach((doc) => {
    get_users.push(doc.data())
  });
  // console.log(get_users, '<--- Inside Function');
  return get_users;
}
;
getUsers().then((result) => { console.log(result) })

user_list = getUsers().then((result) => { user_list = result });
setInterval(function () {
  user_list = getUsers().then((result) => { user_list = result });
}, 500);

async function changePassword(new_password, id) {
  user_list = await getUsers();
  setDoc(doc(collection(db, 'users'), String(id)), {
    'email': user_list[id]['email'],
    'id': id,
    'name': user_list[id]['name'],
    'password': new_password
  })
  console.log(await getUsers());
}

async function addUser(email, name, password) {
  user_list = await getUsers();
  let id;
  id = user_list.length;
  setDoc(doc(collection(db, 'users'), String(id)), {
    'email': email,
    'id': id,
    'name': name,
    'password': password
  })
  user_list = await getUsers();
  console.log(user_list);
  return id;
}




// addUser("ohoohohohoho129589.gmail.com","lemonadekoolaid123","deeba@o0");

export async function log_in(username,password, id){
  console.log(username, password, id);
  user_list = await getUsers();
  if (user_list[id]['name'] == username && user_list[id]['password'] == password) {
    console.log("You're in!");
    return true;
} else{
    console.log("Try again!");
    return false;
  }
}

export function sign_up(username,password, email){
  console.log(username, password, email);
  addUser(email, username, password).then((result) => { console.log(result) });
}
