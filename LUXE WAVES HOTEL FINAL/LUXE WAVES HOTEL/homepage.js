let index = 0;
const slides = ["IMAGES/hotel outside view 1.jpg",
    "IMAGES/hotel outside view 2.jpg",
    "IMAGES/hotel outside view 4.jpg",
    "IMAGES/hotel outside view 5.jpg",
    "IMAGES/hotel lobby 1.jpg",
    "IMAGES/hotel lobby 2.jpg",
    "IMAGES/hotel lobby 3.jpg",
    "IMAGES/hotel lobby 4.jpg",
    "IMAGES/hotel lobby 5.jpg",
    "IMAGES/hotel lobby 6.jpg",
    "IMAGES/swimming exterior.jpg"];

    function setImage(){
        slide.setAttribute('src', slides[index]);
    }
    
    function setPrevImage() {
        index--;
        if(index < 0){index=slides.length-1;}
        setImage();
    }
    
    function setNextImage() {
        index++;
        if (index>=slides.length){index=0;}
        setImage();
    }

function changeSlide() {
    let imgElement=document.getElementById('slide');
    if(imgElement){
        imgElement.src=slides[index];
        index=(index+1)%slides.length;/*Increments index and sets it to 0 when it goes out of bounds*/ 
    }
    else{
        console.error('Image not found');
    } 
}
setInterval(function() {changeSlide();}, 3000);

var images = [
    "IMAGES/hotel swimming pool 1.jpg",
    "IMAGES/hotel swimming pool 2.jpg",
    "IMAGES/hotel swimming pool 3.jpg",
    "IMAGES/water sports pic 1.jpg",
    "IMAGES/deluxe room pic 1.jpg",
    "IMAGES/presidential suite pic 1.jpg",
    "IMAGES/hotel restaurant 1.jpg",
    "IMAGES/hotel restaurant 2.jpg",
    "IMAGES/hotel dining area 1.jpg",
    "IMAGES/hotel dining area 2.jpg",
    "IMAGES/hotel dining area 3.jpg",
    "IMAGES/hotel dining area 4.jpg",
    "IMAGES/hotel dining area 5.jpg",
    "IMAGES/hotel dining area 6.jpg",
    "IMAGES/hotel terrace 1.jpg",
    "IMAGES/hotel terrace 2.jpg",
    "IMAGES/hotel fitness club 1.jpg",
    "IMAGES/hotel gym 1.jpg",
    "IMAGES/hotel beach 1.jpg",
    "IMAGES/hotel spa 1.jpg",
    "IMAGES/hotel spa 2.jpg",
    "IMAGES/hotel sauna 1.jpg",
    "IMAGES/hotel conference room 1.jpg",
    "IMAGES/hotel conference room 2.jpg",
    "IMAGES/hotel conference room 3.jpg",
    "IMAGES/hotel kids club 1.jpg"
];

var i = 0;

function showImage(){
    fac.setAttribute('src', images[i]);
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
    let imagElement=document.getElementById('fac');
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

    if(pos > 100){
        scrollProgress.style.display = 'grid';
    } 
    else{
        scrollProgress.style.display = 'none';
    }
    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
};


function changeNavbar() {
    let navbar= document.getElementById('nav');
    if(window.scrollY > 0){
        nav.style.backgroundColor ='#0255a8';
    }
    else{
        nav.style.backgroundColor = 'transparent';
    }
}

window.onscroll= function(){changeNavbar(); calcScrollValue();}
