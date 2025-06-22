document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("search-btn");
    const searchBar = document.getElementById("search-bar");
    const mainHeader = document.querySelector(".main-header");

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
    optionsBtn.addEventListener("click", function() {
        sidebar.classList.toggle("active"); // Toggle sidebar visibility
    });

    // Function to close sidebar when clicking the close (X) button
    closeBtn.addEventListener("click", function() {
        sidebar.classList.remove("active"); // Ensures sidebar closes
    });
});
// Function to handle search bar focus and blur events
function handleSearchBarFocus() {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("focus", function() {
        searchBar.classList.remove("hidden"); // Show search bar
    });
    
    searchBar.addEventListener("blur", function() {
        if (searchBar.value === "") {
            searchBar.classList.add("hidden"); // Hide search bar if empty
        }
    });
    searchBar.addEventListener("input", function() {
        if (searchBar.value !== "") {
            searchBar.classList.remove("hidden"); // Show search bar when typing
        } else {
            searchBar.classList.add("hidden"); // Hide if empty
        }
    });

  
}