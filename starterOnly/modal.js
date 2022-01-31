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

closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))

let form = document.getElementById("inscription");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  validFirst();
  validLast();
  validEmail();
  validBirthdate();
  validTournament();

});


//Prénom//
 function validFirst(){
  const nameRegExp = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
  let inputfirst = document.getElementById("first");
  if (nameRegExp.test(inputfirst.value)){
    first.parentElement.setAttribute('data-error-visible', 'false')
    return true;
  }
  else{
    first.parentElement.setAttribute('data-error-visible', 'true');
    return false;
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
  else{
    last.parentElement.setAttribute('data-error-visible', 'true');
    return false;
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
  else{
    email.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
 };

 //Date de naissance//
 function validBirthdate(){
  let inputbirthdate = document.getElementById("birthdate");
  if (inputbirthdate.value){
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    return true; }
  else{
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
 }

 //Tournois//
 function validTournament(){
  let checkbox = document.getElementsByClassName("check-box")
  const Tournament = document.querySelector('input[name="location"]:checked');
    if (Tournament.checked){
      return true;
    }
    else{
      checkbox.parentElement.setAttribute('data-error-visible', 'true');
      return false;
    }
}


 
 //Condition//
 function checkMe() {
   let inputCondition =document.getElementById("checkbox1");
   if (inputCondition.checked == true){
     checkbox1.parentElement.setAttribute('data-error-visible', 'false')
     return true;
   }
   else{
     checkbox1.parentElement.setAttribute('data-error-visible', 'true');
     return false;
   }
 };