$(document).ready(function() {
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    $('#nav').onePageNav();

    var s2 = $('#s2').offset().top-50;
    $(window).scroll(function(){
        if ($(this).scrollTop() > s2) {
            $('.m_fixed-menu').css('transform', 'translateY(0)');
        } else {
            $('.m_fixed-menu').css('transform', 'translateY(-120%)');
        }
    });

  $('.main-nav a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  //Galleries
  $('.gallery-item').magnificPopup({
    type: 'image',
    fixedContentPos: true,
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    gallery:{
      enabled:true,
      tPrev: 'Предыдущая', // title for left button
      tNext: 'Следующая', // title for right button
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
    }
  });
  $('.gallery-item-second').magnificPopup({
    type: 'image',
    fixedContentPos: true,
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    gallery:{
      enabled:true,
      tPrev: 'Предыдущая', // title for left button
      tNext: 'Следующая', // title for right button
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
    }
  });
  $('.gallery-item-third').magnificPopup({
    type: 'image',
    fixedContentPos: true,
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    gallery:{
      enabled:true,
      tPrev: 'Предыдущая', // title for left button
      tNext: 'Следующая', // title for right button
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
    }
  });

  $('.gallery-item-schemes').magnificPopup({
    type: 'image',
    mainClass: 'g-hook',
    fixedContentPos: false,
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      },
      verticalFit: true,
      markup: '<div class="mfp-figure hook">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
              '<div class="m_hook"><div class="wrapper"><div class="helper-parent"><div class="helper"><p>Отправьте Ваш запрос и получите индвидуальное предложение</p><div class="send"><a href="#" id="m-trigger" class="button-send"><span class="bg-normal"></span><span class="bg-hover"></span><span class="icon-send"></span><span class="label">Отправить запрос</span></a></div><div class="tel"><span>Позвонить:</span><a href="#">+7 (921) 181-33-16</a></div></div></div></div></div>'+
            '</div>'+
          '</div>'
    },
    gallery:{
      enabled:true,
      tPrev: 'Предыдущая', // title for left button
      tNext: 'Следующая', // title for right button
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
    },
    callbacks: {
      open: function() {
        var magnificPopup = $.magnificPopup.instance;
        $('#m-trigger').on('click', function(){
          magnificPopup.close();
          $('.m_header .modal').trigger('click');
        });
      }
    }
  });

  $('.modal').magnificPopup({
    type: 'inline',
    mainClass: 'modal-prob'
  });

  $('#myfile').change(function(){

    if (!$(this).val() == '') {
      $('.file-found').addClass('added').html('Добавлен:'+'<br />'+$(this).val());
    } else {
      $('.file-found').removeClass('added').html('Никакой файл еще не добавлен');
    }
  });
});

$(window).on('load', function(){

  $('#page-preloader').fadeIn('250', function(){
    setTimeout(function () {
       $('#page-preloader').find('.logo').addClass('loaded').prev().addClass('loaded').delay(500).fadeIn('300', function(){
            $('#page-preloader .text').fadeOut('250', function(){
              $('body, html').removeClass('unload');
              $('#page-preloader').hide();
            });
        });
    }, 1500);
  })
});


