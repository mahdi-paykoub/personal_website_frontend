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

audio.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    const remainingTime = audio.duration - audio.currentTime;
    durationDisplay.textContent = formatTime(remainingTime);
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
});
audio.addEventListener('ended', () => {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    progressBar.style.width = '0%';
    currentTimeDisplay.textContent = '0:00'; // بازگرداندن زمان پخش شده به حالت اولیه
});

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

const myModal = document.getElementById('musicPlayerModel');
myModal.addEventListener('hidden.bs.modal', () => {
    const audio = document.getElementById('audio');
    audio.pause();
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'block';
    audio.currentTime = 0;
});




// swiper
const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },

        // when window width is >= 640px
        992: {
            slidesPerView: 5,
            spaceBetween: 15
        }
    }
})

// swiper
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


// swiper
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

// swiper
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