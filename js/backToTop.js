// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when scrolling near the bottom
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to the top when clicked
backToTopButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"  // Smooth scroll to top
  });
};
