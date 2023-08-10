function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar ) {
        if (
            (document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50)
        ) {
            navbar.classList.add("nav-sticky");
            document.getElementById("fb").style.color = "rgb(56, 88, 152)";
            document.getElementById("tiktok").style.color = "#333";
        } else {
            navbar.classList.remove("nav-sticky");
            document.getElementById("fb").style.removeProperty('color')
            document.getElementById("tiktok").style.removeProperty('color')
        }
    }
  }
  
  window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
  })
  function scrollToSession(id) {
    const el = document.getElementById(id)
    el?.scrollIntoView({behavior:"smooth",block: "center"})
  }   