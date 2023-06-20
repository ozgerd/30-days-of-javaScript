
var pics = [
    "images/image.jpeg",
    "images/images-2.jpeg",
    "images/images-3.jpeg",
    "images/images-4.jpeg",
    "images/images.jpeg",
    "images/images.jpeg"

];

var btn = document.querySelector("button");
var img= document.querySelector ("img");
var counter = 1;
btn.addEventListener("click", function(){
    if (counter === 5){
        counter = 0;
    }
    img.src =  pics [counter]
    counter = counter + 1;

});


