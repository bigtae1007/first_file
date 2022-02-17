let slideImage =  document.querySelectorAll("#slideImage > img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let current = 0;

prev.onclick = prevSlide;
next.onclick = nextSlide;

let autocurrent = 0;
autoSlide();


function changeSlide(n){
  for( let i = 0 ; i < slideImage.length; i++){
    slideImage[i].style.display = "none";
  }
  slideImage[n].style.display = "block";
}

function prevSlide(){
  if(current > 0){
    current -= 1;
  }else{
    current = slideImage.length - 1;
  }
  changeSlide(current);
}

function nextSlide(){
  if(current < slideImage.length - 1){
    current +=1;
  }else{
    current = 0;
  }
  changeSlide(current);
}

function autoSlide(){  
let slideBanner = document.querySelectorAll("#slideBanner > img");
  for(let j = 0 ; j < slideBanner.length ; j ++){
    slideBanner[j].style.display = "none";
  }
  autocurrent++
  if(autocurrent > slideBanner.length)
    autocurrent = 1;
  slideBanner[autocurrent-1].style.display = "block";
  setTimeout(autoSlide, 2000);
}