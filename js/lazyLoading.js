document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazyload");
    const imgHostName = document.getElementById("imghostname").value;
    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = imgHostName + img.dataset.src;
                    img.classList.add("loaded");
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(image => {
            image.src = image.dataset.src;
            image.classList.add("loaded");
        });
    }
});
