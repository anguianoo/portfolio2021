function scrollTop() {
  $(window).on("unload", function () {
    $(window).scrollTop(0)
  })
}

function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      })
    })
  })
}

// sticky nav
function stickyNav() {
  window.addEventListener("scroll", function () {
    var nav = document.getElementById("nav")
    nav.classList.toggle("sticky", window.scrollY > 0)
  })
}

function navBar() {
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-list")
  const links = document.querySelectorAll(".nav-list li")

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open")
    hamburger.classList.toggle("colorToWhite")
    

    links.forEach(link => {
      link.classList.add("fade")

      link.addEventListener("click", () => {
        navLinks.classList.remove("open")
        link.classList.remove("fade")
      })
    })
  })
}
function doAll() {
  // scrollTop()
  smoothScroll()
  stickyNav()
  navBar()
}
$(doAll)
