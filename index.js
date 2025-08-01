document.addEventListener("DOMContentLoaded", function () {
    // Element selectors
    const searchBtn = document.getElementById("search-btn");
    const searchBar = document.getElementById("search-bar");
    const mainHeader = document.querySelector(".main-header");
    const homeButton = document.getElementById("homeButton");
    const sidebar = document.querySelector(".sidebar");
    const optionsBtn = document.querySelector(".options");
    const closeBtn = document.querySelector(".close-btn");
    const carousel = document.querySelector('.carousel');
    const card = document.querySelector('.maindiv');
    const cardWidth = card ? card.offsetWidth + 10 : 0;

    // 🔹 HOME BUTTON CLICK
    if (homeButton) {
        homeButton.addEventListener("click", () => {
            window.location.href = "/"; // Or "index.html" locally
        });
    }

    // 🔹 SEARCH BUTTON TOGGLE
    if (searchBtn && searchBar && mainHeader) {
        searchBtn.addEventListener("click", function () {
            const isHidden = searchBar.classList.contains("hidden");
            searchBar.classList.toggle("hidden", !isHidden);
            mainHeader.style.display = isHidden ? "none" : "flex";
            if (isHidden) searchBar.focus();
        });
    }

    // 🔹 SEARCH BAR BEHAVIOUR ON FOCUS / BLUR / INPUT
    if (searchBar) {
        searchBar.addEventListener("focus", () => {
            searchBar.classList.remove("hidden");
        });

        searchBar.addEventListener("blur", () => {
            if (searchBar.value === "") {
                searchBar.classList.add("hidden");
                mainHeader.style.display = "flex";
            }
        });

        searchBar.addEventListener("input", () => {
            if (searchBar.value !== "") {
                searchBar.classList.remove("hidden");
            } else {
                searchBar.classList.add("hidden");
            }
        });
    }

    // 🔹 SIDEBAR OPEN/CLOSE
    if (optionsBtn && sidebar) {
        optionsBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    }

    // 🔹 AUTO SCROLL CAROUSEL
    let scrollSpeed = 1;
    let isResetting = false;
    let autoScrollInterval = null;

    function autoScroll() {
        if (!carousel) return;

        if (!isResetting) {
            carousel.scrollLeft += scrollSpeed;
        }

        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1) {
            isResetting = true;
            carousel.scrollLeft = 0;
            setTimeout(() => {
                isResetting = false;
            }, 300);
        }

        autoScrollInterval = requestAnimationFrame(autoScroll);
    }

    if (carousel) {
        autoScroll();

        // Pause scroll on mouse hover
        carousel.addEventListener('mouseenter', () => {
            cancelAnimationFrame(autoScrollInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            autoScrollInterval = requestAnimationFrame(autoScroll);
        });
    }
});