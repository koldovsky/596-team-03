(function() {
    const items = [
        ` <div class="testimonials-item">
        <div class="testimonials-icon">
            <img src="img/tourist-review.webp" alt="tourist-review">
        </div>
        <article>
            <h4 class="testimonials-username">Cole Tiers</h4>
            <p class="testimonials-user"> I wanted to see Norway since childhood when I saw a stylish house right in the middle of the Norwegian forest in some magazine. I  thought then that I also want to live in such a house. This dream came true a few months ago on a tour of Norway. I am very happy! Thanks, guys! </p>
            <p class="testimonials-date">October 28, 2018</p>
        </article>
    </div>`,
    `<div class="testimonials-item">
    <div class="testimonials-icon">
        <img src="img/family-review.webp" alt="family-review">
    </div>
    <article>
        <h4 class="testimonials-username">Lilland Forester</h4>
        <p class="testimonials-user"> We went on this tour with our daughter, she was 5 years old. I was worried that it would be difficult for her but everything went great. We spent nights in good hotels with excellent breakfasts. My daughter always had something to eat, and the nature in Norway fascinated her even more than us!</p>
        <p class="testimonials-date"> May 13, 2019</p>
    </article>
    </div>`,
    `<div class="testimonials-item">
    <div class="testimonials-icon">
        <img src="img/gull-review.webp" alt="gul-review">
    </div>
    <article>
        <h4 class="testimonials-username">Alice Hendricks</h4>
        <p class="testimonials-user">I still can't believe I have seen the Northern Lights with my own eyes! That was incredible! When we arrived in Tromsø, it was constantly snowing, the weather was bad, and the guide said that we were out of luck, most likely. But on the last night, right at midnight, the clouds left, and I saw it! It was magical!</p>
        <p class="testimonials-date">January 12, 2020</p>
    </article>
    </div> `
    ];
    
    let currentIdx = 0;
    
    function showCurrentSlide() {
        const ItemsContainer = document.querySelector('.items-container');
        ItemsContainer.innerHTML = items[currentIdx];
    }
    
    function nextSlide() {
        currentIdx++;
        if (currentIdx >= items.length) currentIdx = 0;
        showCurrentSlide();
    }
    
    function prevSlide() {
        currentIdx--;
        if (currentIdx <= 0) currentIdx = items.length - 1;
        showCurrentSlide();
    }
    
    // setInterval(nextSlide, 2000);
    nextSlide()

    document.querySelector('.testimonials-slider .slide-prev').addEventListener('click', prevSlide);
    document.querySelector('.testimonials-slider .slide-next').addEventListener('click', nextSlide);
})();