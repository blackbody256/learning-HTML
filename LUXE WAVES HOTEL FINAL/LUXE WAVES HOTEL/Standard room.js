var images = [
    "IMAGES/standard room pic 1.jpg",
    "IMAGES/standard room pic 2.jpg",
    "IMAGES/standard room pic 4.jpg",
    "IMAGES/standard room pic 3.jpg",
    "IMAGES/standard room amenity pic 1.jpg",
    "IMAGES/standard room amenity pic 2.jpg"
];

var i = 0;

function showImage(){
    slide.setAttribute('src', images[i]);
}

function showPrevImage() {
    i--;
    if(i < 0){i=images.length-1;}
    showImage();
}

function showNextImage() {
    i++;
    if (i>=images.length){i=0;}
    showImage();
}

function slideshow() {
    let imagElement=document.getElementById('slide');
    if(imagElement){
        imagElement.src=images[i];
        i=(i+1)%images.length;/*Increments index and sets it to 0 when it goes out of bounds*/ 
    }
    else{
        console.error('Image not found');
    } 
}
setInterval(function() {slideshow();}, 3000);

let calcScrollValue = () => {
    let scrollProgress = document.getElementById('progress');  
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
    let scrollValue= Math.round((pos * 100)/ calcHeight);
    if(pos>100){
        scrollProgress.style.display = 'grid';
    } 
    else{
        scrollProgress.style.display = 'none';
    }
    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
};

window.onscroll=calcScrollValue;
window.onload=calcScrollValue;