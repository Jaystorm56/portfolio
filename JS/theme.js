const theme = () => {
  // Select the checkbox and the body element
const checkbox = document.getElementById('checkbox');
const body = document.body;

// Function to toggle dark mode
checkbox.addEventListener('change', () => {
 if (checkbox.checked) {
   body.classList.add('dark-mode');
 } else {
   body.classList.remove('dark-mode');
 }
});

// Optional: Remember dark mode state in local storage
document.addEventListener('DOMContentLoaded', () => {
 const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
 checkbox.checked = darkModeEnabled;
 if (darkModeEnabled) {
   body.classList.add('dark-mode');
 }
});

checkbox.addEventListener('change', () => {
 const isDarkMode = checkbox.checked;
 localStorage.setItem('dark-mode', isDarkMode);
 body.classList.toggle('dark-mode', isDarkMode);
});

// Mobile Header Elements
const mobileHamburger = document.getElementById('mobile-hamburger');
const mobileSidebar = document.getElementById('mobile-sidebar');
const mobileCheckbox = document.getElementById('mobile-checkbox');

// Toggle Mobile Sidebar and Hamburger Animation
mobileHamburger.addEventListener('click', () => {
 mobileHamburger.classList.toggle('active'); // Animates hamburger to X
 mobileSidebar.classList.toggle('active');  // Toggles sidebar visibility
});

// Dark Mode for Mobile
mobileCheckbox.addEventListener('change', () => {
 const isDarkMode = mobileCheckbox.checked;
 document.body.classList.toggle('dark-mode', isDarkMode);

 // Save preference
 localStorage.setItem('dark-mode', isDarkMode);
});

// Apply saved dark mode preference on load
document.addEventListener('DOMContentLoaded', () => {
 const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
 mobileCheckbox.checked = darkModeEnabled;
 document.body.classList.toggle('dark-mode', darkModeEnabled);
});



   
};

export default theme;
