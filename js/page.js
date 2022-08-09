$(document).ready(function () {
  // Slider со страницы about
  if ($('.competencies .slider__item').length > 1) {
    new ChiefSlider('.competencies .slider');
  }

  $('.competencies__title a').on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {
      $('.competencies__title a').removeClass('active');
      $(this).addClass('active');
      $(this).parents('.competencies').find('.slider__indicators li').eq($(this).parent().index()).click();
    }
  });

  $('.competencies .slider').on('transition-start', function (e) {
    $('.competencies__title a').removeClass('active');
    $('.competencies__title li').eq($('.competencies .slider__indicators li.active').attr('data-slide-to')).find('a').addClass('active');
  });


  // Новый slider(отзывы)
  if (window.matchMedia("(max-width: 767.5px)").matches) {
    if ($('.reviewers .slider__item').length > 1) {
      new ChiefSlider('.reviewers .slider');
    }
  }

  // Второй  новый слайдер(Специалисты)

  if (window.matchMedia("(max-width: 767.5px)").matches) {
    if ($('.specialists .slider__item').length > 1) {
      new ChiefSlider('.specialists .slider');
    }
  }

  // slider Video

  if ($('.video .slider__item').length > 1) {
    new ChiefSlider('.video .slider');
  }

  // Новый слайдер для top-services

  if (window.matchMedia("(max-width: 1199.5px)").matches) {
    if ($('.top-services .slider__item').length > 1) {
      new ChiefSlider('.top-services .slider');
    }
  }


});

// Переключение контента в отзывах
const reviews = document.querySelectorAll('.reviewers .slider__item');

const reviewHtmlElements = {
  title: document.querySelectorAll('.reviews__title'),
  image: document.querySelectorAll('.reviews__image'),
  descriptions: document.querySelectorAll('.reviews .reviews__text'),
  textContainer: document.querySelector('.reviews .reviews__text-wrapper'),
  completedWorks: {
    selector: '.reviews .completed-works__list__item',
  },
  completedWorksList: document.querySelector('.reviews .completed-works__list'),
}

const reviewDataAttrNames = {
  title: 'data-title',
  imageUrl: 'data-image-url',
  par1: 'data-p1',
  par2: 'data-p2',
  par3: 'data-p3',
  completedWorks: 'data-completed-works',
}

const reviewsData = [];
reviews.forEach((review) => {
  const conf = reviewDataAttrNames;

  reviewsData.push({
    title: review.getAttribute(conf.title),
    imageUrl: review.getAttribute(conf.imageUrl),
    paragraph1: review.getAttribute(conf.par1),
    paragraph2: review.getAttribute(conf.par2),
    paragraph3: review.getAttribute(conf.par3),
    completedWorks: review.getAttribute(conf.completedWorks).split("///"),
  });
});

let mb;

const imageAligning = () => {
  if (window.matchMedia('(min-width: 1920px)').matches) {
    const img = document.querySelectorAll('.reviews__image')[1]
    img.style.marginBottom = '0px';
    img.style.paddingTop = '0px';
    if (img.height < 736) {
      const diff = (736 - img.height);
      img.style.marginBottom = diff + 'px'
      img.style.paddingTop = diff + 1 + 'px'
      // mb = document.querySelector('.reviews').style.marginBottom;
      // document.querySelector('.reviews').style.marginBottom = '-' + (diff - 30) + 'px';
    } else {
      // document.querySelector('.reviews').style.marginBottom = mb;
    }
    const section = document.querySelector('.reviews');
    const sectionWrapper = document.querySelector('.reviews__wrapper');
    section.style.height = document.defaultView.getComputedStyle(sectionWrapper).height;
    section.style.overflow = 'hidden';
  }
}
let previousSlide;

const onReviewSlideClick = (index) => {
  if (previousSlide === index) return;
  previousSlide = index;
  const reviewData = reviewsData[index];
  reviewHtmlElements.title.forEach(titleEl => {
    titleEl.textContent = reviewData.title;
  });
  reviewHtmlElements.image.forEach(imageEl => {
    imageEl.setAttribute('src', reviewData.imageUrl);
  });

  reviewHtmlElements.descriptions.forEach((descriptionElem, index) => {
    descriptionElem.textContent = reviewData['paragraph' + (index + 1).toString()]
  });

  reviewHtmlElements.completedWorksList.querySelectorAll(
    reviewHtmlElements.completedWorks.selector
  ).forEach(el => el.remove());

  reviewData.completedWorks.forEach((completedWork) => {
    const listElement = document.createElement('li');
    const listElementClass = reviewHtmlElements.completedWorks.selector.replace(/\./gi, '',).split(' ')[1];
    listElement.classList.add(listElementClass);

    listElement.textContent = completedWork;
    reviewHtmlElements.completedWorksList.appendChild(listElement);
  });

  imageAligning();

};

reviews.forEach((reviewSlide, index) => {
  reviewSlide.addEventListener('click', () => onReviewSlideClick(index));
});
