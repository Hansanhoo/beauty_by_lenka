document.addEventListener("DOMContentLoaded", function() {

    const gallery = document.getElementById("gallery");

    const sections = [
        {
            title: "Hochzeit",
            images: ["gallery3.jpg" , "lenka_konkolova_beauty2.jpg", "gallery4.jpg", "gallery5.jpg", "gallery6.jpg", "gallery7.jpg", "gallery8.jpg", "gallery9.jpg"]
        },
        {
            title: "Close Up",
            images: ["lenka_konkolova_beauty1.jpg", "gallery2.jpg",  "gallery4.jpg", "gallery1.jpg", "lenka_konkolova_beauty1.jpg", "gallery2.jpg",  "gallery4.jpg", "lenka_konkolova_beauty1.jpg", "gallery2.jpg", "gallery4.jpg"]
        },
        {
            title: "Outdoor Shooting",
            images: ["lenka_konkolova_editorial1.jpg", "lenka_konkolova_editorial2.jpg", "lenka_konkolova_editorial4.jpg", "lenka_konkolova_editorial5.jpg", "lenka_konkolova_editorial4.jpg", "lenka_konkolova_editorial5.jpg"]
        },
        {
            title: "Fashion",
            images: ["lenka_konkolova_editorial1.jpg", "lenka_konkolova_editorial2.jpg", "lenka_konkolova_editorial4.jpg", "lenka_konkolova_editorial5.jpg", "lenka_konkolova_editorial4.jpg", "lenka_konkolova_editorial5.jpg"]
        }
    ];

    sections.forEach(section => {
        // Create heading
        const heading = document.createElement("p");
        heading.textContent = section.title;
        heading.classList.add("gallery-heading");
        gallery.appendChild(heading);

        // Create wrapper with arrows
        const wrapper = document.createElement("div");
        wrapper.classList.add("gallery-wrapper");

        const leftArrow = document.createElement("button");
        leftArrow.classList.add("arrow", "left");
        leftArrow.innerHTML = "&lt;";
        wrapper.appendChild(leftArrow);

        const track = document.createElement("div");
        track.classList.add("gallery-track");
        wrapper.appendChild(track);

        const rightArrow = document.createElement("button");
        rightArrow.classList.add("arrow", "right");
        rightArrow.innerHTML = "&gt;";
        wrapper.appendChild(rightArrow);

        gallery.appendChild(wrapper);

        // Add images
        section.images.forEach(file => {
            const img = document.createElement("img");
            img.src = `images/${file}`;
            img.alt = section.title;
            track.appendChild(img);
        });

        // Carousel functionality
        let position = 0;

        // const _track = document.querySelector('.gallery-track');x
        // const _rightArrow = document.querySelector('.right-arrow');
        // const leftArrow = document.querySelector('.left-arrow');
        function getGapInPx(track) {
            const styles = window.getComputedStyle(track);
            let gapValue = styles.columnGap || styles.gap || "0";

            // If gap is percentage → convert to px
            if (gapValue.includes("%")) {
                const percent = parseFloat(gapValue);
                return (percent / 100) * track.clientWidth;
            }

            // otherwise already px
            return parseFloat(gapValue);
        }


        function getSlideSize() {
            const image = track.querySelector('img');

            const imageWidth = image.getBoundingClientRect().width;


            // one slide movement
            console.log(getGapInPx(track), "gap")
            console.log(imageWidth + getGapInPx(track), "imageWidth + gap")
            return imageWidth + getGapInPx(track);
        }


        function getMaxScroll() {
            return track.scrollWidth - track.clientWidth;
        }

        function getMaxPosition() {
            const slideSize = getSlideSize();
            const totalSlides = track.children.length;

            // how many slides fit inside viewport
            const visibleSlides = Math.floor(track.clientWidth / slideSize);
            const maxPosition = track.scrollWidth - track.parentElement.clientWidth;

            // detect responsive (tablet/mobile)
            const isResponsive = window.matchMedia("(max-width: 1024px)").matches;

            // last valid index
            if (isResponsive) {
                return maxPosition + 12; // no extra offset
            } else {
                return Math.min(
                    maxPosition + 40,
                    (totalSlides - visibleSlides) * slideSize
                );
            }
        }

        function getSlideSize() {
            const first = track.children[0];
            const second = track.children[1];

            return second.offsetLeft - first.offsetLeft;
        }


        rightArrow.addEventListener('click', () => {
            const slideSize = getSlideSize();
            const maxPosition = getMaxPosition();

            position = Math.min(position + slideSize, maxPosition);

            track.style.transform = `translateX(-${position}px)`;
        });

        leftArrow.addEventListener('click', () => {
            const slideSize = getSlideSize();

            position = Math.max(position - slideSize, 0);

            track.style.transform = `translateX(-${position}px)`;
        });

    });

});

window.addEventListener("load", () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    const splash = document.getElementById("splash");
    const splashLogo = document.getElementById("splash-logo");
    const heroLogo = document.getElementById("hero-logo");

    // kurz warten damit man logo sieht
    setTimeout(() => {
        const splashRect = splashLogo.getBoundingClientRect(); 
        const heroRect = heroLogo.getBoundingClientRect();
        
        const splashCenterX = splashRect.left + splashRect.width / 2;
        const splashCenterY = splashRect.top + splashRect.height / 2;

        const heroCenterX = heroRect.left + heroRect.width / 2;
        const heroCenterY = heroRect.top + heroRect.height / 2;

        const moveX = heroCenterX - splashCenterX;
        const moveY = heroCenterY - splashCenterY;

        const scale = heroRect.width / splashRect.width;

        splashLogo.style.transformOrigin = "center center";
        splashLogo.style.transform =
            `translate(${moveX}px, ${moveY}px) scale(${scale})`;

        // Splash danach ausblenden
        setTimeout(() => {
            splash.style.opacity = "0";
            splash.style.transition = "opacity 0.8s ease";

            setTimeout(() => {
                splash.style.display = "none";
            }, 1000);

        }, 1000);

    }, 500);
});
