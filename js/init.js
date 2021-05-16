(function($) {
    $.fn.HvrSlider = function() {
        return this.each(function() {
            var el = $(this);
            if (el.find('img').length > 1) {
                var hvr = $('<div>', {
                    class: 'hvr',
                    append: [
                        $('<div>', {
                            class: 'hvr__images',
                            append: $('<div>', {
                                class: 'hvr__sectors',
                            }),
                        }),
                        $('<div>', {
                            class: 'hvr__dots',
                        }),
                    ],
                    insertAfter: el,
                    prepend: el,
                });
                var hvrImages = $('.hvr__images', hvr);
                var hvrImage = $('img', hvr);
                var hvrSectors = $('.hvr__sectors', hvr);
                var hvrDots = $('.hvr__dots', hvr);
                el.prependTo(hvrImages);
                hvrImage.each(function() {
                    hvrSectors.prepend('<div class="hvr__sector"></div>');
                    hvrDots.append('<div class="hvr__dot"></div>');
                });
                $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
                var setActiveEl = function(el) {
                    hvrImage.hide().eq(el.index()).show();
                    $('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
                };
                $('.hvr__sector', hvrSectors).hover(function() {
                    setActiveEl($(this));
                });
                hvrSectors.on('touchmove', function(e) {
                    e.preventDefault();
                    var position = e.originalEvent.changedTouches[0];
                    var target = document.elementFromPoint(position.clientX, position.clientY);
                    if ($(target).is('.hvr__sector')) {
                        setActiveEl($(target));
                    }
                });
            }
        });
    };
})(jQuery)

function testJump(x) {
    var ml = ~~x.getAttribute('maxlength');
    if (ml && x.value.length >= ml) {
        do {
            x = x.nextSibling;
        }
        while (x && !(/text/.test(x.type)));
        if (x && /text/.test(x.type)) {
            x.focus();
        }
    }
}

$(document).ready(function() {

    // SWICHMENU ----------------
    $(".menu-triger").click(function() {
        $(".main-menu").slideToggle(200);
    });

    $(".main-menu .close").click(function() {
        $(".main-menu").slideToggle(200);
    });
    $(".rightcol-trigger").click(function() {
        $('.rightcol').toggle(300);
        //$('.rightcol').toggle("slide", {direction: "left" }, 1000);
    });
    $(".rightcol .close").click(function() {
        $(".rightcol").toggle(200);
    });

    // TABS ----------------
    $('.tabsauth').tabs();
    $('.pre-tabs').tabs();
    $('.tabs').tabs({
        // swipeable: true
    });

    // FORMS ----------------
    $(".phone").mask("+7 (999) 999 - 9999");
    $('select').formSelect();
    $('.spinner').carousel({
        dist: -20,
        numVisible: 3,
        indicators: true,
        shift: 20,
        padding: 20
    });
    // MODALS ----------------
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();

    // ACCORDION ----------------
    $('.expand').collapsible({
        accordion: false
    });

    $('.accord').collapsible({
        // accordion: false
    });

    $('.collapsible').collapsible({
        accordion: false
    });
    // SLIDERS ----------------
    $('.slider').slick();


    //  ----------------
    $('.seelater').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
    });


    //  ----------------
    $('.blog-our').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });


    //------------------------------------------
    //  ----------------

    $('.scase1').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6
    });



    //------------------------------------------
    $('.snew').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6
    });


    //------------------------------------------
    $('.scase3').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6
    });

    //------------------------------------------

    $('.kategory').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8
    });


    //------------------------------------------
    $('.eshop').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
    });

    //------------------------------------------
    $('.brands').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8
    });


    $('.images').HvrSlider();
    $('.zoom').zoom();

});