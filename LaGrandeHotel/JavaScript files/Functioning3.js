let index=0;
//this is the counter of the images in the array
let images=["Images/amedimetes.jpeg","Images/bridalsuit4.jpeg","Images/bridalsuit3.jpeg","Images/background.jpg"];
//this is the array of the images to display
function changeImage(){
    let imgElement=document.getElementById("slider")
    //this is just variable so that i  not need to write that again
    if(imgElement){
        imgElement.src=images[index];
        //this changes the source of the image to the image in the array at index when the function is called
        index=(index+1)%images.length;
        //this increases the value of index but it's also check if the value of index exceeds the value of the length of the array
        //this will reset it back to zero
    }
    else{
        console.error('Image not found');
        //this will print in the console if the source of the image is not accessible
    }
    
}
setInterval(changeImage,5000);
//this will call the function changeImage every 3seconds
let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open");
}
function closePopup(){
    popup.classList.remove("open"); 
}
let popup2 = document.getElementById("popup1");
function openPopup1(){
    popup2.classList.add("open");
}
function closePopup1(){
    popup2.classList.remove("open"); 
}