const cardsWrapper = document.getElementById("cardsWrapper");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

let scrollPosition = 0;
const visibleCards = 3;
const cardWidth = cardsWrapper.querySelector(".card-prct").offsetWidth + 20;
const totalCards = cardsWrapper.children.length;

arrowLeft.addEventListener("click", () => {
    scrollPosition = Math.max(scrollPosition - cardWidth, 0);
    cardsWrapper.style.transform = `translateX(-${scrollPosition}px)`;
});

arrowRight.addEventListener("click", () => {
    const maxScroll = (totalCards - visibleCards) * cardWidth;
    scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
    cardsWrapper.style.transform = `translateX(-${scrollPosition}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
});