window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);



// Fade Animations
window.onscroll = () => {

  const elementVisible    = 150;
  const elementInvisible  =-150;

  // For the animations with the blocks of text
  var parts_animate = document.querySelectorAll(".animated_entry_left");
  for (var i = 0; i < parts_animate.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = parts_animate[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
          parts_animate[i].classList.add("fadeInLeft");
          parts_animate[i].classList.remove("invisible");
      } 
      if (elementTop > windowHeight - elementInvisible) {
          parts_animate[i].classList.remove("fadeInLeft");
          parts_animate[i].classList.add("invisible");
      }
  }
  var parts_animate = document.querySelectorAll(".animated_entry_right");
  for (var i = 0; i < parts_animate.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = parts_animate[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
          parts_animate[i].classList.add("fadeInRight");
          parts_animate[i].classList.remove("invisible");
      } 
      if (elementTop > windowHeight - elementInvisible) {
          parts_animate[i].classList.remove("fadeInRight");
          parts_animate[i].classList.add("invisible");
      }
  }
  var parts_animate = document.querySelectorAll(".animated_entry_up");
  for (var i = 0; i < parts_animate.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = parts_animate[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
          parts_animate[i].classList.add("fadeInUp");
          parts_animate[i].classList.remove("invisible");
      } 
      if (elementTop > windowHeight - elementInvisible) {
          parts_animate[i].classList.remove("fadeInUp");
          parts_animate[i].classList.add("invisible");
      }
  }
  var parts_animate = document.querySelectorAll(".animated_entry_down");
  for (var i = 0; i < parts_animate.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = parts_animate[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
          parts_animate[i].classList.add("fadeInDown");
          parts_animate[i].classList.remove("invisible");
      } 
      if (elementTop > windowHeight - elementInvisible) {
          parts_animate[i].classList.remove("fadeInDown");
          parts_animate[i].classList.add("invisible");
      }
  }


  // For the animations with the text
  var parts_animate = document.querySelectorAll(".animated_fade");
  for (var i = 0; i < parts_animate.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = parts_animate[i].getBoundingClientRect().top;
      // Note that the animations follow left-right-right-left pattern
      if (elementTop < windowHeight - elementVisible) {
          parts_animate[i].classList.add("fadeIn");
          parts_animate[i].classList.remove("invisible");
      }
      if (elementTop > windowHeight - elementInvisible) {
          parts_animate[i].classList.remove("fadeIn");
          parts_animate[i].classList.add("invisible");
      }
  }
}