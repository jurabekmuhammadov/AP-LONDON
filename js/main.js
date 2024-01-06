window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

function openNavbar() {
  document.getElementById("navbar-responsive").style.right = "-0%";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.right = "-40%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "60px";
  } else {
    backtop.style.bottom = "-60px";
  }
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items:1,
      nav: true,
    },
    670: {
      items: 2,
      nav: true,
    },
    900: {
      items: 3,
      nav: false,
    },
    1200: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});


let btn = document.querySelector('.btn');
let clip = document.querySelector('.clip');
let close = document.querySelector(".close");
let video = document.querySelector('video')
btn.onclick = function() {
  btn.classList.add("active");
  clip.classList.add("active");
  video.play();
  video.currentTime = 0;
}
close.onclick = function () {
  btn.classList.remove("active");
  clip.classList.remove("active");
  video.pause();
};



