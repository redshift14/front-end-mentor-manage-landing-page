const toggleNavBtn = document.getElementById('toggle-nav');
const closeNavBtn = document.getElementById('close-nav');

const navMenu = document.querySelector('.nav-menu');

toggleNavBtn.addEventListener('click', () => {
    navMenu.style.visibility = 'visible';
    closeNavBtn.style.display = 'block';

    toggleNavBtn.style.display = 'none';
});

closeNavBtn.addEventListener('click', () => {
    navMenu.style.visibility = 'hidden';
    toggleNavBtn.style.display = 'block';

    closeNavBtn.style.display = 'none';
});

document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
        type: 'slide',
        perPage: 3,
        perMove: 1,
        focus: 'center',
        gap: '40px',
        pagination: false,
        arrows: false,
        breakpoints: {
            920: {
                perPage: 1,
                pagination: true,
                gap: '10px',
                width : '80vw',
            }
        },
        classes: {
            pagination: 'splide__pagination',
            page: 'splide__pagination__page custom-dots',
        },
    });

    splide.mount();

    const yearSpan = document.getElementById('current-year');
    let date = new Date();
    date = date.getFullYear();
    yearSpan.innerHTML = date;

});

let isDraggable = false;
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mousedown', () => {
        card.classList.add('grabbing');
    })
    card.addEventListener('mouseleave', () => {
        card.classList.remove('grabbing');
    })
    card.addEventListener('mouseup', () => {
        card.classList.remove('grabbing');
    })
})

const emailField = document.getElementById('email');
const emailBtn = document.getElementById('submit-email');
const errorMsg = document.getElementById('error-msg');

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

emailBtn.addEventListener('click', () => {
    if (emailField.value === '' || !validateEmail(emailField.value)) {
        emailField.classList.add('error-input');
        errorMsg.innerText = 'please enter a valid email';

        setTimeout(() => {
            emailField.classList.remove('error-input');
            errorMsg.innerText = '';
        }, 2000);
    }
})