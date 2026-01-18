jQuery(function () {
    jQuery(".js-accordion").on("click", function () {
        jQuery(this).toggleClass("is-open");
        jQuery(this).next(".accordion__content").slideToggle();
    });
});