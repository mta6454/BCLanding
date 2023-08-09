
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.add("nav-sticky");
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