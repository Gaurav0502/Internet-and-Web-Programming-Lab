function validate()
{
    let email = document.getElementById("email").value;
    let cemail = document.getElementById("cemail").value;
    let zip = document.getElementById("zipcode").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;

    console.log(email);
    let regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if(!email.match(regexEmail))
    {
        alert("Email is invalid");
        document.getElementById("emaillab").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("erremail").innerText = "Please use a valid email address";
        document.getElementById("invemail").hidden = false;
    }
    if(email != cemail)
    {
        document.getElementById("cemaillab").style.color = "red";
        document.getElementById("cemail").style.borderColor = "red";
        document.getElementById("err").innerText = "Please use a valid email address";
        document.getElementById("invcemail").hidden = false;
    }
    if(zipcode.length != 5)
    {
        document.getElementById("ziplab").style.color = "red";
        document.getElementById("zipcode").style.borderColor = "red";
        document.getElementById("errzip").innerText = "Please use a valid Zip Code";
        document.getElementById("invzip").hidden = false;
    }
    if(password.length < 6 || password.length > 16)
    {
        document.getElementById("passlab").style.color = "red";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("errpass").innerText = "Your password must be between 6-16 characters long.";
        document.getElementById("invpass").hidden = false;
    }
    if(cpassword.length < 6 && cpassword.length > 16 ||cpassword != password)
    {
        document.getElementById("cpasslab").style.color = "red";
        document.getElementById("cpassword").style.borderColor = "red";
        document.getElementById("errcpass").innerText = "This does not match the password entered above.";
        document.getElementById("invcpass").hidden = false;
    }
    return false;
}