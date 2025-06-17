// h1
document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector("header h1");
    if (title) {
        // Schakel tijdelijk transitions uit
        title.style.transition = "none";

        // Pas de rotatie toe
        title.style.transform = "rotate(-90deg)";
        title.style.transformOrigin = "left bottom";

        // Forceer een reflow zodat de style direct wordt toegepast
        void title.offsetWidth;

        // (optioneel) Transition daarna weer aanzetten als je 'm later nodig hebt
        // title.style.transition = "";
    }
});




// image rotation
const rotatingImages = document.querySelectorAll('header img:nth-of-type(2)');

function updateRotation() {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition * 0.2;

    rotatingImages.forEach(image => {
        image.style.transform = `rotate(${rotationAngle}deg)`;
    });
}

window.addEventListener('scroll', updateRotation);