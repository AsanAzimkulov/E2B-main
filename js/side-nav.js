const indicators = document.querySelectorAll('.side-nav__list__item-link');
let indicatorsClassSelectors = document.querySelectorAll('.side-nav__list__item');
indicatorsClassSelectors = Array.from(indicatorsClassSelectors)

const resetCurrentActiveIndicators = () => {
  const activeIndicator = document.querySelector('.side-nav__list__item-link--active');
  if (activeIndicator) {
    activeIndicator.classList.remove('side-nav__list__item-link--active');
  }

};

indicators.forEach((indicator) => {
  indicator.addEventListener('click', function (e) {
    resetCurrentActiveIndicators();
    e.target.parentNode.classList.add('side-nav__list__item-link--active');
  })
})


const sections = document.querySelectorAll('section');

const onSectionLeaveViewport = (section) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resetCurrentActiveIndicators();
          const element = entry.target;
          const indicator = document.querySelector(`a[href="#${element.id}"`);
          indicator.classList.add('side-nav__list__item-link--active');
          return;
        }
      })
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.75
    }
  );
  observer.observe(section);
}

sections.forEach(onSectionLeaveViewport);
