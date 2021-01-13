"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _carouselsee$owlCarou, _carousel$owlCarousel, _carousel2$owlCarouse, _carousel3$owlCarouse, _carousel3$owlCarouse2, _carousel3$owlCarouse3, _carousel3$owlCarouse4;

  // SWICHMENU ----------------
  $(".menu-triger").click(function () {
    $(".main-menu").slideToggle(200);
  });
  $(".main-menu .close").click(function () {
    $(".main-menu").slideToggle(200);
  });
  $(".rightcol-trigger").click(function () {
    $('.rightcol').toggle(300); //$('.rightcol').toggle("slide", {direction: "left" }, 1000);
  });
  $(".rightcol .close").click(function () {
    $(".rightcol").toggle(200);
  }); // TABS ----------------

  $('.tabsauth').tabs();
  $('.pre-tabs').tabs();
  $('.tabs').tabs({// swipeable: true
  }); // FORMS ----------------

  $(".phone").mask("+7 (999) 999 - 9999");
  $('select').formSelect();
  $('.spinner').carousel({
    dist: -20,
    numVisible: 3,
    indicators: true,
    shift: 20,
    padding: 20
  }); // MODALS ----------------

  $('.dropdown-trigger').dropdown();
  $('.modal').modal(); // ACCORDION ----------------

  $('.expand').collapsible({
    accordion: false
  });
  $('.accord').collapsible({// accordion: false
  }); // SLIDERS ----------------

  $('.slider').carousel({
    indicators: true,
    //dist:0,
    numVisible: 1,
    fullWidth: true,
    shift: 0,
    padding: 50
  });
  $('.moveNextCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.slider').carousel('next');
  });
  $('.movePrevCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.slider').carousel('prev');
  }); //  ----------------

  var carouselsee = $(".seelater");
  carouselsee.owlCarousel((_carouselsee$owlCarou = {
    itemsDesktop: 4
  }, _defineProperty(_carouselsee$owlCarou, "itemsDesktop", [1900, 4]), _defineProperty(_carouselsee$owlCarou, "itemsDesktopSmall", [1000, 3]), _defineProperty(_carouselsee$owlCarou, "itemsTablet", false), _defineProperty(_carouselsee$owlCarou, "itemsMobile", [375, 2]), _carouselsee$owlCarou));
  $('.seelater-prev').click(function () {
    carouselsee.trigger('owl.prev');
    return false;
  });
  $('.seelater-next').click(function () {
    carouselsee.trigger('owl.next');
    return false;
  }); //  ----------------

  var carousel = $(".scase1");
  carousel.owlCarousel((_carousel$owlCarousel = {
    itemsDesktop: 6
  }, _defineProperty(_carousel$owlCarousel, "itemsDesktop", [1920, 6]), _defineProperty(_carousel$owlCarousel, "itemsDesktopSmall", [1400, 5]), _defineProperty(_carousel$owlCarousel, "itemsMobile", [420, 1]), _carousel$owlCarousel));
  $('.scase1-prev').click(function () {
    carousel.trigger('owl.prev');
    return false;
  });
  $('.scase1-next').click(function () {
    carousel.trigger('owl.next');
    return false;
  }); //------------------------------------------

  var carousel2 = $(".snew");
  carousel2.owlCarousel((_carousel2$owlCarouse = {
    itemsDesktop: 6
  }, _defineProperty(_carousel2$owlCarouse, "itemsDesktop", [1920, 6]), _defineProperty(_carousel2$owlCarouse, "itemsDesktopSmall", [1400, 5]), _defineProperty(_carousel2$owlCarouse, "itemsMobile", [420, 1]), _carousel2$owlCarouse));
  $('.snew-prev').click(function () {
    carousel2.trigger('owl.prev');
    return false;
  });
  $('.snew-next').click(function () {
    carousel2.trigger('owl.next');
    return false;
  }); //------------------------------------------

  var carousel3 = $(".scase3");
  carousel3.owlCarousel((_carousel3$owlCarouse = {
    itemsDesktop: 6
  }, _defineProperty(_carousel3$owlCarouse, "itemsDesktop", [1920, 6]), _defineProperty(_carousel3$owlCarouse, "itemsDesktopSmall", [1400, 5]), _defineProperty(_carousel3$owlCarouse, "itemsMobile", [420, 1]), _carousel3$owlCarouse));
  $('.scase3-prev').click(function () {
    carousel3.trigger('owl.prev');
    return false;
  });
  $('.scase3-next').click(function () {
    carousel3.trigger('owl.next');
    return false;
  }); //------------------------------------------

  var carousel3 = $(".kategory");
  carousel3.owlCarousel((_carousel3$owlCarouse2 = {
    itemsDesktop: 8
  }, _defineProperty(_carousel3$owlCarouse2, "itemsDesktop", [1920, 8]), _defineProperty(_carousel3$owlCarouse2, "itemsDesktopSmall", [1400, 9]), _defineProperty(_carousel3$owlCarouse2, "itemsMobile", [420, 2]), _carousel3$owlCarouse2));
  $('.scase3-prev').click(function () {
    carousel3.trigger('owl.prev');
    return false;
  });
  $('.scase3-next').click(function () {
    carousel3.trigger('owl.next');
    return false;
  }); //------------------------------------------

  var carousel3 = $(".eshop");
  carousel3.owlCarousel((_carousel3$owlCarouse3 = {
    itemsDesktop: 5
  }, _defineProperty(_carousel3$owlCarouse3, "itemsDesktop", [1920, 5]), _defineProperty(_carousel3$owlCarouse3, "itemsDesktopSmall", [1400, 5]), _defineProperty(_carousel3$owlCarouse3, "itemsMobile", [420, 1]), _carousel3$owlCarouse3));
  $('.scase3-prev').click(function () {
    carousel3.trigger('owl.prev');
    return false;
  });
  $('.scase3-next').click(function () {
    carousel3.trigger('owl.next');
    return false;
  }); //------------------------------------------

  var carousel3 = $(".brands");
  carousel3.owlCarousel((_carousel3$owlCarouse4 = {
    itemsDesktop: 8
  }, _defineProperty(_carousel3$owlCarouse4, "itemsDesktop", [1920, 8]), _defineProperty(_carousel3$owlCarouse4, "itemsDesktopSmall", [1400, 5]), _defineProperty(_carousel3$owlCarouse4, "itemsMobile", [420, 1]), _carousel3$owlCarouse4));
});

function testJump(x) {
  var ml = ~~x.getAttribute('maxlength');

  if (ml && x.value.length >= ml) {
    do {
      x = x.nextSibling;
    } while (x && !/text/.test(x.type));

    if (x && /text/.test(x.type)) {
      x.focus();
    }
  }
}