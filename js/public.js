
// animation function 
function slideIn(ele) {
    gsap.fromTo(ele,
        {
            x: '-100%'
        },
        {
            x: 0,
            duration: 0.5
        }

    );
};
function slideOut(ele) {
    gsap.to(ele,
        {
            x: '-100%',
        }

    );
};
function fadeIn(ele) {
    gsap.fromTo(ele,
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 0.2
        }
    );
};
function fadeOut(ele) {
    gsap.to(ele,
        {
            opacity: 0,
            duration: 0.2,
            onComplete: function () {
                $(ele).css('display', "none");
            }
        }
    );
};

// main
$(document).ready(function () {

    // 語系轉換 開關
    $(".navbar_icon").click(function (e) {
        let dropdown_menu = $(this).children(".navbar_dropdown");
        if (dropdown_menu.is(":hidden")) {
            fadeIn(dropdown_menu);
            dropdown_menu.show();
        } else {
            fadeOut(dropdown_menu);
        }
    });






});