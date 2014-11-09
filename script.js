/**
 * Created by Janek on 2014-11-07.
 */
$(document).ready(function() {
    $("#circle").addClass("red");
    setInterval(function () {
        if($("#circle").hasClass("red")) {
            $("#circle").removeClass("red");
            $("#circle").addClass("blue");
        }
        else {
            $("#circle").removeClass("blue");
            $("#circle").addClass("red");
        }

    }, 5000);
});
