function generateRandomNumber()
{
   let numbers = []

    for(let i = 0;i <= 9;i++)
    {
        for(let j = 0;j <= 9;j++)
        {

            for(let k = 0;k <= 9;k++)
            {

               for(let l = 0;l <= 9;l++)
               {
                   for(let m = 0;m <= 9;m++)
                   {
                       let n = [i,j,k,l,m];

                       let s = new Set(n);

                       if(s.size == 5)
                       {
                            numbers.push(""+i+j+k+l+m);
                       }

                   }
               }
            }
        }
    }

    let div = document.getElementById("output");
    div.innerHTML = "<h1>Random Number generated = "+numbers[Math.floor(Math.random() * numbers.length)]+"<\h1>"


    return false;
}