$(document).ready(function() {

    // add nice scroll to body
    $('body').niceScroll({
        cursorcolor:'#000',
        cursorwidth:'10px',
        cursorborder:'none'
    });

    // showing items of services section on scrolling
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $('.navbar').height() && $('.header-section').height()/2) {
            $('.box').delay(100).fadeIn(3000).animate({opacity: '1'});
            $('.service-one').delay(300).fadeIn(5000).animate({ top: '0', opacity: '1'}); }
        if ($(window).scrollTop() >= $('.navbar').height() && $('.header-section').height()) {
            $('.service-two').delay(800).fadeIn(5000).animate({ top: '0', opacity: '1'}); }
        if ($(window).scrollTop() >= $('.navbar').height() && $('.header-section').height() && $('.service-one').height()) {
            $('.service-three').delay(1500).fadeIn(5000).animate({ top: '0', opacity: '1'}); }
        if ($(window).scrollTop() >= $('.navbar').height() && $('.header-section').height() && $('.service-two').height()) {
            $('.service-four').delay(2000).fadeIn(5000).animate({ top: '0', opacity: '1'});}


        if ($(window).scrollTop() >= $('.services-section').height()/2) {
            $('.no-padding').eq(0).delay(2000).fadeIn(5000).animate({top: '0', opacity: '1'});
            $('.no-padding').eq(1).delay(3000).fadeIn(5000).animate({top: '0', opacity: '1'});
        }

        if ($(window).scrollTop() >= 3000) {
            $('.blog-section .more-margin-one').eq(0).delay(800).fadeIn(5000).animate({ top: '0', opacity: '1'});
            $('.blog-section .more-margin-one').eq(1).delay(1000).fadeIn(5000).animate({ top: '0', opacity: '1'});
            $('.blog-section .more-margin-one').eq(2).delay(1200).fadeIn(5000).animate({ top: '0', opacity: '1'}); }

        if ($(window).scrollTop() >= 1500) {
            $('.team-section .hide-team').eq(0).delay(800).fadeIn(5000).animate({ top: '0', opacity: '1'});
            $('.team-section .hide-team').eq(1).delay(1500).fadeIn(5000).animate({ top: '0', opacity: '1'}); }

        if ($(window).scrollTop() >= 320) {
            $('.blog-section .more-margin-two').eq(0).delay(800).fadeIn(5000).animate({ top: '0', opacity: '1'});
            $('.blog-section .more-margin-two').eq(1).delay(1000).fadeIn(5000).animate({ top: '0', opacity: '1'});
            $('.blog-section .more-margin-two').eq(2).delay(1200).fadeIn(5000).animate({ top: '0', opacity: '1'});
            $('.blog-section .more-margin-two').eq(3).delay(1300).fadeIn(5000).animate({ top: '0', opacity: '1'});
            $('.blog-section .more-margin-two').eq(4).delay(1400).fadeIn(5000).animate({ top: '0', opacity: '1'});
            $('.blog-section .more-margin-two').eq(5).delay(1500).fadeIn(5000).animate({ top: '0', opacity: '1'}); }
         })

            //console.log($(window).scrollTop())

        $('.nav .dropdown').hover(function() {
              $('.dropdown-menu').css('display','block');
        }, function() {
            $('.dropdown-menu').css('display','none');
        })


        //slick at products section
        if ($(window).width() <= 620 ) {
            $('.customer').slick({
                    slidesToShow: 1,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    touchMove: false,
                    slidesToScroll: 1,
                    draggable: true,
                    centerMode: true,
            });
            
            $('.slick-prev, .slick-next').addClass('hidden-xs');
        } 
        else {
            $('.customer').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                touchMove: false,
                slidesToScroll: 1,
                draggable: true,
                centerMode: true
            });
            $('.slick-prev, .slick-next').removeClass('hidden-xs');
        }
    
})