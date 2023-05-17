$(document).ready(function()
{
    alert("Your document is ready to go");

    $(".hiddenContent").hide();

    $(".readMoreButton").click(function(){
        $(".hiddenContent").toggle();
        $(".readMoreButton").toggle();
    });

    $(".hideButton").click(function(){
        $(".readMoreButton").toggle();
        $(".hiddenContent").toggle();
    });
});