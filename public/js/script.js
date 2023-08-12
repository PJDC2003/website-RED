function dropdownNavbar(){
    document.getElementById('nav').classList.toggle('visible');

    var reveals = document.querySelectorAll(".reveal_navbar");
    for (var i = 0; i < reveals.length; i++) {
      // Clears all the sub classes
      navBarWipe(reveals[i]);
      // Adds the right subclass
      navBarPaint(reveals[i]);
    }
}


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
