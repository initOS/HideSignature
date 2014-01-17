/*
    This file is part of HideSignature.

    HideSignature is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    HideSignature is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with HideSignature.  If not, see <http://www.gnu.org/licenses/>.
*/

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
