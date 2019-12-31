const navSlide = () => {
    const burger = document.querySelector('.Burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+1.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();


function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;


            //Check for valudation
            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'password' && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else { //animation
                parent.style.animation = "shake 0.5s ease";
            }

            //to get rid of animation

            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            });
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        console.log('not enough characters');
        error("rgb(189,87,87");
    } else {
        error("rgb(84,189,130)");
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error("rgb(189,87,87");
        return true;
    } else {
        error("rgb(84,189,130)");
    }

}

// to get animation
function nextSlide(parent, nextForm) {
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");

}

function error(color) {
    document.body.style.backgroundColor = color;

}
animatedForm();