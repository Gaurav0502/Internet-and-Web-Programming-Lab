let s = 0;
let n = prompt("Enter no.of numbers :")
for(let i = 0;i < n;i++)
{
    s += parseInt(prompt("Enter a number :"));
}

let div = document.getElementById("output")
console.log(s);
div.innerHTML="<h1>Sum = "+s+"</h1>"