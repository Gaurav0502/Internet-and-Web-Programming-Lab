function compare()
{
 let n1 = parseInt(prompt("Enter the first number"))
 let n2 = parseInt(prompt("Enter the second number"))

 if(n1 == 200 || n2 == 200 || n1 + n2 == 200)
 {
     return true;
 } 
 else
 {
     return false;
 }
}

let b = compare()
let div = document.getElementById("output")
div.innerHTML="<h1>Sum = "+b+"</h1>"