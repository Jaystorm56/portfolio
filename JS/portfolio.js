document.addEventListener("DOMContentLoaded", () => {
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

  const toggleButton = document.getElementById("dark-mode-toggle");
  
  // Check if the user previously enabled dark mode
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
  }else {
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "🌙 Dark Mode"; // Change button text to dark mode
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Save preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      toggleButton.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      toggleButton.textContent = "🌙 Dark Mode";
    }
  });
});
