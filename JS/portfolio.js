document.addEventListener("DOMContentLoaded", () => {
  const text = "Hello, I'm Olaleye Michael";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
      setTimeout(typeEffect, 150); // Adjust typing speed (in milliseconds) here
    }
  }

  typingElement.style.color = "#ff6600"

  typeEffect();
});
