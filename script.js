// Event Handling
document.getElementById("messageBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "You clicked the button!";
});
// Function to toggle light/dark mode
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Counter game functionality
let count = 0;

const incrementButton = document.getElementById('increment-btn');
const counterDisplay = document.getElementById('counter');

incrementButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

// FAQ toggling functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

// Form validation functionality
const form = document.getElementById('signup-form');
const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   // Reset feedback
    feedbackDiv.textContent = '';

    // Simple validation
    if (!name || !email || !password) {
        feedbackDiv.textContent = 'All fields are required!';
        feedbackDiv.style.color = 'red';
        return;
    }

    // Regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        feedbackDiv.textContent = 'Please enter a valid email address.';
        feedbackDiv.style.color = 'red';
        return;
    }

    feedbackDiv.textContent = 'Form submitted successfully!';
    feedbackDiv.style.color = 'green';
    form.reset(); // Reset form fields
});
