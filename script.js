// Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
      
    });

    (function(){
    emailjs.init("5PAQLIt3ipBy0LiJX"); // Replace with your EmailJS user ID
  })();

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    emailjs.sendForm('service_hu417yh', 'template_vlm87jk', this)
      .then(() => {
        alert('Message sent successfully! 😊');
        contactForm.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      });
  });

    