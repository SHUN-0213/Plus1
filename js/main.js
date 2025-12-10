jQuery(".js-accordion").on("click", function () {
  jQuery(this).next().slideToggle();
});