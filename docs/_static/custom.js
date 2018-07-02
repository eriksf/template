$(document).ready(function() {
    $(".solution").click(function(event) {
        var trigger = $(event.target).filter(".curl");
        if (trigger) {
            $("> .foldable", this).toggle(400);
            $("> .curl > em", this).toggleClass("fa-caret-right fa-caret-down");
            event.stopPropagation();
        }
    });

    $('.solution').each(function() {
        $("> .foldable", this).hide();
    });
});
