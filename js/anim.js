// document
// https://greensock.com/docs/v3/GSAP/Timeline
// https://greensock.com/docs/v3/Plugins/ScrollTrigger


TL = gsap.timeline();
TL.set(
    '.main_subtitle',
    {
        y: '-30%'
    }
).set(
    '.main_wrap_group',
    {
        y: '-30%'
    }
).set(
    '.keep_read_btn',
    {
        y: '-30%'
    }
).set(
    '#carousel', { y: "-10%" }
);

TL.to(
    '.main_title',
    {
        opacity: 1,
        duration: 1,
        y: 0
    }
).to(
    '.main_subtitle',
    {
        opacity: 1,
        duration: 1,
        y: 0
    },
    '>'
).to(
    '.main_wrap_group',
    {
        opacity: 1,
        duration: 1,
        y: 0
    },
    '<'
).to(
    '.keep_read_btn',
    {
        opacity: 1,
        duration: 1,
        y: 0
    },
    '<'
);


gsap.to(
    '#carousel',
    {
        scrollTrigger: {
            trigger: '#carousel',
            start: 'top 10%'
        },
        opacity: 1, y: 0, ease: "ease-in",
        duration: 1
    }
);
gsap.to(
    '.service_item',
    {
        scrollTrigger: {
            trigger: '.service_item',
            start: 'top 80%'
        },
        opacity: 1,
        duration: 1,
        stagger: 0.2
    }
);

