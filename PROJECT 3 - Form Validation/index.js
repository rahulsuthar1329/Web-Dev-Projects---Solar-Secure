var username = document.getElementById("name")
var email = document.getElementById("email")
var contact = document.getElementById("contact")
var country = document.getElementById("country-code")
var password = document.getElementById("password")
var cnfpassword = document.getElementById("cnfpassword")
var address = document.getElementById("address")
var submit = document.getElementById("submit")

function validate(){
    if(username.value == "" || email.value == "" || contact.value=="" || password.value=="" || cnfpassword.value==""){
        alert("Please fill all the values.")
        return false;
    }
    // Dealing with username
    if(!username.value.match(/\w* \w*/) || username.value.length>20){
        alert("1. Name Length <= 20\n2. Name Pattern : FirstName LastName")
        return false;
    }
    // Dealing with email address
    if(!email.value.match(/^[a-zA-Z]*[0-9]*@gmail.com$/) || email.value.length>25){
        alert("1. Email.lenght <= 25\n2. Email Pattern: example123@gmail.com")
        return false;
    }
    // Dealing with contact no.
    if(!contact.value.match(/^[6789][0-9]{9}$/)){
        alert("Invalid Phone No.")
        return false;
    }
    // Dealing with password
    if(!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)){
        alert("Password should have Minimum (8) characters, Maximum (16) characters, At least one uppercase letter, At least one lowercase letter, At least one number, At least one special character.")
        return false;
    }
    // Dealing with Confirm Password
    if(cnfpassword.value != password.value){
        alert("Password Confirmation does not match.")
        return false;
    }
    return true;
    // string.match(/[a-zA-Z]{5}[0-9]{3}/)
}

// Password : Password@123