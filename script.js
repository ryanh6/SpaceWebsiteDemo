$(document).ready(function()
{
    alert("Your document is ready to go");

    $(".hiddenContent").hide();
    $(".hideButton").hide();

    $(".readMoreButton").click(function(){
        var classList = $(this).attr("class").split(" ");
        alert(classList[1]);

        $("." + classList[1]).toggle();

        //$(".hiddenContent").toggle();
        //$(".readMoreButton").toggle();
    });

    $(".hideButton").click(function(){
        var classList = $(this).attr("class").split(" ");
        alert(classList[1]);
        
        $("." + classList[1]).toggle();
    });
});