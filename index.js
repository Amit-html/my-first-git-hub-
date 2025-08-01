document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("search-btn");
    const searchBar = document.getElementById("search-bar");
    const mainHeader = document.querySelector(".main-header");

    document.getElementById("homeButton").addEventListener("click", () => {
        window.location.href = "/";  // or "index.html" if you're testing locally
    });

    searchBtn.addEventListener("click", function () {
        if (searchBar.classList.contains("hidden")) {
            searchBar.classList.remove("hidden"); // Show search bar
            mainHeader.style.display = "none"; // Hide menu
            searchBar.focus(); // Auto-focus
        } else {
            searchBar.classList.add("hidden"); // Hide search bar
            mainHeader.style.display = "flex"; // Restore menu
        }
    });

    // Select elements
    const sidebar = document.querySelector(".sidebar");
    const optionsBtn = document.querySelector(".options");
    const closeBtn = document.querySelector(".close-btn");

    // Function to toggle sidebar when clicking the options button
    optionsBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active"); // Toggle sidebar visibility
    });

    // Function to close sidebar when clicking the close (X) button
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active"); // Ensures sidebar closes
    });
});
// Function to handle search bar focus and blur events
function handleSearchBarFocus() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("focus", function () {
        searchBar.classList.remove("hidden"); // Show search bar
    });

    searchBar.addEventListener("blur", function () {
        if (searchBar.value === "") {
            searchBar.classList.add("hidden"); // Hide search bar if empty
        }
    });
    searchBar.addEventListener("input", function () {
        if (searchBar.value !== "") {
            searchBar.classList.remove("hidden"); // Show search bar when typing
        } else {
            searchBar.classList.add("hidden"); // Hide if empty
        }
    });


}

const carousel = document.querySelector('.carousel');
const cardWidth = document.querySelector('.maindiv').offsetWidth + 10;

//document.querySelector('.carousel-btn-left').addEventListener('click', () => {
  //  scroller.scrollBy({ left: -cardWidth, behavior: 'smooth' });
//});

//document.querySelector('.carousel-btn-right').addEventListener('click', () => {
  //  scroller.scrollBy({ left: cardWidth, behavior: 'smooth' });
//});

// Auto Scroll with proper reset and cooldown
let scrollSpeed = 1;
let isResetting = false;
let autoScrollInterval = null;

function autoScroll() {
    if (!isResetting) {
        carousel.scrollLeft += scrollSpeed;
    }

    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1) {
        // Temporarily stop scroll to prevent loop conflict
        isResetting = true;
        carousel.scrollLeft = 0;


        // Cooldown: wait 300ms before continuing auto-scroll
        setTimeout(() => {
            isResetting = false;
        }, 300);
    }

    autoScrollInterval = requestAnimationFrame(autoScroll);
}

autoScroll();

carousel.addEventListener('mouseenter', () => {
    cancelAnimationFrame(autoScrollInterval);
});
carousel.addEventListener('mouseleave', () => {
    autoScrollInterval = requestAnimationFrame(autoScroll);
});