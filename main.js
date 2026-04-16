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
