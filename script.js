$(document).ready(function()
{
    //const array = [1,2,3,4,5,6,7,8,9];
    const imageArray = ["images/asteroid1.jpg", "images/asteroid2.jpg", "images/asteroid3.jpg", "images/asteroid4.jpg", "images/asteroidBanner.jpg",
                        "images/blackHole1.webp", "images/blackHole2.jpg", "images/blackHole3.jfif", "images/blackHole4.jpg", "images/blackHoleBanner.jpg",
                        "images/eclipse1.webp", "images/eclipse2.webp", "images/eclipse3.jpg", "images/eclipse4.jpg", "images/eclipseBanner.jpg",
                        "images/EuropaMoon2.jpeg", "images/galaxy1.webp", "images/galaxy2.jfif", "images/galaxy3.webp", "images/galaxy4.jpg",
                        "images/galaxyBanner.jpg", "images/GanymedeMoon1.jpg", "images/moon4.jpg", "images/moonBanner.jpg", "images/nebula1.jpg",
                        "images/nebula2.jpg", "images/nebula3.jpg", "images/nebula4.webp", "images/nebulaBanner.jpg", "images/stars1.jpg",
                        "images/stars2.jpg", "images/stars3.webp", "images/stars4.jpg", "images/starsBanner.jpg", "images/titanMoon3.jpeg"];

    const shuffledArray = imageArray.sort(function(){return 0.5 - Math.random()});

    $(".random").ready(function(){
        for (let i = 0; i < 15; i++){
            $(".random").append("<img class = \"galleryImage\" src = \"" + shuffledArray[i] + "\"/>");
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