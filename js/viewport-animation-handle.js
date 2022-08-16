const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-in-viewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

// Attach observer to every section with animation:
const ELs_inViewport = document.querySelectorAll('.services section');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});
