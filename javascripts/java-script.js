document.addEventListener("DOMContentLoaded", function() {
  let button1 = document.querySelector(".button1");
  let button2 = document.querySelector(".button2");

  let sections = document.querySelectorAll(".section1, .section2");

  function showSection(ourClass) {
    sections.forEach(function(section) {
      if (section.classList.contains(ourClass)) {
        section.classList.add("block");
        section.classList.remove("none");
      } else {
        section.classList.add("none");
        section.classList.remove("block");
      }
    });
  }

  function changeBodyBackground(imageUrl) {
    document.body.style.backgroundImage = `url('./img/${imageUrl}')`; 
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center'; 
  }

  button1.addEventListener("click", function() {
    showSection("section2");
    changeBodyBackground('bg2.png'); 
  });

  button2.addEventListener("click", function() {
    showSection("section1");
    changeBodyBackground('bg1.png'); 
  });
});

    