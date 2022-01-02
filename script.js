const hover = document.getElementById("helloBox"); 


    document.addEventListener("mouseover", function (event) {
          const leftNumbers = hover.style.left.replace("px", "");
          const left = parseInt(leftNumbers, 10);
          hover.style.left = `${left - 1}px`;
        
      });