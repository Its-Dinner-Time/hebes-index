const setObserver = (target, cb, option = { threshold: 1.0 }) => {
  const observer = new IntersectionObserver(cb, option);
  observer.observe(target);
};

const setSwiper = (selector) => {
  new Swiper(selector, {
    loop: true,
    autoplay: {
      delay: 1500,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
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

const setFadeAnimation = (target, count = 3, timeout = 3000) => {
  const imgs = target.querySelectorAll('img');
  let i = 0;
  setInterval(() => {
    for (const img of imgs) {
      img.classList.remove('show');
    }
    imgs[i % count].classList.add('show');
    i++;
  }, timeout);
};

const App = () => {
  // const bookClub = document.querySelector('[data-hb-target="bookClub"]');
  const banner = document.querySelector('[data-hb-target="banner"]');
  // setFadeAnimation(bookClub);
  setFadeAnimation(banner, 2, 3000);
  setSwiper('.hb__content-4-imgs');
  const content2Texts = document.querySelectorAll('.hb__content-1-desc > span');
  for (const text of content2Texts) {
    setObserver(text, (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
      }
    });
  }

  const content2Items = document.querySelectorAll('.hb__content-2-item');
  for (const item of content2Items) {
    setObserver(
      item,
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('show');
        }
      },
      { threshold: 0.5 },
    );
  }
};
document.addEventListener('DOMContentLoaded', App);
