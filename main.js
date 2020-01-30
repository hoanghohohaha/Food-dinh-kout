//DROP DOWNMENU
var drop2 =document.getElementById('drop2');
var drop1 =document.getElementById('drop1');
var a=document.getElementsByClassName('dropdownmenu');
drop1.addEventListener('mouseover',() => {
    console.log('1');
    a[0].style.display='flex';
});
drop1.addEventListener('mouseout',() => {
    console.log('1');
    a[0].style.display='none';
});
drop2.addEventListener('mouseover',() => {
    console.log('1');
    a[1].style.display='flex';
});
drop2.addEventListener('mouseout',() => {
    console.log('1');
    a[1].style.display='none';
});
//Slide
var slideindex =1;
Showslide(slideindex);

function Showslide(n){
    var slides=document.getElementsByClassName('slideshow');
    if (n > 3) {slideIndex = 1};  
    if (n < 1) {slideIndex = 3};
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    if (slideindex<= 3 && slideindex >=1){
    slides[n-1].style.display='block';
    console.log(slideindex);
    }
}
function nextslide(n){
    if (slideindex<= 3 && slideindex >=1){
        slideindex = slideindex+ n;
    }else {
        slideindex=1
    }
    Showslide(slideindex);
    console.log(slideindex);
    
}
function Dot(n) {
    Showslide(slideIndex = n);
  }

