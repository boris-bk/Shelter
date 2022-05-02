var slideIndex = 0;
showSlides(slideIndex);
function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex == -1) slideIndex = 2;
    if (slideIndex == 7) slideIndex = 1;
    for (i = slideIndex; i < slideIndex + 3; i++) {
        slides[i].style.display = "block";
    }
}