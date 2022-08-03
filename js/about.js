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


  // Новый slider
  if (window.matchMedia("(max-width: 767px)").matches) {
    if ($('.our-workers .slider__item').length > 1) {
      new ChiefSlider('.our-workers .slider');
    }
  }




  // if ($(document).width() < 769) {
  // 	$('.sliders .slider ').on('transition-start', function (e) {
  // 		if ($(this).find('.slider__item_active').length == 3) {
  // 			let itemCount = $(this).find('.slider__item').length;
  // 			if (($(this).find('.slider__item').eq(itemCount - 1).hasClass('slider__item_active') && $(this).find('.slider__item').eq(itemCount - 2).hasClass('slider__item_active') && $(this).find('.slider__item').eq(itemCount - 3).hasClass('slider__item_active')) || $(this).find('.slider__item').eq(0).hasClass('slider__item_active')) {
  // 				$(this).find('.slider__item').eq(0).css('visibility', 'visible')
  // 			} else {
  // 				$(this).find('.slider__item').eq(0).css('visibility', 'hidden')
  // 			}
  // 		}
  // 	})
  // }


});