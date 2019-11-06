console.log('connected');
var mainDiv = document.getElementById('mainDiv');

console.log(mainDiv);
console.log(mainDiv.innerText);

mainDiv.innerText +="!!!";

console.log(mainDiv);

var secDiv =document.getElementsByClassName('secDiv');

console.log(secDiv[0]);
console.log(secDiv.length);

var h1Tag =document.getElementsByTagName('h1');

console.log(h1Tag.innerText);
console.clear();

var nameOfId =document.querySelector("#mainDiv")
console.log(nameOfId);

var nameOfClass =document.querySelector(".secDiv")
console.log(nameOfClass);

var nameOfClassAll =document.querySelectorAll(".secDiv")
console.log(nameOfClassAll);

console.clear();

var c =document.createElement('p');
c.innerText = "test paragraph"
console.log(c);
//document.body.append(c);
nameOfId.appendChild(c);
c.innerText +="js";


var click =document.querySelector('button');

// console.log(click);

click.addEventListener("mouseout",function(){
    console.log('vvvv')})



    click.onclick(console.log('click'));
$('.secDiv');
