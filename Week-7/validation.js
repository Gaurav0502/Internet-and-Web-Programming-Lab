function validate()
{
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let cemail = document.getElementById("cemail").value;
    let title = document.getElementById("title").value;
    let issue = document.getElementById("issue").value;

    console.log(fname);
    let regexName = /^[A-Za-z]+$/;
    let regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let regexTitle = /^[A-Za-z\s-]{5,50}$/;
    let regexIssue = /^[A-Za-z\s-]{10,200}$/;

    if(!fname.match(regexName))
    {
       alert("First Name is invalid");
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
    else if(!cemail.match(regexEmail) && email != cemail)
    {
        alert("Confirm email is invalid or not same as the email entered previously");
        return false;
    }
    else if(!title.match(regexTitle))
    {
        alert("Title must have only alphabets and must have length of maximum 50 and minimum 5");
        return false;
    }
    else if(!issue.match(regexIssue))
    {
        alert("Issue must have only alphabets and must have length of maximum 200 and minimum 10");
        return false;
    }
    return true;
}