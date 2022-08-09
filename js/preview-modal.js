function onOpenModalPreview() {
  $('html').addClass('no-scroll-y');
  document.body.classList.add('modal-preview-show');
  document.body.classList.add('no-scroll-y');
}

function onCloseModalPreview() {
  $('html').removeClass('no-scroll-y');
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

const createSubscribe = (el, sectionSelector) => {
  if (el) {
    subscribersModalPreview.push({
      element: el,
      sectionSelector
    })
  }
};

document.querySelectorAll('.cases__down-bar__blue-link').forEach(el => createSubscribe(el, '.cases'));

const serviceSchemeBordered = document.querySelector('.service-scheme__button--bordered');
const serviceSchemeLink = document.querySelector('.service-scheme__button--link');

createSubscribe(serviceSchemeBordered, '.service-scheme');
createSubscribe(serviceSchemeLink, '.service-scheme');


const exampleFormsLinkInfo = document.querySelectorAll('.example-forms__list__item__down-bar__link--info').forEach(el => createSubscribe(el, '.example-forms'));
const exampleFormsIconLinkInfo = document.querySelectorAll('.example-forms__list__item__down-bar__price-with-icon__icon-link').forEach(el => createSubscribe(el, '.example-forms'));

const topServicesLinkInfo = document.querySelectorAll('.top-services__item__down-bar__button--link').forEach(el => createSubscribe(el, '.top-services'));

subscribersModalPreview.forEach((sub) => {
  sub.element.addEventListener('click', function () {
    onOpenModalPreview();
    preventScrollToTop(sub.sectionSelector);
  })
});
