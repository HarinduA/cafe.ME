document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper for the blogs section
    const blogsSwiper = new Swiper('.blogs-row', {
        slidesPerView: 1, // Number of slides per view
        spaceBetween: 30, // Space between slides
        loop: true, // Enable loop mode
        autoplay: {
            delay: 5000, // Autoplay delay in milliseconds before switching to next slide
            disableOnInteraction: false, // Autoplay still works even when user interacts with slides
        },
        pagination: {
            el: '.swiper-pagination', // Pagination container
            clickable: true, // Allow pagination bullets to be clickable
        },
    });

    // Menu category filtering (assuming this part remains the same as your previous code)
    const categoryButtons = document.querySelectorAll(".category-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Remove the active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove("active"));
            // Add the active class to the clicked button
            button.classList.add("active");

            // Filter menu items
            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
