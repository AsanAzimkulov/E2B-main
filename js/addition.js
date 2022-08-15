// Меню
$(window).scroll(function (event) {
  if ($(this).scrollTop() > parseInt($('body').css('padding-top'))) {
    if (!$('header').hasClass('header__sticky')) {
      $('.header').css('box-shadow', '0px 4px 20px rgba(0, 0, 0, 0.15)');
      $('.header').css('--body-padding-height', $('body').css('padding-top'));
    }
  } else {
    $('.header').css('box-shadow', 'none');
    $('.header').css('--body-padding-height', '0px');
  }
});

$('.menu-item-has-children > a[href="#"]').on('click', function (e) {
  e.preventDefault();
});

if ($(window).width() < 993) {
  // Меню
  $('.mobile__menu_open').on('click', function (e) {
    $(this).hide();
    $('.mobile__menu_close').show();
    $('body').css({
      'position': 'fixed',
      'height': '100vh',
      'overflow': 'hidden'
    });
    $('header').css({
      'height': '100vh',
      'overflow': 'scroll',
    });
    $('.header__block').slideDown({
      duration: 800,
      start: function () {
        $(this).css({
          display: "flex"
        })
      }
    });
  });
  $('.mobile__menu_close').on('click', function (e) {
    $(this).hide();
    $('.header__block').slideUp(500);
    $('.mobile__menu_open').show();
    $('body').css({
      'position': 'relative',
      'height': 'auto',
      'overflow': 'visible'
    });
    $('header').css({
      'height': 'auto',
      'overflow': 'visible',
    });
  });

  let menuShowSubMenu, menuShowSubSubMenu;

  // Выпадающее подменю
  $('.header__menu > ul > li.menu-item-has-children > a').on('click', function (e) {
    e.preventDefault();
    if ($(this).parent().attr('data-show') == 'true') {
      $(this).parent().children('.sub-menu').slideUp(500);
      $(this).parent().attr('data-show', 'false')
      menuShowSubMenu = '';
    } else {
      $(this).parent().attr('data-show', 'true');
      $(menuShowSubMenu).children('.sub-menu').slideUp(500);
      $(menuShowSubMenu).attr('data-show', 'false')
      menuShowSubMenu = $(this).parent();
      $(this).parent().children('.sub-menu').slideDown(500);
    }
  });
  $('.header__menu > ul > li.menu-item-has-children > .sub-menu > li.menu-item-has-children > a ').on('click', function (e) {
    e.preventDefault();
    if ($(this).parent().attr('data-show') == 'true') {
      $(this).parent().children('.sub-menu').slideUp(500);
      $(this).parent().attr('data-show', 'false')
      menuShowSubSubMenu = '';
    } else {
      $(this).parent().attr('data-show', 'true');
      $(menuShowSubSubMenu).children('.sub-menu').slideUp(500);
      $(menuShowSubSubMenu).attr('data-show', 'false')
      menuShowSubSubMenu = $(this).parent();
      $(this).parent().children('.sub-menu').slideDown(500);
    }
  });
} else {
  const titles = $('.header__menu > .menu > li');
  const subMenu = $('.header__menu > .menu > li:first-child > .sub-menu');

  const subMenuItems = $('.header__menu > .menu > li:first-child > .sub-menu > li');

  const subMenuItemsTitles = $('.header__menu > .menu > li:first-child > .sub-menu > li > a');

  const subMenuItemsLists = $('.header__menu > .menu > li:first-child > .sub-menu > li > ul');
  subMenuItemsLists.hide();

  const pasteBoard = document.createElement('div');
  pasteBoard.classList.add('sub-menu__paste-board');
  subMenu.append(pasteBoard);

  let initialSubMenuHeight;
  let isInitialSubMenuHeightSet = false;
  let lastTarget;
  subMenuItemsTitles.mouseenter((e) => {
    if (e.currentTarget == lastTarget) return;
    lastTarget = e.currentTarget;
    pasteBoard.innerHTML = $(e.currentTarget).siblings().get(0).outerHTML;
    $(pasteBoard).children('ul').show().css('padding-left', '0px');

    // Resize sub-menu, if pasteBoard scrolling
    const pasteBoardHeight = $($(pasteBoard).children('ul')).outerHeight();
    const subMenuHeight = $(subMenu).height();
    if (!isInitialSubMenuHeightSet) {
      initialSubMenuHeight = subMenuHeight;
      isInitialSubMenuHeightSet = true;
    }

    if (pasteBoardHeight > subMenuHeight) {
      subMenu.height(pasteBoardHeight);
    } else {
      subMenu.height(initialSubMenuHeight);
    }

  })

}