document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("thank-you-popup");
    const closePopup = document.getElementById("close-popup");

    // Function to scroll to the contact section
    function scrollToContact() {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Check if #submit is in the URL
    if (window.location.hash === "#submit") {
        scrollToContact(); // Smooth scroll to the contact section

        // Show popup after scrolling
        setTimeout(() => {
            popup.classList.remove("hidden");
        }, 800); // Delay to allow smooth scrolling to complete

        // Remove the hash from the URL
        history.replaceState(null, null, " "); // Removes the hash without reloading
    }

    // Close popup on button click
    closePopup.addEventListener("click", function () {
        popup.classList.add("hidden"); // Hide popup
    });
});
