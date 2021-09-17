// ========= Pre loader ========
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true
});
const sr_cv = ScrollReveal({
  origin: "top",
  distance: "220px",
  duration: 2000,
  reset: true
});
// -------------------------------------Index Scrol----------------------------------------------
/*------------------ SCROLL HOME ----------------*/
sr.reveal(".home__title", {});
sr.reveal(".home__scroll", { delay: 200 });
sr.reveal(".home__img", { origin: "right", delay: 400 });

/*------------------ SCROLL ABOUT ------------------*/
sr.reveal(".about__img", { delay: 500 });
sr.reveal(".about__subtitle", { delay: 300 });
sr.reveal(".about__profession", { delay: 400 });
sr.reveal(".about__text", { delay: 500 });
sr.reveal(".about__social-icon", { delay: 600, interval: 200 });

/*------------------ SCROLL SKILLS ------------------*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".skills__img", { delay: 400 });

/*------------------ SCROLL PORTFOLIO ------------------*/
sr.reveal(".portfolio__img", { interval: 200 });
sr.reveal(".port__img__top", { interval: 200, origin: "bottom" });

/* ------------------ SCROLL CONTACT ------------------*/
sr.reveal(".contact__subtitle", {});
sr.reveal(".contact__text", { interval: 200 });
sr.reveal(".contact__input", { delay: 400 });
sr.reveal(".contact__pais", { delay: 400 });
sr.reveal(".contact__radio", { delay: 400 });
sr.reveal(".contact__button", { delay: 600 });
// -------------------------------------Index Scrol----------------------------------------------
// -------------------------------------CV Scrol----------------------------------------------
sr_cv.reveal(".img-cvv", { delay: 150 });
sr_cv.reveal(".texto-cvv", { delay: 500 });
sr_cv.reveal(".list-des", { origin: "left", delay: 450 });
sr_cv.reveal(".videito", {
  origin: "rigth",
  distance: "80px",
  delay: 250,
  interval: 100
});
// -------------------------------------CV Scrol----------------------------------------------
// -------------------------------------CV Links----------------------------------------------
sr.reveal(".yo-links", { origin: "left", delay: 250 });
sr.reveal(".lista-links", { delay: 450 });
// -------------------------------------CV Links----------------------------------------------
// ------------------------------------- Projects ----------------------------------------------

sr.reveal(".izq", { origin: "left", delay: 200 });
sr.reveal(".der", { origin: "right", delay: 400 });

// ------------------------------------- Projects ----------------------------------------------

//  --------------------Form contact-------------------
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json"
    }
  })
    .then((response) => {
      status.classList.add("success");
      status.innerHTML = "Gracias por el mensaje :)";
      form.reset();
    })
    .catch((error) => {
      status.classList.add("error");
      status.innerHTML = "Oops! Hubo un error al intentar enviar tu correo :(";
    });
}
form.addEventListener("submit", handleSubmit);
// --------------------Form contact-------------------
