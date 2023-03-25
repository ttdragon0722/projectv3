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

// 語系轉換 開關
$(".navbar_icon").click(function (e) {
    const dropdown_menu = $(this).children(".navbar_dropdown");
    if (dropdown_menu.is(":hidden")) {
        fadeIn(dropdown_menu);
        dropdown_menu.show();
    } else {
        fadeOut(dropdown_menu);
    }
});

// mobile header anim
const showAnim = gsap.from('.mobile_menu', {
    yPercent: -100,
    paused: true,
    duration: 0.2
}).progress(1);
// search bar anim
const searchAnim = gsap.from('.search_model', {
    yPercent: -120,
    paused: true,
    duration: 0.2
}).progress(1);
// anim apply
ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
        self.direction === -1 ? searchAnim.play() : searchAnim.reverse();
    }
})


// mobile menu open & close
const mobileMenuBg = $('.mobile_menu_bg');
const mobileMenuGroup = $('.mobile_menu_group');
const searchModel = $('.search_model');
$('.menu_btn').click((e) => {
    e.preventDefault();
    if (mobileMenuBg.is(':hidden')) {
        if (!searchModel.is(':hidden')) {
            gsap.to(searchModel,
                {
                    xPercent: 120,
                    duration: 0.2,
                    onComplete: () => {
                        this.hide();
                        gsap.set(this, {
                            xPercent: 120
                        });
                    }
                }
            )
        }
        fadeIn('.mobile_menu_item');
        fadeIn(mobileMenuBg);
        slideIn(mobileMenuGroup);
        mobileMenuBg.show();
        $('body').css('overflow-y', 'hidden');
    } else {
        slideOut(mobileMenuGroup);
        fadeOut(mobileMenuBg);
        $('body').css('overflow-y', 'scroll');
    }
});

mobileMenuBg.click(function (e) {
    if (e.target === this) {
        if (!searchModel.is(':hidden')) {
            gsap.to(searchModel,
                {
                    xPercent: 120,
                    duration: 0.2,
                    onComplete: () => {
                        searchModel.hide();
                        gsap.set(this, {
                            xPercent: 120
                        });
                    }
                }
            )
        }

        slideOut(mobileMenuGroup);
        fadeOut(mobileMenuBg);
        $('body').css('overflow-y', 'scroll');
    };
})
// search model open off
$(".search_btn").click(function (e) {
    if (searchModel.is(':hidden')) {
        if (!mobileMenuBg.is(':hidden')) {
            slideOut('.mobile_menu_group');
            fadeOut('.mobile_menu_bg');
            $('body').css('overflow-y', 'scroll');
        }
        gsap.set(".search_model", {
            xPercent: 120
        });
        searchModel.show();
        gsap.to(".search_model",
            {
                xPercent: 0,
                duration: 0.3,
                ease: "power"
            }
        )
    } else {
        gsap.to(searchModel,
            {
                xPercent: 120,
                duration: 0.2,
                onComplete: () => {
                    searchModel.hide();
                    gsap.set(searchModel, {
                        xPercent: 120
                    });
                }
            }
        )
    }
});

$('.search_close').click(function (e) {
    e.preventDefault();
    gsap.to(searchModel,
        {
            xPercent: 120,
            duration: 0.2,
            onComplete: () => {
                searchModel.hide();
                gsap.set(searchModel, {
                    xPercent: 100
                });
            }
        }
    )
});
