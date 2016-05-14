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
});


