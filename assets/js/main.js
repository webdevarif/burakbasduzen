;
(function($) {
    $(document).ready(function() {

        /*-------------------------------------------------------------------------------
        javaScript for offcanvas
        -------------------------------------------------------------------------------*/
        $(".menu-trigger").on("click", function() {
            $(".offcanvas-header").addClass("active");
            $(".menu-trigger").hide();
            $(".menu-close").show();
        });
        $(".menu-close").on("click", function() {
            $(".offcanvas-header").removeClass("active");
            $(".menu-close").hide();
            $(".menu-trigger").show();
        });

    });
}(jQuery));