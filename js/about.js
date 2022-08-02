$(document).ready(function () {

	if ($(document).width() > 991) {
		if ($('.clients .slider__item').length > 4) {
			new ChiefSlider('.clients .slider');
		} else {
			$('.clients').find('.slider__control').remove();
			$('.clients').find('.slider__indicators').remove();
			$('.clients').find('.slider__item').addClass('slider__item_active');
		}
		if ($('.sertificate .slider__item').length > 4) {
			new ChiefSlider('.sertificate .slider');
		} else {
			$('.sertificate').find('.slider__control').remove();
			$('.sertificate').find('.slider__indicators').remove();
			$('.sertificate').find('.slider__item').addClass('slider__item_active');
		}
	} else if ($(document).width() > 645) {
		if ($('.clients .slider__item').length > 3) {
			new ChiefSlider('.clients .slider');
		} else {
			$('.clients').find('.slider__control').remove();
			$('.clients').find('.slider__indicators').remove();
			$('.clients').find('.slider__item').addClass('slider__item_active');
		}
		if ($('.sertificate .slider__item').length > 3) {
			new ChiefSlider('.sertificate .slider');
		} else {
			$('.sertificate').find('.slider__control').remove();
			$('.sertificate').find('.slider__indicators').remove();
			$('.sertificate').find('.slider__item').addClass('slider__item_active');
		}
	} else if ($(document).width() > 420) {
		if ($('.clients .slider__item').length > 2) {
			new ChiefSlider('.clients .slider');
		} else {
			$('.clients').find('.slider__control').remove();
			$('.clients').find('.slider__indicators').remove();
			$('.clients').find('.slider__item').addClass('slider__item_active');
		}
		if ($('.sertificate .slider__item').length > 2) {
			new ChiefSlider('.sertificate .slider');
		} else {
			$('.sertificate').find('.slider__control').remove();
			$('.sertificate').find('.slider__indicators').remove();
			$('.sertificate').find('.slider__item').addClass('slider__item_active');
		}
	} else {
		if ($('.clients .slider__item').length > 1) {
			new ChiefSlider('.clients .slider');
		} else {
			$('.clients').find('.slider__control').remove();
			$('.clients').find('.slider__indicators').remove();
			$('.clients').find('.slider__item').addClass('slider__item_active');
		}
		if ($('.sertificate .slider__item').length > 1) {
			new ChiefSlider('.sertificate .slider');
		} else {
			$('.sertificate').find('.slider__control').remove();
			$('.sertificate').find('.slider__indicators').remove();
			$('.sertificate').find('.slider__item').addClass('slider__item_active');
		}
	}

	if ($(document).width() > 991) {
		if ($('.team .slider__item').length > 3) {
			new ChiefSlider('.team .slider');
		} else {
			$('.team').find('.slider__control').remove();
			$('.team').find('.slider__indicators').remove();
			$('.team').find('.slider__item').addClass('slider__item_active');
		}
	} else if ($(document).width() > 575) {
		if ($('.team .slider__item').length > 2) {
			new ChiefSlider('.team .slider');
		} else {
			$('.team').find('.slider__control').remove();
			$('.team').find('.slider__indicators').remove();
			$('.team').find('.slider__item').addClass('slider__item_active');
		}
	} else {
		if ($('.team .slider__item').length > 1) {
			new ChiefSlider('.team .slider');
		} else {
			$('.team').find('.slider__control').remove();
			$('.team').find('.slider__indicators').remove();
			$('.team').find('.slider__item').addClass('slider__item_active');
		}
	}

	if ($(document).width() > 767) {
		if ($('.recommendation__slider .slider__item').length > 2) {
			new ChiefSlider('.recommendation__slider');
		} else {
			$('.recommendation__slider').find('.slider__control').remove();
			$('.recommendation__slider').find('.slider__indicators').remove();
			$('.recommendation__slider').find('.slider__item').addClass('slider__item_active');
		}
	} else {
		if ($('.recommendation__slider .slider__item').length > 1) {
			new ChiefSlider('.recommendation__slider');
		} else {
			$('.recommendation__slider').find('.slider__control').remove();
			$('.recommendation__slider').find('.slider__indicators').remove();
			$('.recommendation__slider').find('.slider__item').addClass('slider__item_active');
		}
	}

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

	$('.et-service__block__menu li').on('click', function (e) {
		e.preventDefault();
		$('.popup__trigger').show();
		$('.popup__trigger input[name="service"]').val($(this).text());
		let oldWidth = $('html').width();
		$('html').css('overflow-y', 'hidden');
		$('html').css('padding-right', $('html').width() - oldWidth);
	});

	$('.popup__trigger_start').on('click', function (e) {
		e.preventDefault();
		$('.popup__trigger').show();
		let oldWidth = $('html').width();
		$('html').css('overflow-y', 'hidden');
		$('html').css('padding-right', $('html').width() - oldWidth);
	});

	$('.popup__callback_start').on('click', function (e) {
		e.preventDefault();
		$('.popup__callback').show();
		let oldWidth = $('html').width();
		$('html').css('overflow-y', 'hidden');
		$('html').css('padding-right', $('html').width() - oldWidth);
	});

	if ($(document).width() < 769) {
		$('.sliders .slider ').on('transition-start', function (e) {
			if ($(this).find('.slider__item_active').length == 3) {
				let itemCount = $(this).find('.slider__item').length;
				if (($(this).find('.slider__item').eq(itemCount - 1).hasClass('slider__item_active') && $(this).find('.slider__item').eq(itemCount - 2).hasClass('slider__item_active') && $(this).find('.slider__item').eq(itemCount - 3).hasClass('slider__item_active')) || $(this).find('.slider__item').eq(0).hasClass('slider__item_active')) {
					$(this).find('.slider__item').eq(0).css('visibility', 'visible')
				} else {
					$(this).find('.slider__item').eq(0).css('visibility', 'hidden')
				}
			}
		})
	}

	let thisOpenExample = '';
	$('.sertificate .slider__item').on('click', function (e) {
		e.preventDefault();
		$('.popup__example').show();
		$('.popup__example .popup__example__block img').attr('src', $(this).find('img').attr('src'));
		let oldWidth = $('html').width();
		$('html').css('overflow-y', 'hidden');
		$('html').css('padding-right', $('html').width() - oldWidth);
		thisOpenExample = $(this);
	});

	$('.popup__example .arrow').on('click', function (e) {
		e.preventDefault();
		let newExample = '';
		if (e.target.closest('.arrow__left')) {
			newExample = $(thisOpenExample).index() - 1;
			if (newExample < 0) {
				newExample = $(thisOpenExample).parents('.sertificate').find('.slider__item').length;
			}
		} else {
			newExample = $(thisOpenExample).index() + 1;
			if (newExample == $(thisOpenExample).parents('.sertificate').find('.slider__item').length) {
				newExample = 0;
			}
		}
		thisOpenExample = $(thisOpenExample).parents('.sertificate').find('.slider__item')[newExample];
		$('.popup__example .popup__example__block img').attr('src', $(thisOpenExample).find('img').attr('src'));

	});

});