let hover = document.getElementById("professional");
let rectangle = document.getElementById("Rectangle2");
let email = document.getElementById("email");

hover.addEventListener("mouseover", function(){
    rectangle.style.left = "84.7%";
    rectangle.style.bottom = "57.2%";
    hover.style.filter = "contrast(90%)"
},true);

hover.addEventListener("mouseout", function(){
    rectangle.style.left = "85%";
    rectangle.style.bottom = "56.5%";
    hover.style.filter = "contrast(100%)"
},true);

email.addEventListener("mouseover", function(){
    email.style.top = ("16%");
},true);

email.addEventListener("mouseout", function(){
    email.style.top = ("17%");
},true);

