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
}

// slider video------------------------------------------------------------------------------------------------------

$(document).ready(function () {

  //PRECONNECT TO YOUTUBE IMAGES
  var linkTag = document.createElement("link");
  linkTag.rel = "preconnect";
  linkTag.href = "https://img.youtube.com";
  //inject tag in the head of the document
  document.head.appendChild(linkTag);

  var players = [];
  var YouTubeContainers = document.querySelectorAll(".js-player");

  // Iterate over every YouTube container you may have
  var loopYT = function loopYT() {
    var container = YouTubeContainers[i];

    //GET YT Thumbnail Image + Video Title
    var imageSource = "https://img.youtube.com/vi_webp/" + container.dataset.plyrEmbedId + "/sddefault.webp";
    var ytUrl = "https://www.youtube.com/watch?v=" + container.dataset.plyrEmbedId + ""; //		var imageTitle = "";

    // Load the Thumbnail Image asynchronously
    var image = new Image();
    image.src = imageSource;

    // alt image
    fetch("https://noembed.com/embed?dataType=json&url=" + ytUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        return (image.alt = data.title);
      });


    //   image attributes

    image.width = "100";
    image.height = "100";
    // image.loading = 'lazy';

    image.addEventListener("load", function () {
      container.appendChild(image);
    }); // When the user clicks on the container, load the embedded YouTube video


    //LOAD PLYR ON CLICK
    container.addEventListener("click", function () {
      // $(container).parents('.plyr__video').css('padding-bottom', '0');
      var plyr = container.getAttribute("data-video-id"); //

      var plyr = ".js-player[data-video-id=" + plyr + "]";
      var player = new Plyr(plyr, {
        youtube: {
          //SEE YOUTUBE API: https://developers.google.com/youtube/player_parameters#Parameters
          origin: window.location.host,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          noCookie: true
        }
      });
      player.on("ready", function () {
        player.play();
      }); // Attach Play Event

      player.on("play", function () {
        players.forEach(function (playerElement) {
          if (playerElement !== player && playerElement.playing) {
            playerElement.pause();
          }
        });
      });


      // Save Player Instance
      players.push(player);


      // STOP Other Players
      players.forEach(function (player) {
        player.on("play", function () {
          player.elements.container.classList.add("player-expand");
          players.forEach(function (otherPlayer) {
            if (otherPlayer !== player && otherPlayer.playing) {
              otherPlayer.pause();
            }
          });
          /**
           * Pause when opening Lightbox
           */

          var lightboxLinks = document.querySelectorAll("[class^='glightbox']");

          for (var i = 0; i < lightboxLinks.length; i++) {
            lightboxLinks[i].addEventListener("click", function () {
              player.pause();
            });
          } // player.toggleControls('progress');
        });
        player.on("pause", function () {
          if (!player.seeking) {
            player.elements.container.classList.remove("player-expand");
          }
        });
      });
    });
  };

  for (var i = 0; i < YouTubeContainers.length; i++) {
    var ytUrl;

    loopYT();
  }
});