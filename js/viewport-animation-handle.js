const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => { entry.target.classList.add("is-in-viewport"); }, 400);
    }
  });
};
const Obs = new IntersectionObserver(inViewport);
const Elements = document.querySelectorAll('.services section .example-forms__list__item__image-wrapper');
const obsOptions = {
  threshold: 1,
};

Elements.forEach(EL => {
  Obs.observe(EL, obsOptions);
});
