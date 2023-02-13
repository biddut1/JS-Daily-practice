console.log(2 + 2);
const ProductName='Potato';
const ProductPrice=30;
console.log('ProductName ' + ProductName +'ProductPrice- ' + ProductPrice + 'quantity '+ 2 +'avaiable '+ true)
//this is for single commment
console.log(`ProductName-${ProductName} Price-${ProductPrice}`)
console.log(2 + 2);
/* multiple line
comment*/ 
console.log(3 + 2);
const PronductInfo=['potato', 30, 3, true];
console.log(PronductInfo[3]);
console.log(PronductInfo[2]);
console.log(PronductInfo[0]);
console.log(`ProductName-${ProductName} Price-${PronductInfo[1]}`)

for (let i = 0; i < 9; i++){
    console.log(i);
}
const text='I Love You'
for(let i=0; i<text.length;i++){
    console.log(text[i])
}
//29/01/2022 new lesson
/*function myFunction(){
    alert("hi");
}*/
window.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
  });