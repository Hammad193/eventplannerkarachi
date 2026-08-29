(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm').css('top', '0px');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm').css('top', '-100px');
        }
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);



//=====================================================//



//=====================================================//


    document.addEventListener('DOMContentLoaded', function() {
        const serviceItems = document.querySelectorAll('.service-item-box');
        const moreBtn = document.getElementById('moreServicesBtn');
        let showAll = false;

        moreBtn.addEventListener('click', function() {
            showAll = !showAll;

            serviceItems.forEach((item, index) => {
                if (index >= 16) {
                    if (showAll) {
                        item.classList.remove('d-none');
                    } else {
                        item.classList.add('d-none');
                    }
                }
            });

            moreBtn.textContent = showAll ? 'Show Less' : 'More Services';
        });
    });


    //===================


    
    document.addEventListener('DOMContentLoaded', function() {
        // ===== WOW.JS INITIALIZATION =====
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }

        // ===== CARD HOVER ANIMATION (Optional) =====
        const cards = document.querySelectorAll('.choose-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
            });
        });
    });

//===================

    document.addEventListener('DOMContentLoaded', function() {
        // ===== WOW.JS INITIALIZATION =====
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }

        // ===== PROCESS CARD HOVER ANIMATION =====
        const processCards = document.querySelectorAll('.process-card');
        processCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s ease';
            });
        });

        // ===== STEP NUMBER COUNTER ANIMATION ON SCROLL =====
        const stepNumbers = document.querySelectorAll('.step-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.style.transition = 'all 0.6s ease';
                    el.style.transform = 'scale(1)';
                }
            });
        }, { threshold: 0.5 });

        stepNumbers.forEach(num => {
            num.style.transform = 'scale(0.8)';
            observer.observe(num);
        });
    });

//===================

    
    document.addEventListener('DOMContentLoaded', function() {
        // ===== WOW.JS INITIALIZATION =====
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }

        // ===== PRICING CARD HOVER EFFECT =====
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s ease';
            });
        });

        // ===== PRICE ANIMATION ON SCROLL =====
        const prices = document.querySelectorAll('.price .display-4');
        const priceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.style.transition = 'all 0.8s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.3 });

        prices.forEach(price => {
            price.style.opacity = '0';
            price.style.transform = 'translateY(20px)';
            priceObserver.observe(price);
        });
    });


    //=============
    document.addEventListener('DOMContentLoaded', function() {
        // ===== WOW.JS INITIALIZATION =====
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }

        // ===== GALLERY FILTER FUNCTIONALITY =====
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                b.classList.add('active');

                // Get filter value
                const filter = this.getAttribute('data-filter');

                // Filter gallery items
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                        item.classList.add('hidden');
                    }
                });
            });
        });

        // ===== GALLERY CARD CLICK - LIGHTBOX (Optional) =====
        const galleryCards = document.querySelectorAll('.gallery-card');
        galleryCards.forEach(card => {
            card.addEventListener('click', function() {
                const img = this.querySelector('img');
                const title = this.querySelector('.gallery-overlay h5')?.textContent || 'Event Image';
                const desc = this.querySelector('.gallery-overlay p')?.textContent || '';
                
                // You can implement a lightbox here
                // For now, just log the details
                console.log('Image:', img.src);
                console.log('Title:', title);
                console.log('Description:', desc);
                
                // Example: Open image in new tab
                // window.open(img.src, '_blank');
            });
        });
    });


    //================


    document.addEventListener('DOMContentLoaded', function() {
        // ===== WOW.JS INITIALIZATION =====
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }

        // ===== VENUE CARD HOVER EFFECT =====
        const venueCards = document.querySelectorAll('.venue-card');
        venueCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s ease';
            });
        });

        // ===== BADGE ANIMATION ON SCROLL =====
        const badges = document.querySelectorAll('.venue-card .badge');
        const badgeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, { threshold: 0.3 });

        badges.forEach(badge => {
            badge.style.opacity = '0';
            badge.style.transform = 'scale(0.9)';
            badgeObserver.observe(badge);
        });
    });



document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".epx-tstl-section");

    if (!slider) return;

    const track = slider.querySelector(".epx-tstl-track");
    const cards = slider.querySelectorAll(".epx-tstl-card");
    const prevBtn = slider.querySelector(".epx-tstl-prev");
    const nextBtn = slider.querySelector(".epx-tstl-next");
    const dots = slider.querySelectorAll(".epx-tstl-dot");

    let currentIndex = 0;
    let cardsPerView = 3;
    let autoSlide;

    function getCardsPerView() {

        if (window.innerWidth <= 620) {
            return 1;
        }

        if (window.innerWidth <= 900) {
            return 2;
        }

        return 3;
    }


    function getMaxIndex() {
        return Math.max(0, cards.length - cardsPerView);
    }


    function updateSlider() {

        cardsPerView = getCardsPerView();

        const cardWidth =
            cards[0].getBoundingClientRect().width;

        const gap =
            parseFloat(getComputedStyle(track).gap) || 0;

        const moveAmount =
            (cardWidth + gap) * currentIndex;

        track.style.transform =
            "translate3d(-" + moveAmount + "px, 0, 0)";


        updateDots();
    }


    function updateDots() {

        dots.forEach(function (dot, index) {
            dot.classList.remove("epx-tstl-dot-active");

            if (
                (currentIndex === 0 && index === 0) ||
                (currentIndex >= 3 && currentIndex < 6 && index === 1) ||
                (currentIndex >= 6 && index === 2)
            ) {
                dot.classList.add("epx-tstl-dot-active");
            }
        });
    }


    function nextSlide() {

        const maxIndex = getMaxIndex();

        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {

            if (cardsPerView === 3) {
                currentIndex += 3;

                if (currentIndex > maxIndex) {
                    currentIndex = maxIndex;
                }

            } else if (cardsPerView === 2) {
                currentIndex += 2;

                if (currentIndex > maxIndex) {
                    currentIndex = maxIndex;
                }

            } else {
                currentIndex++;
            }
        }

        updateSlider();
    }


    function previousSlide() {

        if (currentIndex <= 0) {
            currentIndex = getMaxIndex();
        } else {

            if (cardsPerView === 3) {
                currentIndex -= 3;
            } else if (cardsPerView === 2) {
                currentIndex -= 2;
            } else {
                currentIndex--;
            }

            if (currentIndex < 0) {
                currentIndex = 0;
            }
        }

        updateSlider();
    }


    function goToSlide(index) {

        if (index === 0) {
            currentIndex = 0;
        }

        if (index === 1) {
            currentIndex = cardsPerView === 1 ? 3 : 3;
        }

        if (index === 2) {
            currentIndex = 6;
        }

        currentIndex = Math.min(
            currentIndex,
            getMaxIndex()
        );

        updateSlider();
    }


    nextBtn.addEventListener("click", function () {
        nextSlide();
        restartAutoSlide();
    });


    prevBtn.addEventListener("click", function () {
        previousSlide();
        restartAutoSlide();
    });


    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {
            goToSlide(index);
            restartAutoSlide();
        });

    });


    /* =========================
       AUTO SLIDE
    ========================== */

    function startAutoSlide() {

        autoSlide = setInterval(function () {
            nextSlide();
        }, 5000);

    }


    function stopAutoSlide() {
        clearInterval(autoSlide);
    }


    function restartAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }


    slider.addEventListener("mouseenter", stopAutoSlide);

    slider.addEventListener("mouseleave", startAutoSlide);


    /* =========================
       TOUCH / SWIPE
    ========================== */

    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener(
        "touchstart",
        function (event) {
            touchStartX = event.changedTouches[0].screenX;
            stopAutoSlide();
        },
        { passive: true }
    );


    track.addEventListener(
        "touchend",
        function (event) {

            touchEndX = event.changedTouches[0].screenX;

            const swipeDistance =
                touchStartX - touchEndX;

            if (Math.abs(swipeDistance) > 50) {

                if (swipeDistance > 0) {
                    nextSlide();
                } else {
                    previousSlide();
                }

            }

            startAutoSlide();

        },
        { passive: true }
    );


    /* =========================
       RESIZE
    ========================== */

    let resizeTimer;

    window.addEventListener("resize", function () {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {

            cardsPerView = getCardsPerView();

            currentIndex = Math.min(
                currentIndex,
                getMaxIndex()
            );

            updateSlider();

        }, 150);

    });


    /* INITIALIZE */

    cardsPerView = getCardsPerView();
    updateSlider();
    startAutoSlide();

});


/* =========================================
   PREMIUM FAQ ACCORDION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {

      const isCurrentlyOpen = item.classList.contains("active");

      // Close all FAQs
      faqItems.forEach(function (faq) {
        faq.classList.remove("active");

        const btn = faq.querySelector(".faq-question");
        btn.setAttribute("aria-expanded", "false");
      });

      // Open clicked FAQ
      if (!isCurrentlyOpen) {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
      }

    });

  });

});


// <script>
(function () {

    const hero = document.querySelector(".epx-hero");

    if (!hero) return;

    const slides = hero.querySelectorAll(".epx-slide");
    const dots = hero.querySelectorAll(".epx-dot");

    const next = hero.querySelector(".epx-next");
    const prev = hero.querySelector(".epx-prev");

    let current = 0;
    let timer;


    function showSlide(index) {

        if (index >= slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = slides.length - 1;
        }

        slides.forEach(function (slide, i) {

            slide.classList.toggle(
                "epx-slide-active",
                i === index
            );

        });

        dots.forEach(function (dot, i) {

            dot.classList.toggle(
                "epx-dot-active",
                i === index
            );

        });

        current = index;
    }


    function nextSlide() {
        showSlide(current + 1);
    }


    function prevSlide() {
        showSlide(current - 1);
    }


    function startSlider() {

        clearInterval(timer);

        timer = setInterval(function () {

            nextSlide();

        }, 6000);

    }


    next.addEventListener("click", function () {

        nextSlide();
        startSlider();

    });


    prev.addEventListener("click", function () {

        prevSlide();
        startSlider();

    });


    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);
            startSlider();

        });

    });


    /* Touch swipe */

    let startX = 0;

    hero.addEventListener(
        "touchstart",
        function (e) {

            startX = e.changedTouches[0].screenX;

        },
        { passive: true }
    );


    hero.addEventListener(
        "touchend",
        function (e) {

            const endX = e.changedTouches[0].screenX;

            const distance = startX - endX;

            if (Math.abs(distance) < 50) return;

            if (distance > 0) {
                nextSlide();
            } else {
                prevSlide();
            }

            startSlider();

        },
        { passive: true }
    );


    /* Pause while mouse is over hero */

    hero.addEventListener("mouseenter", function () {
        clearInterval(timer);
    });

    hero.addEventListener("mouseleave", function () {
        startSlider();
    });


    showSlide(0);
    startSlider();

})();



//==== <script>
document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".epk-reviews-track");
    const cards = document.querySelectorAll(".epk-review-card");
    const nextBtn = document.querySelector(".epk-slider-next");
    const prevBtn = document.querySelector(".epk-slider-prev");
    const dots = document.querySelectorAll(".epk-review-dot");

    if (!track || !cards.length) {
        return;
    }


    let currentIndex = 0;
    let autoSlide;


    /* ==========================================
       GET CARD WIDTH
    ========================================== */

    function getCardWidth() {

        const card = cards[0];

        if (!card) {
            return 0;
        }

        const cardStyle =
            window.getComputedStyle(card);

        const gap =
            parseFloat(cardStyle.marginRight) ||
            parseFloat(
                window.getComputedStyle(track).gap
            ) ||
            20;

        return card.offsetWidth + gap;
    }


    /* ==========================================
       UPDATE DOTS
    ========================================== */

    function updateDots(index) {

        dots.forEach(function (dot, i) {

            dot.classList.toggle(
                "epk-review-dot-active",
                i === index
            );

        });

    }


    /* ==========================================
       MOVE SLIDER
    ========================================== */

    function goToSlide(index) {

        const amount = getCardWidth();

        const maxScroll =
            track.scrollWidth -
            track.clientWidth;

        let position = index * amount;


        if (position >= maxScroll) {

            position = 0;
            index = 0;

        }


        currentIndex = index;


        track.scrollTo({

            left: position,

            behavior: "smooth"

        });


        updateDots(index);

    }


    /* ==========================================
       NEXT
    ========================================== */

    function nextSlide() {

        const amount = getCardWidth();

        const maxScroll =
            track.scrollWidth -
            track.clientWidth;


        if (
            track.scrollLeft + amount
            >= maxScroll - 10
        ) {

            currentIndex = 0;

            track.scrollTo({

                left: 0,

                behavior: "smooth"

            });

        } else {

            currentIndex++;

            track.scrollBy({

                left: amount,

                behavior: "smooth"

            });

        }


        updateDots(currentIndex);

    }


    /* ==========================================
       PREVIOUS
    ========================================== */

    function previousSlide() {

        const amount = getCardWidth();


        if (track.scrollLeft <= 10) {

            currentIndex =
                cards.length - 1;

            track.scrollTo({

                left:
                    track.scrollWidth -
                    track.clientWidth,

                behavior: "smooth"

            });

        } else {

            currentIndex =
                Math.max(
                    0,
                    currentIndex - 1
                );

            track.scrollBy({

                left: -amount,

                behavior: "smooth"

            });

        }


        updateDots(currentIndex);

    }


    /* ==========================================
       BUTTONS
    ========================================== */

    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            function () {

                nextSlide();

                restartAutoSlide();

            }
        );

    }


    if (prevBtn) {

        prevBtn.addEventListener(
            "click",
            function () {

                previousSlide();

                restartAutoSlide();

            }
        );

    }


    /* ==========================================
       DOT NAVIGATION
    ========================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function () {

                goToSlide(index);

                restartAutoSlide();

            }
        );

    });


    /* ==========================================
       AUTO SLIDER
    ========================================== */

    function startAutoSlide() {

        autoSlide =
            setInterval(
                nextSlide,
                5000
            );

    }


    function stopAutoSlide() {

        clearInterval(autoSlide);

    }


    function restartAutoSlide() {

        stopAutoSlide();

        startAutoSlide();

    }


    /* ==========================================
       PAUSE ON HOVER
    ========================================== */

    track.addEventListener(
        "mouseenter",
        stopAutoSlide
    );

    track.addEventListener(
        "mouseleave",
        startAutoSlide
    );


    /* ==========================================
       MOBILE TOUCH
    ========================================== */

    track.addEventListener(
        "touchstart",
        stopAutoSlide,
        { passive: true }
    );

    track.addEventListener(
        "touchend",
        startAutoSlide,
        { passive: true }
    );


    /* ==========================================
       START
    ========================================== */

    startAutoSlide();

});



document.addEventListener("DOMContentLoaded", function () {

  const filterButtons = document.querySelectorAll(".epk-filter-btn");
  const galleryCards = document.querySelectorAll(".epk-gallery-card");

  filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const selectedFilter = this.getAttribute("data-filter");


      /* Active button */

      filterButtons.forEach(function (btn) {
        btn.classList.remove("epk-filter-active");
      });

      this.classList.add("epk-filter-active");


      /* Filter gallery */

      galleryCards.forEach(function (card) {

        const category = card.getAttribute("data-category");

        card.classList.remove("epk-gallery-hidden");

        if (
          selectedFilter !== "all" &&
          category !== selectedFilter
        ) {
          card.classList.add("epk-gallery-hidden");
        }

      });

    });

  });

});



(function () {

    "use strict";

    const epkgxOpenButtons =
        document.querySelectorAll(".epkgx-gallery-open");

    const epkgxLightbox =
        document.getElementById("epkgxLightbox");

    const epkgxImage =
        document.getElementById("epkgxLightboxImage");

    const epkgxTitle =
        document.getElementById("epkgxLightboxText");

    const epkgxClose =
        document.querySelector(".epkgx-lightbox-close");

    const epkgxPrev =
        document.querySelector(".epkgx-lightbox-prev");

    const epkgxNext =
        document.querySelector(".epkgx-lightbox-next");


    let epkgxCurrent = 0;


    function epkgxShowImage(index) {

        if (!epkgxOpenButtons.length) return;

        if (index >= epkgxOpenButtons.length) {
            index = 0;
        }

        if (index < 0) {
            index = epkgxOpenButtons.length - 1;
        }

        epkgxCurrent = index;

        const button = epkgxOpenButtons[epkgxCurrent];

        epkgxImage.src = button.getAttribute("data-image");
        epkgxImage.alt = button.getAttribute("data-title");
        epkgxTitle.textContent =
            button.getAttribute("data-title");

        epkgxLightbox.classList.add(
            "epkgx-lightbox-active"
        );

        document.body.style.overflow = "hidden";
    }


    function epkgxCloseGallery() {

        epkgxLightbox.classList.remove(
            "epkgx-lightbox-active"
        );

        document.body.style.overflow = "";

        setTimeout(function () {
            epkgxImage.src = "";
        }, 250);
    }


    epkgxOpenButtons.forEach(function (button, index) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            epkgxShowImage(index);

        });

    });


    epkgxClose.addEventListener(
        "click",
        epkgxCloseGallery
    );


    epkgxNext.addEventListener(
        "click",
        function () {
            epkgxShowImage(epkgxCurrent + 1);
        }
    );


    epkgxPrev.addEventListener(
        "click",
        function () {
            epkgxShowImage(epkgxCurrent - 1);
        }
    );


    epkgxLightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === epkgxLightbox
            ) {
                epkgxCloseGallery();
            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                !epkgxLightbox.classList.contains(
                    "epkgx-lightbox-active"
                )
            ) {
                return;
            }

            if (event.key === "Escape") {
                epkgxCloseGallery();
            }

            if (event.key === "ArrowRight") {
                epkgxShowImage(epkgxCurrent + 1);
            }

            if (event.key === "ArrowLeft") {
                epkgxShowImage(epkgxCurrent - 1);
            }

        }
    );

})();




