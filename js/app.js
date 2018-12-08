$(function() {
    // use pretty print to render all the code snippet
    $("pre").addClass("prettyprint");
    $.getScript("https://cdn.jsdelivr.net/gh/google/code-prettify/loader/run_prettify.js");

    $(".archive-entry ul").hide();
    $(".archive-entry").click(function() {
        $(this).find("ul").toggle();
    });
});
