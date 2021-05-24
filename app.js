function button() {
  var send = 'LOG IN';
  var info = 'Please Click OK to display input value';
  var final = (send + '\n' + info)
  alert (final)

  var emailInput = document.getElementById("email").value;
  var clickOk = '\nClick OK for the next output';
  alert('Email: ' + emailInput + clickOk);

  var pwd = document.getElementById("password").value;
  alert('Password: ' + pwd);
}

function Register() {
  alert ("Don't have an account? Register")
}

function forgot() {
  alert ("Forgot Password")
}

function submit() {

}

function getInputValue(){
  // Selecting the input element and get its value 
  var emailInput = document.getElementById("email").value;
  
  // Displaying the value
  alert(emailInput);
}