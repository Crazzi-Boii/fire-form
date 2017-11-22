var firestore = firebase.firestore();

const name = document.querySelector('#name');
const email = document.querySelector('#mail');
const pwd = document.querySelector('#password');
const age = document.querySelector('#mail');
const country = document.querySelector('#country');

const docRef = firestore.doc("loop/num");
const docRef1 = firestore.doc("username/"+name);

