// --- script.js ---

// Global variable to keep track of the current slide index
let slideIndex = 1;

// Display the first slide when the page loads
showSlides(slideIndex);

// Set an interval to automatically switch slides every 5 seconds (5000 milliseconds)
setInterval(() => {
  // Increment the slide index and show the next slide
  slideIndex++;
  showSlides(slideIndex);
}, 5000);

/**
 * Displays the slide corresponding to the given index.
 * @param {number} n - The slide number to display.
 */
function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // Wrap around if the index is out of bounds
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and highlight the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/**
 * Function called when a dot is clicked.
 * Updates the slide index and displays the corresponding slide.
 * @param {number} n - The slide number to navigate to.
 */
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}
