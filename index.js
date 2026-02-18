// import {} from "./data.js";

function navToggle(){
            console.log("clicked");
            let navigation = document.querySelector(".navigation");
            navigation.classList.toggle("navActive");
};

$(document).ready(function(){
    $('.postWrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
