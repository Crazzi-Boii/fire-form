var firestore = firebase.firestore();


const age1 = document.querySelector('#age');
const pwd = document.querySelector('#password');
const country = document.querySelector('#country');
const submit = document.querySelector('#submit');


submit.addEventListener("click", function() {
    const name = document.querySelector('#Name');
    /******* */
    const docRef = firestore.doc("loop/num");
    const dr = "usernames/" + name.value;
    console.log(dr);
    const docRef1 = firestore.doc(dr);
    console.log(dr);
    docRef1.set({
        Name: name.value,
        Age: age1.value
    }).then(function(){
        console.log("saved");
    }).catch(function(error){
        console.log("got error ", error);
    });

});