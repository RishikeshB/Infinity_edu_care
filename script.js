let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}

var isValid=true;
var name = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message');
var errName = document.getElementById('nameError');
var errEmail = document.getElementById('emailError');
var errSubject = document.getElementById('subjectError');
var errMsg = document.getElementById('messageError');
var formElement = document.querySelector('form');
formElement.addEventListener('submit',event=>{
  console.log(event);
  isValid = true;
  if(name.value.length == 0) {
    errName.style.display='block';
    isValid = false;
  }
  if(email.value.length == 0) {
    errEmail.style.display='block';
    isValid = false
  }
  if(subject.value.length == 0) {
    errSubject.style.display='block';
    isValid = false
  }
  if(message.value.length == 0) {
    errMsg.style.display='block';
    isValid = false;
  }
  if(!isValid) {
    event.preventDefault();
  }
})


