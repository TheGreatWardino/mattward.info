const nav = document.getElementById('site-nav');
const hero = document.querySelector('.hero');

const navObserver = new IntersectionObserver(
  ([entry]) => nav.classList.toggle('visible', !entry.isIntersecting),
  { threshold: 0 }
);
navObserver.observe(hero);

const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => {
  if (el.getBoundingClientRect().top < window.innerHeight) {
    el.classList.add("visible");
  } else {
    observer.observe(el);
  }
});
