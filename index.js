//  faire une surligne
let myMenu = document.querySelectorAll(' ul li a');

for (let i=0; i < myMenu.length; i++) {
let li = myMenu[i];

    li.addEventListener('mouseover', function () {
       li.style.textDecoration='line-through';
     });
  li.addEventListener('mouseout', function () {
   li.style.textDecoration='none';
    
 });
}

// effet dans le footer
var myFooter = document.querySelectorAll('.footer-icones');
for(let i = 0; i< myFooter.length;i++){
    myFooter[i].addEventListener('mouseover',mycas);
function mycas(){
    myFooter[i].style.color= "var(--white-ad-color)";
 }
    myFooter[i].addEventListener('mouseout',mycase);
function mycase(){
    myFooter[i].style.color = "";
 }
}