function validate()
{
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let mobno = document.getElementById("mobno").value;
    let pin = document.getElementById("pincode").value;

    console.log(fname);
    let regexName = /^[A-Za-z]+$/;
    let regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let regexMob = /^[6-9]\d{9}$/gi;
    let regexPin = /^[1-9]{1}\d{5}$/;

    if(!fname.match(regexName))
    {
       alert("First Name is invalid");
       return false;
    }
    else if(!mname.match(regexName))
    {
       alert("Middle Name is invalid");
       return false;
    }
    else if(!lname.match(regexName))
    {
       alert("Last Name is invalid");
       return false;
    }
    else if(!email.match(regexEmail))
    {
        alert("Email is invalid");
        return false;
    }
    else if(!mobno.match(regexMob))
    {
        alert("Mobile number is invalid");
        return false;
    }
    else if(!pin.match(regexPin))
    {
        alert("Pincode is invalid");
        return false;
    }
    return true;
}