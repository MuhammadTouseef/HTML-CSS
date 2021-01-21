var x = document.querySelector("#humburger");
var y = document.querySelector("ul");
var z = document.querySelector(".navbar");
x.onclick = function(){
if (y.style.display === "none") {
    y.style.display = "flex";
    z.style.opacity = "1";

    
    
  } else {
    y.style.display = "none";
    z.style.opacity = "0.8";
  } }


  const navbar = document.getElementById('navbar');
      let scrolled = false;

      window.onscroll = function () {
        if (window.pageYOffset > 100) {
          navbar.classList.remove('top');
          navbar.style.backgroundColor = '#333'
          if (!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
           
          }
          setTimeout(function () {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
          }, 200);
        } else {
          navbar.classList.add('top');
          scrolled = false;
        }
        if (window.pageYOffset < 100) {
          navbar.style.backgroundColor = ''
        }
      };
  