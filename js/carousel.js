// carousel
const buttons = document.querySelectorAll("[data-carousel-btn]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselBtn == "next" ? 1 : -1;
        console.log(offset);
        console.log(button.dataset.carouselBtn);
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        let activeSlide = slides.querySelector("[data-active]");
        if (!activeSlide) {
            activeSlide = slides.firstElementChild;
            activeSlide.dataset.active = true;
        }

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
});

