// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;

// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });

// music player
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}


if (audio && progressBar && currentTimeDisplay && durationDisplay) {
    audio.addEventListener('timeupdate', () => {
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        const remainingTime = audio.duration - audio.currentTime;
        durationDisplay.textContent = formatTime(remainingTime);
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });
    audio.addEventListener('ended', () => {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        progressBar.style.width = '0%';
        currentTimeDisplay.textContent = '0:00'; // بازگرداندن زمان پخش شده به حالت اولیه
    });
    audio.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });
    progressBar.parentElement.addEventListener('click', (e) => {
        const clickX = e.offsetX;
        const width = progressBar.parentElement.clientWidth;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });
}

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            audio.pause();
            pauseIcon.style.display = 'none';
            playIcon.style.display = 'block';
        }
    });
}

const myModal = document.getElementById('musicPlayerModel');
if (myModal) {
    myModal.addEventListener('hidden.bs.modal', () => {
        const audio = document.getElementById('audio');
        audio.pause();
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'block';
        audio.currentTime = 0;
    });
}


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 15
        }
    }
})

const swiper_cat = new Swiper('.swiper_cat', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 30,
        }
    }
})

const swiper_tech = new Swiper('.swiper-tech', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 6000,
    loop: true,
    allowTouchMove: false,

    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 7,
            spaceBetween: 15
        }
    }
})


const swiper_register_road = new Swiper('.swiper_register_road', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 6000,
    loop: true,
    allowTouchMove: false,

    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 70
        }
    }
})

const laravel_service_swiper = new Swiper('.laravel-service-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    // speed: 1000,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
})

const laravel_service_ec_swiper = new Swiper('.laravel-service-ec-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,

    on: {
        slideChangeTransitionEnd: function () {
            setActiveSlideStyle(this);
        },
        init: function () {
            setActiveSlideStyle(this);
        }
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 42
        }
    },
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
})

function setActiveSlideStyle(swiper) {
    swiper.slides.forEach(slide => {
        slide.classList.remove('swiper-slide-active-center');
    });

    const activeIndex = swiper.activeIndex;
    swiper.slides[activeIndex].classList.add('swiper-slide-active-center');
}

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const button = document.getElementById("toggleBtn");
    let isExpanded = false;

    if (button) {
        button.addEventListener("click", () => {
            isExpanded = !isExpanded;
            textElement.classList.toggle("expanded", isExpanded);
            textElement.classList.toggle("fade-text", !isExpanded);
            button.textContent = isExpanded ? "نمایش کمتر" : "نمایش بیشتر";
        });
    }

});

const cardSwiper = new Swiper('.cardSwiper', {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
});

const swiperswiper_shop_ex = new Swiper('.swiper_shop_ex', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15
        }
    }
})

//aouto scroll
// window.onload = function () {
//     const container = document.getElementById('scrollContainer');
//     const targetScroll = 800;
//     const scrollDuration = 15000;

//     function easeOutCubic(t) {
//       return 1 - Math.pow(1 - t, 3);
//     }

//     function animateScroll(start, end, duration) {
//       return new Promise((resolve) => {
//         const startTime = performance.now();

//         function scrollFrame(currentTime) {
//           const elapsed = currentTime - startTime;
//           const progress = Math.min(elapsed / duration, 1);
//           const eased = easeOutCubic(progress);
//           container.scrollTop = start + (end - start) * eased;

//           if (progress < 1) {
//             requestAnimationFrame(scrollFrame);
//           } else {
//             resolve();
//           }
//         }

//         requestAnimationFrame(scrollFrame);
//       });
//     }

//     async function loop() {
//       await new Promise((r) => setTimeout(r, 2000));  // 3 ثانیه تأخیر اول
//       while (true) {
//         await animateScroll(0, targetScroll, scrollDuration);       // اسکرول پایین
//         await new Promise((r) => setTimeout(r, 1000));              // مکث 1 ثانیه
//         await animateScroll(targetScroll, 0, scrollDuration);       // اسکرول بالا
//         await new Promise((r) => setTimeout(r, 3000));              // مکث 3 ثانیه قبل از تکرار
//       }
//     }

//     loop();
//   };



const testemonial_swiper = new Swiper('.testemonial_swiper', {
    slidesPerView: 3,
    spaceBetween: 22,
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
})
