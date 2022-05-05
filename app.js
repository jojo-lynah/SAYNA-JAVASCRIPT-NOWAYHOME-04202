// button1 et le boucle 
var btn = document.querySelectorAll('.button1');
for(let i = 0; i< btn.length;i++){
    btn[i].addEventListener('mouseover',myBort);
function myBort(){
    btn[i].style.color= "var(--white-ad-color)";
    btn[i].style.backgroundColor= "var(--primary-ad-color)";
    btn[i].style.boxShadow = "5px 5px 5px white";
    btn[i].style.fontWeith = "500"
 }
    btn[i].addEventListener('mouseout',myFort);
function myFort(){
    btn[i].style.backgroundColor = "var(--white-ad-color)";
    btn[i].style.color = "var(--primary-ad-color)";
    btn[i].style.boxShadow = "0 0 0 0";
    btn[i].style.fontWeith = "100"
 }
}

// button2
var button = document.querySelector('.button2');
    button .addEventListener('mouseover',hover);
function hover(){
    button.style.color= "var(--primary-ad-color)";
    button.style.backgroundColor= "var(--white-ad-color)";
    button.style.boxShadow = "5px 5px 5px grey";
    button.style.fontWeith = "600"
}
   button.addEventListener('mouseout',unhoverout);
function unhoverout(){
    button.style.backgroundColor = "";
    button.style.color = "var(--white-ad-color)";
    button.style.boxShadow = "0 0 0 0";
    button.style.fontWeith = "500"
}



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

// zoom
let spiderman = document.getElementsByClassName('card-img-top');
for(let i = 0; i< spiderman.length;i++){
let image = spiderman[i];
image.addEventListener("mouseover",function(){
    image.style.transform = "scale(1.1) "
});
image.addEventListener("mouseout",function(){
    image.style.transform  ="scale(1) "
    });
}
// formulaire
document.getElementById("good").addEventListener("submit",function(py){
    py.preventDefault();
    let erreur;
    let name = document.getElementById("name");
    let firstname = document.getElementById("firstname");
    let taille = document.getElementById("taille");
    let poid = document.getElementById("poid");
    let email = document.getElementById("email");
    if(!email.value){
        erreur = "veuiller renseigner votre email";
    }
    if(!poids.value){
        erreur = "veuiller renseigner votre poids";
    }
    if(!taille.value){
        erreur = "veuiller renseigner votre taille";
    }
    if(!firstname.value){
        erreur = "veuiller renseigner votre firstname";
    }
    if(!name.value){
        erreur = "veuiller renseigner votre name";
    }
    if(erreur){
       py.preventDefault();
       document.getElementById("erreur").innerHTML = erreur;
       return false;
    }else{
        document.querySelector(".modale").style.display = 'block';
    }
})
var input = document.querySelectorAll('.form-button');
for(let i = 0; i< input.length;i++){
    function myinput(){
    input[i].style.color= "var(--white-ad-color)";
    input[i].style.backgroundColor= "var(--primary-ad-color)";
    input[i].style.boxShadow = "5px 5px 5px white";
    input[i].style.fontWeith = "500"
 }
    input[i].addEventListener('mouseover',myinput);
    input[i].addEventListener('mouseout',mygod);

function mygod(){
    input[i].style.backgroundColor = "";
    input[i].style.color = "var(--primary-ad-color)";
    input[i].style.boxShadow = "0 0 0 0";
    input[i].style.fontWeith = "100"
 }
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