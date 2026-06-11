const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Hero Image Slider
const hero = document.querySelector(".hero");

if(hero){

    const slides = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg"
    ];

    let current = 0;

    setInterval(() => {

        current = (current + 1) % slides.length;

        hero.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('${slides[current]}')`;

    }, 4000);
}
