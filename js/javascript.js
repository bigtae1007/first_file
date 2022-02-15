let slideImage =  document.querySelectorAll("#slideImage > img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let current = 0;

prev.onclick = prevSlide;
next.onclick = nextSlide;



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