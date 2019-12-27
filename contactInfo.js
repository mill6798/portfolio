/*
  Name: Nick Miller
  Date Created:12/24/2019
  Last Edited:12/27/2019
*/

function checkInfo () {
  var theirName = document.getElementById("name"),
    theirEmail = document.getElementById("email"),
    theirPhone = document.getElementById("phone"),
    reasoning = document.getElementById("additional"),
    info = document.getElementById("info");

  var message = "";

  if (!(theirName.value && theirEmail.value && theirPhone.value)) {
    if(!theirName.value) message+="\u25B6 Make sure you enter your name\n\n"
    else message+="\u25B6 Make sure you have entered your phone and email to contact you\n\n";
  }

  if (reasoning.value == "other" && !info.value) {
    message+="\u25B6 (Other) It is very helpful if explain your reason for inquiring in the Additional Information section\n\n";
  }

  var contactDays = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (contactDays < 1) {
    message+="\u25B6 Can you select at least one day that is convenient to contact you?\n\n";
  }

  if (message) {
    alert(message);
    return false;
  }
  else{
  alert("Thank you for your submission!  We have recieved it, and will be in contact as soon as possible!")
  }
}
