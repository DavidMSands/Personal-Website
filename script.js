let hover = document.getElementById("professional");
let rectangle = document.getElementById("Rectangle2");

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



/*const leftNumbers = rectangle.style.left.replace("%", "");
const left = parseInt(leftNumbers, 10);
rectangle.style.left = `${left - 5}%`;
console.log(hover);*/