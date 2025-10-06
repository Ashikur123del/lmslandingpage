const floatingEls = document.querySelectorAll('.floating');
floatingEls.forEach(el => {
    el.animate(
        [
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0px)' }
        ],
        {
            duration: 3000,
            iterations: Infinity
        }
    );
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


const counters = document.querySelectorAll('.counter');
const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5 // Start counting when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When the element enters the viewport, start the counting animation
            animateCounter(entry.target);
            // Stop observing once the animation has started
            observer.unobserve(entry.target);
        }
    });
}, options);



// Function to handle the counting animation
function animateCounter(element) {
    const target = +element.getAttribute('data-count');
    const isK = target >= 1000;
    let count = 0;
    const duration = 2000; 
    const step = target / (duration / 10); 

    const updateCount = () => {
        count += step;

        if (count < target) {
            let displayValue = Math.ceil(count);
            let text = '';

            if (isK) {
                text = (displayValue / 1000).toFixed(0) + 'k+';
            } else {
                text = displayValue + '+';
            }

            element.innerText = text;
            requestAnimationFrame(updateCount);
        } else {
            let finalValue = isK ? (target / 1000).toFixed(0) + 'k+' : target + '+';
            element.innerText = finalValue;
        }
    };

    requestAnimationFrame(updateCount);
}
counters.forEach(counter => {
    observer.observe(counter);
});


 const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

const myTestimonialSwiper= new Swiper('.myTestimonialSwiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });