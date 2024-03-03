// hero swiper


var container = document.querySelector(".hero");
var heroSlider = new Swiper(".hero__swiper", {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 300,
  autoplay: {
    delay: 5000,
  },
});

// dropdown menu

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 28,
});
})

const btns = document.querySelectorAll(".header-list__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

// choices

const element = document.querySelector(".select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  position: "bottom",
});

// custom checkbox

const labels = document.querySelectorAll('.gallery-left__checkbox-label');

        labels.forEach(label => {
            label.addEventListener('keydown', (event) => {
                if (event.key === ' ' || event.key === 'Enter') {
                    event.preventDefault();
                    const checkbox = label.querySelector('input[type="checkbox"]');
                    checkbox.checked = !checkbox.checked;
                }
            });
        });

// gallery swiper

const gallerySwiper = new Swiper('.gallery-right__carousel', {

  navigation: {
    nextEl: '.gallery-btn--next',
    prevEl: '.gallery-btn--prev',
  },
  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
  },
  keyboard: {
    enabled: true,
  },
  slidesPerView: 1,
  breakpoints: {
    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

});


// accordion & catalog

let catalogBtn = document.querySelectorAll(".catalog__content-list__btn");
let catalogContent = document.querySelectorAll(".catalog__content-info");

catalogBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    catalogBtn.forEach(function (btn) {
      btn.classList.remove("catalog__content-list__btn--active");
    });
    e.currentTarget.classList.add("catalog__content-list__btn--active");

    catalogContent.forEach(function (element) {
      element.classList.remove("catalog__content-info--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("catalog__content-info--active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".catalog__content-box", {
    duration: 700,
    elementClass: "catalog__content-item",
    triggerClass: "catalog__content-button",
    panelClass: "catalog__content-panel",
    activeClass: "catalog__content-box--active",
    showMultiple: false,
    openOnInit: [0],
    collapse: true,
    collapsible: true,
    active: false,
  });
});

// events swiper

let eventsSlider = new Swiper(".events-swiper", {
  slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {

      532: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },

      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      }


    },

    keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: '.event-button--next',
    prevEl: '.event-button--prev',
  }
});

// partners swiper

  let partnersSlider = new Swiper(".partners-swiper", {

    slidesPerView: 3,
    slidesPerGroup: 3,
      keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    spaceBetween: 50,
    // width: 1441,

    breakpoints: {

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        width: 195,
      },

      740: {
        slidesPerView: 2,
        spaceBetween: 34,
        width: 560,
      },

      956 :{
        slidesPerView: 2,
        spaceBetween: 50,
        width: 818,
      },

      1400 :{
        slidesPerView: 3,
        width: 1191,

      },
      1651 :{
        slidesPerView: 3,
        width: 1441,
      },

    },

    navigation: {
      nextEl: '.partners-btn--next',
      prevEl: '.partners-btn--prev',
    },
});

// map

ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("map", {
     center: [55.758468, 37.601088],
    zoom: 14,
    controls: []
  },
  {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "300px", right: "20px" },
    geolocationControlFloat: "none",
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "200px", right: "20px" }
  }
  );

  myMap.controls.add('zoomControl');
  myMap.controls.add('geolocationControl');

var zoomControl = new ymaps.control.ZoomControl({
    options: {
        size: "small",
        position: {
          top: '270px',
          right: '20px'
      },
      maxWidth: 120
    }
});

var geolocationControl = new ymaps.control.GeolocationControl({
  options: {
      size: "small",
      position: {
        top: '370px',
        right: '20px'
    },
    maxWidth: 120
  }
});

  var myPlacemark = new ymaps.Placemark(
    [55.758468, 37.601088],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/location.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -20],
    }
  );

  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable('scrollZoom');

}

// form validator & input mask

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate(".js-form", {
  colorWrong: "#D11616",
  position: 'top',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },

  messages: {
    name: "Вы не ввели имя",
    tel: {
      required: "Вы не ввели телефон",
      function: "Недопустимый формат",
    },
  },
});

// burger

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__menu");
let menuLinks = menu.querySelectorAll(".header-nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__menu--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__menu--active");
    document.body.classList.remove("stop-scroll");
  });
});


// search

let searchBtn = document.querySelector(".header-top__search-btn");

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('search-btn-final')
  searchBtn.classList.toggle('search-btn-initial')
})


document
  .querySelector(".header-top__search-btn-open")
  .addEventListener("click", function () {
    document.querySelector(".search-form-mobile").classList.add("search-form__active");
    document.querySelector(".header-top__search-container").classList.add("header-top__search-container-active");
    this.classList.add("active");
  });

document
  .querySelector(".form-btn__close")
  .addEventListener("click", function () {
    document.querySelector(".search-form-mobile").classList.remove("search-form__active");
    document.querySelector(".header-top__search-container").classList.remove("header-top__search-container-active");
    this.classList.remove("active");
    document.querySelector(".header-top__search-btn").classList.remove("search-btn-final")

  });


document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".search-form-mobile");
  if (!target.closest(".header-top__search-container")) {
    form.classList.remove("search-form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header-top__search-btn-open").classList.remove("active");
  }
});

// smooth scroll

const smoothLinks = document.querySelectorAll('a[href^="#contacts"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
