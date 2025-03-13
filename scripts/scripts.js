// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check if a theme preference exists in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}

// Toggle the theme between light and dark
themeToggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Form validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

// Real-time validation for name
nameInput.addEventListener('input', () => {
    if (!nameInput.value) {
        nameError.textContent = 'Name is required.';
    } else {
        nameError.textContent = '';
    }
});

// Real-time validation for email
emailInput.addEventListener('input', () => {
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailInput.value) {
        emailError.textContent = 'Email is required.';
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});

// Prevent form submission if there are validation errors
contactForm.addEventListener('submit', (event) => {
    if (nameError.textContent || emailError.textContent) {
        event.preventDefault();
    }
});
