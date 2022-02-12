function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const closeThanks = document.querySelector (".btn-close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}
// close modal form

closeBtn.addEventListener("click", closeModal)
closeThanks.addEventListener("click", closeModal)

function closeModal() {
  modalbg.style.display ="none";
  document.querySelector(".formModal").reset();
}
const closeConfirmationBtn = document.getElementById("closeConfirm")
closeConfirmationBtn.addEventListener("click", function() {modalbg.style.display ="none";})

const closebtn = document.querySelector(".close")
closebtn.addEventListener("click", function() {modalbg.style.display ="none";})


let form = document.getElementById("inscription");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let modalForm = document.getElementById ("modalForm");
  let modalConfirm = document.getElementById ("modalConfirm");
  if ( validFirst() == true && validLast() == true && validEmail() == true && validBirthdate() == true && validNumberTournament() == true && validTournament() == true && checkMe()== true){
      modalForm.style.display = "none";
      modalConfirm.style.display = "block";
    }
  else{
    return false;
  }
});

function validform (){

}

//Prénom//
 function validFirst(){
  const nameRegExp = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
  let inputfirst = document.getElementById("first");
  if (nameRegExp.test(inputfirst.value)){
    first.parentElement.setAttribute('data-error-visible', 'false')
    return true;
  }
  else {
    first.parentElement.setAttribute('data-error-visible', 'true');
  }
 }

//Nom//
 function validLast() {
  const nameRegExp = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
  let inputlast = document.getElementById("last");
  if (nameRegExp.test(inputlast.value)){
    last.parentElement.setAttribute('data-error-visible', 'false')
    return true;
  }
  else {
    last.parentElement.setAttribute('data-error-visible', 'true');
  }
 };

 //Email//
 function validEmail() {
  const emailRegExp = /^[a-zA-A0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  let inputemail = document.getElementById("email");
  if (emailRegExp.test(inputemail.value)){
    email.parentElement.setAttribute('data-error-visible', 'false')
    return true;
  }
  else {
    email.parentElement.setAttribute('data-error-visible', 'true');
  }
 };

 //Date de naissance//
 function validBirthdate(){
  let inputbirthdate = document.getElementById("birthdate");
  if (inputbirthdate.value){
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    return true; 
  }
  else {
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
  }
}
//Tournois nombre//
function validNumberTournament(){
  let inputNumberTournament = document.getElementById("quantity");
  if (inputNumberTournament.value){
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  }
  else{
    quantity.parentElement.setAttribute('data-error-visible', 'true');
  }
}
 //Tournois localisation//
 function validTournament(){
  let checkbox = document.getElementById("formTournament")
  const Tournament = document.querySelector('input[type="radio"]:checked');
    if (Tournament){
      checkbox.setAttribute('data-error-visible', 'false');
      return true;
    }
    else {
      checkbox.setAttribute('data-error-visible', 'true');
    }
} 
 //Condition//
 function checkMe() {
   let inputCondition =document.getElementById("checkbox1");
   if (inputCondition.checked == true){
     checkbox1.parentElement.setAttribute('data-error-visible', 'false')
     return true;
   }
   else {
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
  }
 };

  