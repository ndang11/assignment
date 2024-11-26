// write a programme to print even numbers from 1 to 20

for(let i=1 ; i<=20 ;i++)
{
  if(i%2==0)
  {
    document.write(i+"<br>");
  }
}

//  calculating the circumference and area of a circle given its radius
// calculating Area

let AreaofCircle=(r)=>{
  let pie= 3.14159
  return pie*r*r
}

console.log(AreaofCircle(3))
