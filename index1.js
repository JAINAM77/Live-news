console.log("experiment");
let try1=window.innerWidth;
// scrollBy(0,100);
console.log(try1);
let btn=document.getElementById('btn');
btn.addEventListener('click',movein,true);
function movein(e){
    console.log("clicked");
    console.log(e);
    e.preventDefault();
   
    // myWindow=window.open("https://www.google.com/"," ","width=100 height=100");
}

function move(){
    
    alert('click double');

}
let myp=document.getElementById('myp');
myp.addEventListener('click',movein,true);
let k=document.getElementById('k');
k.addEventListener('click',move,true);
// function person(){
//     this.name="jainam",
//     this.age=23
// }
// person.prototype.gender='Male';
// person.prototype.gender1=function (){
// console.log("hello");
// }
// const person1=new person();
// person1.gender1()
// setInterval(() => {
    
//     console.log(scrollY,scrollX);
// }, 2000);

