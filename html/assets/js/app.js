// Template Name: Audio Beats
// Template URL: https://techpedia.co.uk/template/audiobeats
// Description: Audio Beats Innovative Audio Music Theme
// Version: 1.0.0
(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      // Init.darkMode();
      Init.initializeSlick();
      Init.hamburgerMenu();
      Init.wishlistButton();
      Init.dropdownButton();
      Init.continueEmail();
      // Init.audioPlayer();
      Init.backToLogin();
      Init.formValidation();
      Init.countdownInit(".countdown", "2024/08/01");
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    preloader: function () {
      setTimeout(function () { $('#preloader').hide('slow') }, 2000);
    },
    darkMode: function () {
      if ($(".bg-dar").length) {
        // Check if the dark mode is enabled on the home page
        var isDarkModeEnabled = $('body').hasClass('bg-dark');
        console.log("Dark mode enabled on home page:", isDarkModeEnabled);
  
        // Function to add bg-dark class to the body of the target page
        function addDarkModeToTargetPage() {
          $('body').addClass('bg-dark');
          console.log("bg-dark class added to target page");
        }
  
        // Function to remove bg-dark class from the body of the target page
        function removeDarkModeFromTargetPage() {
          $('body').removeClass('bg-dark');
          console.log("bg-dark class removed from target page");
        }
  
        // Check if navigating from dark home page to other pages
        $(document).on('click', 'a', function (event) {
          var href = $(this).attr('href');
          if (isDarkModeEnabled && href !== '#' && !$(this).hasClass('external-link')) {
            // Add bg-dark class to target page's body
            addDarkModeToTargetPage();
          }
        });
      }
    },
    // audioPlayer: function () {
    //   var trackPlaying = '',
    //   audioPlayer = document.getElementById('audio-player');
    //   var checkelement = '';

    //   function changeAudio(clickEl,sourceUrl, posterUrl, trackTitle, trackSinger, playAudio = true ) {
    //       var audio = $("#audio-player"),
    //           // clickEl = jQuery('[data-track="'+sourceUrl+'"]'),
    //           playerId = audio.closest('.mejs__container').attr('id'),
    //           playerObject = mejs.players[playerId];



    //       if(clickEl == checkelement){
            
    //               if (playerObject.node.paused) {
    //                   playerObject.play();
    //                   jQuery(clickEl).find('i').removeClass('fas fa-play').addClass('far fa-pause');
    //               } else {
    //                   playerObject.pause();
    //                   jQuery(clickEl).find('i').removeClass('far fa-pause').addClass('fas fa-play');
    //               }
              
    //           return true;
    //       }else{
    //           checkelement = clickEl;

    //           jQuery('.track-list').find('i').removeClass('far fa-pause').addClass('fas fa-play');
    //       }

    //       trackPlaying = sourceUrl;

    //       audio.attr( 'poster', posterUrl );
    //       audio.attr( 'title', trackTitle );

    //       jQuery('.mejs__layers').html('').html('<div class="mejs-track-artwork"><img src="'+ posterUrl +'" alt="Track Poster" /></div><div class="mejs-track-details"><h3>'+ trackTitle +'<br><span>'+ trackSinger +'</span></h3></div>');

    //       if( sourceUrl != '' ) {
    //           playerObject.setSrc( sourceUrl );
    //       }
    //       playerObject.pause();
    //       playerObject.load();

    //       if( playAudio == true ) {
    //           playerObject.play();
    //           jQuery(clickEl).find('i').removeClass('fas fa-play').addClass('far fa-pause');
    //       }
    //   }

    //   jQuery('.track-list').on( 'click', function(){
    //       var audioTrack = jQuery(this).attr('data-track'), // Track url
    //           posterUrl = jQuery(this).attr('data-poster'), // Track Poster Image
    //           trackTitle = jQuery(this).attr('data-title'); // Track Title
    //           trackSinger = jQuery(this).attr('data-singer'); // Track Singer Name

    //       changeAudio(this,audioTrack, posterUrl, trackTitle, trackSinger );
    //       return false;
    //   });

    //   jQuery(window).on( 'load', function(){
    //       var trackOnload = jQuery('#track-onload');

    //       if( trackOnload.length > 0 ) {
    //           var audioTrack = trackOnload.attr('data-track'), // Track url
    //               posterUrl = trackOnload.attr('data-poster'), // Track Poster Image
    //               trackTitle = trackOnload.attr('data-title'); // Track Title
    //               trackSinger = trackOnload.attr('data-singer'); // Track Singer Name

    //           setTimeout( function(){
    //               changeAudio(trackOnload,audioTrack, posterUrl, trackTitle, trackSinger, false );
    //           }, 500);
    //       }
    //   });

    // },
    initializeSlick: function (e) {
      if ($(".slider-1").length) {
        $(".slider-1").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          cssEase: 'linear',
          autoplaySpeed: 4000,
          responsive: [
            {
              breakpoint: 1850,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 2,
                arrows: true,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
                arrows: false,
              },
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 2,
                arrows: false,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                arrows: false,
              },
            },
          ],
        });
      }
      if ($(".slider-2").length) {
        $(".slider-2").slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          cssEase: 'linear',
          autoplaySpeed: 4000,
          responsive: [
            {
              breakpoint: 1850,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1550,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 400,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      }
      if ($(".artist-slider").length) {
        $(".artist-slider").slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          cssEase: 'linear',
          autoplaySpeed: 4000,
          responsive: [
            {
              breakpoint: 1550,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
                arrows: false,
              },
            },
            {
              breakpoint: 370,
              settings: {
                slidesToShow: 1,
                arrows: false,
              },
            },
          ],
        });
      }
      if ($(".banner-slider").length) {
        $(".banner-slider").slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          cssEase: 'linear',
          autoplaySpeed: 4000,
          responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 3,
              },
            },
            
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                // arrows: false,
              },
            },
          ],
        });
      }
      if ($(".items-vertical-slider").length) {
        $(".items-vertical-slider").slick({
          slidesToShow: 5,
          arrows: false,
          dots: false,
          infinite: true,
          variableHeight: false,
          variableWidth: false,
          autoplay: true,
          vertical: true,
          cssEase: "linear",
          autoplaySpeed: 0,
          speed: 6000, 
          pauseOnFocus: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1399,
              settings: {
                slidesToShow: 1,
                vertical: false,
                variableWidth: true,
              },
            },
            
          ],
        });
      }
    },
    hamburgerMenu: function () {
      if ($(".hamburger-menu").length) {
        $('.hamburger-menu').on('click', function() {
          $('.bar').toggleClass('animate');
          $('.mobile-navar').toggleClass('active');
          return false;
        })
        $('.has-children').on ('click', function() {
             $(this).children('ul').slideToggle('slow', 'swing');
             $('.icon-arrow').toggleClass('open');
        });
      }
    },
    wishlistButton: function () {
      if ($(".wishlist-icon").length) {
        $('.wishlist-icon').on('click', function() {
          $(this).find('.fal').toggleClass('fas');
          return false;
        })
      }
    },
    dropdownButton: function () {
      if ($(".more-btn").length) {
        $('.more-btn').on('click', function() {
          $('.more-dropdown').toggleClass('active');
          return false;
        })
      }
    },
    continueEmail: function () {
      $('#continue-email').on('click',function(){
        $('.hide-link').hide()
        $('.login-sec').show()
      })
    },
    backToLogin: function () {
      $('#backtologin').on('click',function(){
        $('.hide-form').hide()
        $('.hide-link').show()
      })
    },
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
    },
    countdownInit: function (countdownSelector, countdownTime) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              '<li><h4 class="number">%D</h4><h5 class="number-text">Days</h5></li>\
              <li><i class="far fa-horizontal-rule"></i></li>\
              <li><h4 class="number">%H</h4><h5 class="number-text">Hrs</h5></li>\
              <li><i class="far fa-horizontal-rule"></i></li>\
              <li><h4 class="number">%M</h4><h5 class="number-text">Min</h5></li>\
              <li><i class="far fa-horizontal-rule"></i></li>\
              <li><h4 class="number">%S</h4><h5 class="number-text">Sec</h5></li>'
            )
          );
        });
      }
    },
  }
  Init.i();
})(window, document, jQuery);





$(document).ready(function () {
  // Function to add dark-bg class to the body of the target page
  function addDarkModeToTargetPage() {
    $('body').addClass('dark-bg');
  }

  // Check if navigating from dark home page to other pages
  $(document).on('click', 'a:not(.home-light)', function (event) {
    var isDarkModeEnabled = $('body').hasClass('dark-bg');
    var href = $(this).attr('href');

    // Append a query parameter to the href URL to indicate dark mode status
    if (isDarkModeEnabled && href !== '#' && !$(this).hasClass('external-link')) {
      $(this).attr('href', href + '?darkMode=true');
    }
  });

  // Check if dark mode is enabled on the target page and add dark-bg class
  var urlParams = new URLSearchParams(window.location.search);
  var isDarkModeEnabledOnNextPage = urlParams.get('darkMode');
  if (isDarkModeEnabledOnNextPage === 'true') {
    addDarkModeToTargetPage();
  }
});