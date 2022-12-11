// console.log("hello");
// https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bc1210a9b7ba44b78bd0e89ca7a8d43a

//My news api key--> 05c82e15f8a244f5b0871d91f612bf88  from newsapi site.

//My second news api key--> bc1210a9b7ba44b78bd0e89ca7a8d43a from newsapi site.

let news = document.getElementById('newchannel');
let response = false;
// console.log(news);

//for default news 
let j;
const xhr1=new XMLHttpRequest();
xhr1.open('GET','https://newsapi.org/v2/everything?sources=bbc-news&apiKey=05c82e15f8a244f5b0871d91f612bf88',true);
xhr1.onload=function(){
  let rt=JSON.parse(this.responseText);
j=rt.articles;
for (const key in j) {

  if (key <= 50 && key >= 1) {
    newsbox.innerHTML += `<div class="card" id="box${key}">
    <img src="${j[key].urlToImage}" class="card-img-top" alt="...">
    <div >
    <h5 >Headline ${key}</h5>
    <p >${j[key].title}</p>
    <a href="${j[key].url}" class="btn btn-primary direction" target="_blank">Read More</a>
    </div>
    </div>`;

  }
}

// console.log(arti);

}
xhr1.send();

//news card 

{/* <div class="card" style="width: 18rem; height: 20rem;">
<img src="https://ichef.bbci.co.uk/news/1024/branded_news/13FD2/production/_127047818_busstation2.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Headline</h5>
  <p class="card-text">Tales of bloody Iran protest crackdown at border crossing</p>
  <a href="http://www.bbc.co.uk/new…rld-middle-east-63218963" class="btn btn-primary">Read More</a>
</div>
</div> */}



//this function uses is from which channel user want news. after triggered eventlisetner user will get news from which channel he wrote in search area

news.addEventListener('submit', function toggle(e) {
  e.preventDefault();
  console.log("submitted");
  let btn = document.getElementById('source');
  let newsbox = document.getElementById('newsbox');
  let source1 = btn.value;


  const xhr = new XMLHttpRequest();
  console.log(source1);
  xhr.open('GET', `https://newsapi.org/v2/everything?sources=${source1}&apiKey=bc1210a9b7ba44b78bd0e89ca7a8d43a`, false);
  xhr.onprogress = function () {
    console.log(1);
  }
  xhr.onload = function () {
    let Er = JSON.parse(this.responseText);

    j = Er.articles;
    newsbox.innerHTML = " ";
    for (const key in j) {

      if (key <= 50 && key >= 1) {
        newsbox.innerHTML += `<div class="card" id="box${key}" >
        <img src="${j[key].urlToImage}" class="card-img-top" alt="...">
        <div >
        <h5 >Headline ${key}</h5>
        <p >${j[key].title}</p>
        <a href="${j[key].url}" class="btn btn-primary" target="_blank">Read More</a>
        </div>
        </div>`;

      }
    }
   
    btn.value = " ";
    response = true;
  }


  xhr.send();

});

//when somone write text in search box he will get instant preview what he want without click on button 

let inputtext = document.getElementById('inputtext');
inputtext.addEventListener('input', function try1(e) {
  



  toggle1(e);


});


//when somone click on search button for find particular word 

let form = document.getElementById('form');
form.addEventListener('submit', toggle1);
function toggle1(e) {
  // if(!response){
  //   //function for alert if anyone search word before select news channel
    
  //   let alert=document.getElementById('alert');
  //   alert.innerHTML=` <div class="alert alert-danger alert-dismissible fade show" role="alert">
   
  //   <strong>  Error!</strong> You should first select news channel.
  //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  //   </div>
  //   </div> `;
  // setTimeout(() => {
  //   alert.innerHTML=" ";
  // }, 5000);
  
  // }

  inputtext = document.getElementById('inputtext');


  for (const key1 in j) {

    if (key1 >= 1 && key1 <= 50) {

      let boxid = document.getElementById(`box${key1}`);

      if (j[key1].title.indexOf(`${inputtext.value}`) != -1) {

        boxid.style.display = 'block';
      }
      else {
        boxid.style.display = 'none';
      }
    }
  }


  e.preventDefault();
}

// console.log(alert);






