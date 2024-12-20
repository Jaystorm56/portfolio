import theme from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  theme();
  const text = "Hello, I'm Olaleye Michael";
  const typingElement = document.getElementById("typing");
  let index = 0;
  let isDeleting = false; // Track whether we are typing or deleting

  function typeEffect() {
    if (!isDeleting && index < text.length) {
      // Typing forward
      typingElement.textContent += text[index];
      index++;
      setTimeout(typeEffect, 150); // Typing speed
    } else if (isDeleting && index > 0) {
      // Deleting backward
      typingElement.textContent = text.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, 100); // Deleting speed
    } else if (index === text.length && !isDeleting) {
      // Pause for 2 seconds after finishing typing
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 2000); // 2000ms = 2 seconds
    } else if (index === 0 && isDeleting) {
      // Pause for 500ms before typing again
      isDeleting = false;
      setTimeout(typeEffect, 500);
    }
  }

  // Set the text color
  typingElement.style.color = "#ff6600";

  // Start the typing effect
  typeEffect();

});

let currentIndex = 0;
let isMouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');
const circles = document.querySelectorAll('.navigation-circles .circle');
const totalSlides = testimonials.length;

function showSlide(index) {
  // Change the transform to slide
  slider.style.transform = `translateX(-${index * 100}%)`;

  // Update the active circle
  circles.forEach((circle, i) => {
    circle.classList.toggle('active', i === index);
  });
}

// Auto Slide every 10 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 10000); // Change every 10 seconds

// Implement manual sliding by dragging
slider.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  e.preventDefault(); // Prevent text selection
});

slider.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

slider.addEventListener('mouseup', () => {
  isMouseDown = false;

  // Update current slide after drag
  currentIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
  showSlide(currentIndex);
});

slider.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // Adjust the speed of sliding
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('mouseup', () => {
  // Update current slide after drag
  currentIndex = Math.round(slider.scrollLeft / slider.offsetWidth);
  showSlide(currentIndex);
});
