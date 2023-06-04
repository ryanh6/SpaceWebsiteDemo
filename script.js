$(document).ready(function()
{
    const array = [1,2,3,4,5,6,7,8,9];
    const shuffledArray = array.sort(function(){return 0.5 - Math.random()});

    $(".random").ready(function(){
        $("p").html(shuffledArray);
    });

    $(".hiddenContent").hide();
    $(".hideButton").hide();

    $(".readMoreButton").click(function(){
        var classList = $(this).attr("class").split(" ");
        //alert(classList[1]);

        $("." + classList[1]).toggle();
    });

    $(".hideButton").click(function(){
        var classList = $(this).attr("class").split(" ");
        //alert(classList[1]);
        
        $("." + classList[1]).toggle();
        $("." + classList[2]).get(0).scrollIntoView();
    });
});