function checkForm() {
document.getElementById("form2").onload = clearForm();
document.getElementById("fname").onload = textHint();
document.getElementById("fname").onload = getfocus();
document.getElementById("qmark").onload = switchToolTip();

document.getElementById("form2").onsubmit = function() {
var allowsubmit = true;
var defaultText = "Enter a First Name.";
var fnameRegExp = /^[a-zA-Z0-9.'\-_\s]{1,20}$/;
var fname = document.getElementById("fname");
if(fname.value === defaultText || !fnameRegExp.test(fname.value)) {
document.getElementById("errFname").style.display="block";//end of showErrors
allowsubmit = false;
}
var lname = document.getElementById("lname");
var nameRegExp = /^[a-zA-Z0-9.'\-_\s]{1,20}$/;
if(!nameRegExp.test(lname.value)){
showErrors(); //end of showErrors
allowsubmit = false;
}
var authority = document.getElementById("authority");
var authoRegEx = /ZHA[0-9]{6}$/;
if(!authoRegEx.test(authority.value)){
document.getElementById("errAuth").style.display="block";//end of showErrors
allowsubmit = false;
}
var email = document.getElementById('email');
var emailRegEx = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
if(!emailRegEx.test(email.value)){
document.getElementById("errEmail").style.display="block";//end of showErrors
//allowsubmit = false;
}
var phoneNoRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; //http://www.w3resource.com/javascript/form/email-validation.php
var phoneNo = document.getElementById("phone");
if(!phoneNoRegEx.test(phoneNo.value)){
document.getElementById("errPhone").style.display="block";//end of showErrors
allowsubmit = false;
}
if (allowsubmit) {
firstName = document.getElementById("fname").value;
document.getElementById("lname").value;
document.getElementsByName("title").checked;
document.getElementById("authority").value;
document.getElementById("email").value;
document.getElementById("phone").value;
alert("Data OK. Submitting Form");
}
return allowsubmit; // end of lastname
}
} //end of checkForm
function showErrors() {
document.getElementById("errName").style.display="block";
} //end of showError

function textHint() {
 var defaultText = "Enter a First Name.";
 var txtElem = document.getElementById("fname");
 txtElem.value = defaultText;
 txtElem.style.color = "#A8A8A8";
 txtElem.style.fontStyle = "italic";
 txtElem.onfocus = function() {
  if (this.value === defaultText) {
    this.value = "";
    this.style.color = "#000";
    this.style.fontStyle = "normal";
  }
 } //end of hint
 txtElem.onblur = function() {
  if (this.value === "") {
    this.value = defaultText;
    this.style.color = "#A8A8A8";
    this.style.fontStyle = "italic";
  }
 }
} //end of onblur

function switchToolTip() {           
  document.getElementById('qmark').onmouseover = function() {
  var toolTip = document.getElementById('ttip');
  toolTip.style.display='block';
  } 	    
  document.getElementById('qmark').onmouseout = function() {
  var toolTip = document.getElementById('ttip');
  toolTip.style.display='none';
  } 	
}
//end of tooltip
/*
function switchToolTip() { 
	document.getElementById('qmark').onmouseover = function() {
		document.getElementById('ttip').style.display = 'block';
	}
	document.getElementById('qmark').onmouseout = function() {
		document.getElementById('ttip').style.display = 'none';
	}

} //end of tooltip
*/
function clearForm() {
 document.getElementById("fname").value="";
 document.getElementById("lname").value="";
 document.getElementById("authority").value="";
 document.getElementById("email").value="";
 document.getElementById("phone").value="";
}
function getfocus () {
	document.getElementById("fname").focus();
}
window.onload=checkForm;







