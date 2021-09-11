$(document).ready(function () {
    var hidden = false; 
    
    $("button").click(function () {
        if (hidden) {
            $("#test").show();
        } else {
            $("#test").hide();
        }

        hidden = !hidden;
    });
});