$(function() {
    //ページ内リンク
    $('a[href ^= "#"]').click(function() {
        var speed = 600; // ミリ秒
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });

    //▼TOPへ戻るボタン
    var topBtn = $('.page-top');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒の速度
    });

    // ヘッター固定
    $('.nav').each(function() {
        var $window = $(window),
            $nav = $(this),
            navOffsetTop = $nav.offset().top;
        $window.on('scroll', function() { //スクロールされるたびに関数が発動
            if ($window.scrollTop() > navOffsetTop) {
                $nav.addClass('fixed');
            } else {
                $nav.removeClass('fixed');
            }
        });
        $window.trigger('scroll');
    }); //each

    // リンク付与
    var $window = $(window),
        $home = $('#home'),
        $nav = $('.nav'),
        $navList = $('.nav__lists'),
        $navLink = $('.nav__list'),
        $navLink01 = $('.nav__list--01'),
        $navLink02 = $('.nav__list--02'),
        $navLink03 = $('.nav__list--03'),
        $haneda = $('#haneda').offset().top,
        $ariake = $('#ariake').offset().top;
    $window.on('scroll', function() {
        if ($window.scrollTop() > $haneda - 100) {
            $navLink01.removeClass('is-active');
            $navLink02.addClass('is-active');
        } else if ($window.scrollTop() < $haneda - 100) {
            $navLink01.addClass('is-active');
            $navLink02.removeClass('is-active');
        }
        if ($window.scrollTop() > $ariake - 100) {
            $navLink02.removeClass('is-active');
            $navLink03.addClass('is-active');
        } else {
            $navLink03.removeClass('is-active');
        }

    });
}); // function