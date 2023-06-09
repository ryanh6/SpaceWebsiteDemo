$(document).ready(function()
{
    var today = new Date();
    var date = today.getFullYear() + "-" + String((today.getMonth() + 1)).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0');
    var time = String(today.getHours()).padStart(2, '0') + ":" + String(today.getMinutes()).padStart(2, '0') + ":" + String(today.getSeconds()).padStart(2, '0');
    var currentTime = date + " " + time;

    const titleImageArray = ["images/spaceBackground1.webp", "images/spaceBackground4.jpg",
                             "images/spaceBackground6.jpg", "images/spaceBackground7.jpg", "images/spaceBackground8.jpg",
                             "images/spaceBackground9.jpg", "images/spaceBackground10.jpg"];
    const galleryImageArray = ["images/asteroid1.jpg", "images/asteroid2.jpg", "images/asteroid3.jpg", "images/asteroid4.jpg", "images/asteroidBanner.jpg",
                               "images/blackHole1.webp", "images/blackHole2.jpg", "images/blackHole3.jfif", "images/blackHole4.jpg", "images/blackHoleBanner.jpg",
                               "images/eclipse1.webp", "images/eclipse2.webp", "images/eclipse3.jpg", "images/eclipse4.jpg", "images/eclipseBanner.jpg",
                               "images/EuropaMoon2.jpg", "images/galaxy1.webp", "images/galaxy2.jfif", "images/galaxy3.webp", "images/galaxy4.jpg",
                               "images/galaxyBanner.jpg", "images/GanymedeMoon1.jpg", "images/moon4.jpg", "images/moonBanner.jpg", "images/nebula1.jpg",
                               "images/nebula2.jpg", "images/nebula3.jpg", "images/nebula4.webp", "images/nebulaBanner.jpg", "images/stars1.jpg",
                               "images/stars2.jpg", "images/stars3.webp", "images/stars4.jpg", "images/starsBanner.jpg", "images/titanMoon3.jpeg",
                               "images/earth1.webp", "images/jupiter1.jpg", "images/jupiter2.jpg", "images/mars1.jpg", "images/mars2.jpg",
                               "images/mars3.jpg", "images/mercury1.jpg", "images/mercury2.avif", "images/neptune1.jpg", "images/neptune2.webp",
                               "images/saturn1.jpg", "images/saturn2.jpg", "images/saturn3.png", "images/uranus1.jpg", "images/venus1.jpg", "images/venus2.jpg",
                               "images/spaceBackground1.webp", "images/spaceBackground2.jpg", "images/spaceBackground3.jpg", "images/spaceBackground4.jpg",
                               "images/spaceBackground5.jpg", "images/spaceBackground6.jpg", "images/spaceBackground7.jpg", "images/spaceBackground8.jpg",
                               "images/spaceBackground9.jpg", "images/spaceBackground10.jpg"];

    const shuffledTitleArray = titleImageArray.sort(function(){return 0.5 - Math.random()});
    const shuffledGalleryArray = galleryImageArray.sort(function(){return 0.5 - Math.random()});

    $(".time").ready(function(){
        $(".time").append("The current time is " + currentTime);
    });

    $("#titleBanner").ready(function(){
        var titlePageImage = shuffledTitleArray[0];

        $("#titleBanner").css({"background-image": "linear-gradient(rgba(20,40,80,0.5), rgba(20,40,80,0.5)), url(" + titlePageImage + ")"});
    });

    $(".random").ready(function(){
        for (let i = 0; i < 21; i++){
            $(".random").append("<img class = \"galleryImage\" src = \"" + shuffledGalleryArray[i] + "\"/>");
        }
    });

    $(".hiddenContent").hide();
    $(".hideButton").hide();

    $(".readMoreButton").click(function(){
        var classList = $(this).attr("class").split(" ");

        $("." + classList[1]).toggle();
    });

    $(".hideButton").click(function(){
        var classList = $(this).attr("class").split(" ");
        
        $("." + classList[1]).toggle();
        $("." + classList[2]).get(0).scrollIntoView();
    });
});