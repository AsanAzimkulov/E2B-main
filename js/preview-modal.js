function onOpenModalPreview() {
  $('html').addClass('no-scroll-y');
  document.body.classList.add('modal-preview-show');
  document.body.classList.add('no-scroll-y');
}

function onCloseModalPreview() {
  $('html').removeClass('no-scroll-y');
  // Убираем предыдущий скролл
  document.querySelector('.modal-preview').scrollTo(0, 0);
  document.body.classList.remove('modal-preview-show');
  document.body.classList.remove('no-scroll-y');
}

function preventScrollToTop(sectionSelector) {
  const offset = $(sectionSelector).offset();
  $('body').animate({
    scrollTop: offset.top,
    scrollLeft: offset.left
  });
}

document.querySelector('.modal-preview__close').addEventListener('click', onCloseModalPreview);
document.querySelector('.modal-preview').addEventListener('click', function (e) {
  if (e.target === this) {
    onCloseModalPreview();
  }
});

const subscribersModalPreview = [];

// const createSubscribe = (el, sectionSelector) => {
//   if (el) {
//     subscribersModalPreview.push({
//       element: el,
//       sectionSelector
//     })
//   }
// };


// const serviceSchemeButton = document.querySelector('.service-scheme__button--blue-button');
// const serviceSchemeLink = document.querySelector('.service-scheme__button--link');

// createSubscribe(serviceSchemeButton, '.service-scheme');
// createSubscribe(serviceSchemeLink, '.service-scheme');

// const promoInvertButton = document.querySelector('.promo--invert .btn__main.popup__consultation_start')
// createSubscribe(promoInvertButton, '.promo--invert');

// const tableOrder = document.querySelectorAll('.packages__table-main__order__button').forEach(el => createSubscribe(el, '.packages'));

// const exampleFormsLinkInfo = document.querySelectorAll('.example-forms__list__item__down-bar__link--info').forEach(el => createSubscribe(el, '.example-forms'));
// const exampleFormsIconLinkInfo = document.querySelectorAll('.example-forms__list__item__down-bar__price-with-icon__icon-link').forEach(el => createSubscribe(el, '.example-forms'));




subscribersModalPreview.forEach((sub) => {
  sub.element.addEventListener('click', function () {
    onOpenModalPreview();
    preventScrollToTop(sub.sectionSelector);
  })
});
