<html>
<head>
<title>Sign Up</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script>
var myjsonObj ='[{"firstname":"Aastha","lastname":"Agrawal"},{"firstname":"Vinayak","lastname":"Vishwakarma"}]';
var jsObj = JSON.parse(myjsonObj);
console.log(jsObj[1].firstname);
console.log(jsObj[1].lastname);

function onRegisterPressed(){

var firstName = document.getElementById("firstname").value;
var lastName = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var repeatPassword = document.getElementById("repeatpassword").value;

var table = document.getElementById("regtable");
var.row=table.insertRow();
var firstNameCell =row.insertCell(0);
var lastNameCell=row.insertCell(1);
var email=row.insertCell(2);
var password=row.insertCell(3);
var repeatPassword=row.insertCell(4);



//clearfields
document.getElementById("firstname").value="";
document.getElementById("lastname").value="";
document.getElementById("email").value="";
document.getElementById("password").value="";
document.getElementById("repeatpassword").value="";


}
</script>

</head>
<body>

<div>

<fieldset>
<label for="firstname"><span>First Name</span></label>
<input type="text" placeholder"enter first name" id="firstname">
</fieldset>

<fieldset>
<label for="lastname">Last Name</label>
<input type="text" placeholder"enter first name" id="lastname">
</fieldset>

<fieldset>
<label for="email">Email</label>
<input type="text" placeholder"enter first name" id="email">
</fieldset>


<fieldset>
<label for="password">Password</label>
<input type="text" placeholder"enter first name" id="password">
</fieldset>


<fieldset>
<label for="repeatpassword">Repeat Password</label>
<input type="text" placeholder"enter first name" id="repeatpassword">
</fieldset>

<fieldset>
<label for="submit">&nbsp;</label>
<button id="submit" onclick="onRegisterPressed()">Register</button>
</fieldset>
</div>
</body>
</html>











