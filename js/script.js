document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  mobileToggle.addEventListener('click', () => {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      navLinks.classList.remove('show');
      mobileToggle.setAttribute('aria-expanded', 'false');
    } else {
      navLinks.classList.add('show');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Smooth scrolling for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after click
        if (navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Contact form validation
  const contactForm = document.getElementById('contact-form');
  const errorMsg = document.getElementById('form-error');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsg.textContent = '';
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      errorMsg.textContent = 'Please fill out all fields.';
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMsg.textContent = 'Please enter a valid email address.';
      return;
    }

    try {
      // Simulate form submission success
      console.log('Form submitted:', { name, email, message });
      contactForm.reset();
      alert('Thank you for contacting us! We will get back to you soon.');
    } catch (error) {
      console.error('Error during form submission:', error);
      errorMsg.textContent = 'An unexpected error occurred. Please try again later.';
    }
  });
});
