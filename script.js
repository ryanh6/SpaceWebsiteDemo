$(document).ready(function()
{
    //const array = [1,2,3,4,5,6,7,8,9];
    const imageArray = ["images/asteroid1.jpg", "images/asteroid2.jpg", "images/asteroid3.jpg", "images/asteroid4.jpg", "images/asteroidBanner.jpg",
                        "images/blackHole1.webp", "images/blackHole2.jpg", "images/blackHole3.jfif", "images/blackHole4.jpg", "images/blackHoleBanner.jpg"];
    const shuffledArray = imageArray.sort(function(){return 0.5 - Math.random()});

    $(".random").ready(function(){
        for (let i = 0; i < 4; i++){
            $(".random").html("<img class = \"galleryImage\" src = \"" + shuffledArray[i] + "\"/>");
        }
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