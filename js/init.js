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
    $('.slider').carousel({
        indicators: true,
        //dist:0,
        numVisible: 1,
        fullWidth: true,
        shift: 0,
        padding: 50

    });
    $('.moveNextCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.slider').carousel('next');
    });
    $('.movePrevCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.slider').carousel('prev');
    });

    //  ----------------
    var carouselsee = $(".seelater");
    carouselsee.owlCarousel({
        itemsDesktop: 4,
        itemsDesktop: [1900, 4],
        itemsDesktopSmall: [1000, 3],
        itemsTablet: false,
        itemsMobile: [375, 2]
    });
    $('.seelater-prev').click(function() {
        carouselsee.trigger('owl.prev');
        return false;
    });
    $('.seelater-next').click(function() {
        carouselsee.trigger('owl.next');
        return false;
    });


    //  ----------------
    var carousel = $(".blog-our");
    carousel.owlCarousel({
        itemsDesktop: 4,
        itemsDesktop: [1920, 4],
        itemsMobile: [480, 2],

    });
    $('.blog-our-prev').click(function() {
        carousel.trigger('owl.prev');
        return false;
    });
    $('.blog-our-next').click(function() {
        carousel.trigger('owl.next');
        return false;
    });

    //------------------------------------------
    //  ----------------
    var carousel = $(".scase1");
    carousel.owlCarousel({
        itemsDesktop: 6,
        itemsDesktop: [1920, 6],
        itemsDesktopSmall: [1400, 5],
        itemsMobile: [420, 1],

    });
    $('.scase1-prev').click(function() {
        carousel.trigger('owl.prev');
        return false;
    });
    $('.scase1-next').click(function() {
        carousel.trigger('owl.next');
        return false;
    });

    //------------------------------------------
    var carousel2 = $(".snew");
    carousel2.owlCarousel({
        itemsDesktop: 6,
        itemsDesktop: [1920, 6],
        itemsDesktopSmall: [1400, 5],
        itemsMobile: [420, 1]
    });
    $('.snew-prev').click(function() {
        carousel2.trigger('owl.prev');
        return false;
    });

    $('.snew-next').click(function() {
        carousel2.trigger('owl.next');
        return false;
    });

    //------------------------------------------
    var carousel3 = $(".scase3");
    carousel3.owlCarousel({
        itemsDesktop: 6,
        itemsDesktop: [1920, 6],
        itemsDesktopSmall: [1400, 5],
        itemsMobile: [420, 1]
    });
    $('.scase3-prev').click(function() {
        carousel3.trigger('owl.prev');
        return false;
    });
    $('.scase3-next').click(function() {
        carousel3.trigger('owl.next');
        return false;
    });

    //------------------------------------------
    var carousel3 = $(".kategory");
    carousel3.owlCarousel({
        itemsDesktop: 8,
        itemsDesktop: [1920, 8],
        itemsDesktopSmall: [1400, 9],
        itemsMobile: [420, 2]
    });
    $('.scase3-prev').click(function() {
        carousel3.trigger('owl.prev');
        return false;
    });
    $('.scase3-next').click(function() {
        carousel3.trigger('owl.next');
        return false;
    });
    //------------------------------------------
    var carousel3 = $(".eshop");
    carousel3.owlCarousel({
        itemsDesktop: 5,
        itemsDesktop: [1920, 5],
        itemsDesktopSmall: [1400, 5],
        itemsMobile: [420, 1]
    });
    $('.scase3-prev').click(function() {
        carousel3.trigger('owl.prev');
        return false;
    });
    $('.scase3-next').click(function() {
        carousel3.trigger('owl.next');
        return false;
    });
    //------------------------------------------
    var carousel3 = $(".brands");
    carousel3.owlCarousel({
        itemsDesktop: 8,
        itemsDesktop: [1920, 8],
        itemsDesktopSmall: [1400, 5],
        itemsMobile: [420, 1]
    });
});

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