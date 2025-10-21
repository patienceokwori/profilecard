    const currentTimeElement = document.getElementById('currentTime');
    
    function updateTime() {
        const now = new Date();

        const time = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
         });

         currentTimeElement.textContent = `${time}`;
    }

updateTime();



const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

const errorName = document.querySelector('[data-testid="test-contact-error-name"]');
const errorEmail = document.querySelector('[data-testid="test-contact-error-email"]');
const errorSubject = document.querySelector('[data-testid="test-contact-error-subject"]');
const errorMessage = document.querySelector('[data-testid="test-contact-error-message"]');
const successMessage = document.querySelector('[data-testid="test-contact-success"]');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Reset errors
  errorName.textContent = '';
  errorEmail.textContent = '';
  errorSubject.textContent = '';
  errorMessage.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  // Validate Name
  if (nameInput.value.trim() === '') {
    errorName.textContent = 'Full name is required!';
    isValid = false;
  }

  // Validate Email
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (emailValue === '') {
    errorEmail.textContent = 'Email is required!';
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    errorEmail.textContent = 'Please enter a valid email address!';
    isValid = false;
  }

  // Validate Subject
  if (subjectInput.value.trim() === '') {
    errorSubject.textContent = 'Subject is required!';
    isValid = false;
  }

  // Validate Message
  const messageValue = messageInput.value.trim();
  if (messageValue === '') {
    errorMessage.textContent = 'Message is required!';
    isValid = false;
  } else if (messageValue.length < 10) {
    errorMessage.textContent = 'Message must be at least 10 characters!';
    isValid = false;
  }

  // Show success message if all valid
  if (isValid) {
    successMessage.textContent = '✅ Your message has been sent successfully!';
    form.reset();
  }
});



