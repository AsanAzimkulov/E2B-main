// Добавляем класс для отслеживания активного слайда
document.querySelector('.reviewers .slider__item_active').classList.add("slider__item--active");
document.querySelectorAll('.reviewers .slider__item').forEach((el) => {
  el.addEventListener('click', (e) => {
    document.querySelectorAll('.reviewers .slider__item').forEach(el => el.classList.remove('slider__item--active'));
    e.target.closest('.slider__item').classList.add('slider__item--active')
  })
})

function transferContentToModalReviews() {
  document.querySelectorAll('.reviews-modal .reviews__text-wrapper p').forEach(p => p.remove());
  const paragraphs = document.querySelector('.reviews .slider__item--active').getAttribute('data-read-more').split('///');

  paragraphs.forEach(text => {
    const p = document.createElement('p');
    p.classList.add('reviews__text');
    p.textContent = text;
    const textWrapper = document.querySelector('.reviews-modal .reviews__text-wrapper').append(p);
  });

  const titleText = document.querySelector(' .reviews .reviews__title').textContent;
  document.querySelectorAll('.reviews-modal .reviews__title').forEach(title => title.textContent = titleText);
  const modal = document.querySelector('.reviews-modal');
  modal.querySelectorAll('.reviews__image').forEach(img => img.setAttribute('src', (
    document.querySelector('.reviews .reviews__image').getAttribute('src')
  )));

};
const reviewsModal = document.querySelector('.reviews-modal');

function onOpenModalReviews() {
  transferContentToModalReviews();


  document.querySelector('html').classList.add('no-scroll-y');
  document.body.classList.add('modal-reviews-show');
  document.body.classList.add('no-scroll-y');
}

function onCloseModalReviews() {
  $('html').removeClass('no-scroll-y');
  // Убираем предыдущий скролл
  document.querySelector('.reviews-modal').scrollTo(0, 0);
  document.body.classList.remove('modal-reviews-show');
  document.querySelector('html').classList.add('remove');
  document.body.classList.remove('no-scroll-y');
}

document.body.addEventListener('click', (e) => {
  let path = e.path || (e.composedPath && e.composedPath());
  if (path.some(el => el.className === "reviews__read-more")) {
    e.preventDefault();
    onOpenModalReviews();
  }
});

document.querySelector('.reviews-modal__close').addEventListener('click', onCloseModalReviews);

document.querySelector('.reviews-modal').addEventListener('click', function (e) {
  if (e.target === this) {
    onCloseModalReviews();
  }
});


