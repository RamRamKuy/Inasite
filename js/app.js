// ================== Navbar Toggle ==================
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("nav");

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

// ================== Skills Animation ==================
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");

function showProgress() {
  skills_bars.forEach(skill => {
    const value = skill.dataset.progress;
    skill.style.opacity = 1;
    skill.style.width = value;
  });
}

function hideProgress() {
  skills_bars.forEach(skill => {
    skill.style.opacity = 0;
    skill.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skills_wrap.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

// ================== Swiper ==================
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ================== Isotope (Portfolio/Grid) ==================
$(window).on("load", function () {
  $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows"
  });

  $(".portfolio-filters li").on("click", function () {
    $(".portfolio-filters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    $(".portfolio-container").isotope({
      filter: $(this).data("filter")
    });
  });
});
