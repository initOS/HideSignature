(function($){
$(document).ready(function() {
    // check if javascript code should run on this page
    //  (run only on view.php)
    if ( ! window.location.pathname.search(/view\.php$/) )
        return;

    var hide_signature = function(i, el) {
        var text = $(el).html();
        var rxSignature = /<br>\n?(--\s+<br>[\s\S]*)/m;
        text = text.replace(rxSignature, "<div class=\"signature-frame\"><a href=\"#\">[+ Toggle Signature]</a><div class=\"signature\">$1</div></div>");
        $(el).html(text);
        $(el).find('.signature-frame > a').click(function(ev) {
            $(ev.target).parent().find('.signature').toggle();
            return false;
        });
    };

    $('td[colspan="5"]').each(hide_signature);
    $('.bugnote-note-public').each(hide_signature);
});
})(jQuery);
