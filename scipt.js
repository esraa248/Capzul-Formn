document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dot');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => slide.style.transform = `translateX(-${index * 100}%)`);
        dots.forEach((dot) => dot.classList.remove('active'));

        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.getAttribute('data-index'));
            showSlide(currentSlide);
        });
    });
});