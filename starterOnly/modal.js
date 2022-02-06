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
const closeBtn = document.getElementsByClassName('close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


let form = document.getElementById("inscription");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let checkbox = document.getElementById("formTournament")
  let modalForm = document.getElementById ("modalForm");
  let modalConfirm = document.getElementById ("modalConfirm");
  if ( validFirst() == true && validLast() == true && validEmail() == true && validBirthdate() == true && validTournament() == true ){
      modalForm.style.display = "none";
      modalConfirm.style.display = "block";
    }
  else{
    first.parentElement.setAttribute('data-error-visible', 'true');
    last.parentElement.setAttribute('data-error-visible', 'true');
    email.parentElement.setAttribute('data-error-visible', 'true');
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    checkbox.setAttribute('data-error-visible', 'true');
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
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
 }

//Nom//
 function validLast() {
  const nameRegExp = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
  let inputlast = document.getElementById("last");
  if (nameRegExp.test(inputlast.value)){
    last.parentElement.setAttribute('data-error-visible', 'false')
    return true;
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
 };

 //Date de naissance//
 function validBirthdate(){
  let inputbirthdate = document.getElementById("birthdate");
  if (inputbirthdate.value){
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    return true; }
 }

 //Tournois//
 function validTournament(){
  const Tournament = document.querySelector('input[type="radio"]:checked');
  console.log (Tournament);
    if (Tournament){
      return true;
    }
}


 
 //Condition//
 function checkMe() {
   let inputCondition =document.getElementById("checkbox1");
   if (inputCondition.checked == true){
     checkbox1.parentElement.setAttribute('data-error-visible', 'false')
     return true;
   }
 };

  