const setSwiper = (selector) => {
  new Swiper(selector, {
    loop: true,
    autoplay: {
      delay: 1500,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
};

const setFadeAnimation = (target) => {
  const imgs = target.querySelectorAll('img');
  let i = 0;
  setInterval(() => {
    for (const img of imgs) {
      img.classList.remove('show');
    }
    imgs[i % 3].classList.add('show');
    i++;
  }, 3000);
};

const App = () => {
  const bookClub = document.querySelector('[data-hb-target="bookClub"]');
  setFadeAnimation(bookClub);
  setSwiper('.hb__content-4-imgs');
};
document.addEventListener('DOMContentLoaded', App);
