// Modern Portfolio JavaScript - Enhanced with Animations

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const skillBars = document.querySelectorAll('.skill-progress');
const contactForm = document.querySelector('.form');
const videoPlayButton = document.querySelector('.video-play-button');

// Navigation Class
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    this.handleScroll();
    this.handleMobileMenu();
    this.handleSmoothScroll();
    this.handleActiveLink();
    this.handleLogoAnimation();
  }

  handleScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('visible');
      } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('visible');
      }
    });
  }

  handleMobileMenu() {
    if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

      // Close menu when clicking on links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
          document.body.classList.remove('menu-open');
        });
    });

      // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
          document.body.classList.remove('menu-open');
      }
    });
    }
  }

  handleSmoothScroll() {
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href') || '';
        const isHash = href.startsWith('#');
        const isSamePageHash = isHash && href.length > 1;

        // Only intercept in-page hash links
        if (!isSamePageHash) return;

        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 70;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      });
    });
  }

  handleActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  handleLogoAnimation() {
    const logo = document.querySelector('.logo-text');
    if (logo) {
      logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.1)';
      });
      
      logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
      });
    }
  }
}

// Skills Animation Class
class SkillsAnimation {
  constructor() {
    this.init();
  }

  init() {
    this.animateSkillBars();
  }

  animateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBar = entry.target;
          const width = skillBar.getAttribute('data-width');
          
          setTimeout(() => {
            skillBar.style.width = width;
          }, 200);
          
          observer.unobserve(skillBar);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  }
}

// Counter Animation Class
class CounterAnimation {
  constructor() {
    this.init();
  }

  init() {
    this.animateCounters();
  }

  animateCounters() {
    const counters = document.querySelectorAll('.number-content h3');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.textContent.replace(/\D/g, ''));
          const suffix = counter.textContent.replace(/\d/g, '');
          
          this.animateCounter(counter, 0, target, suffix, 2000);
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  animateCounter(element, start, end, suffix, duration) {
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const current = Math.floor(progress * (end - start) + start);
      element.textContent = current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }
}

// Form Handling Class
class FormHandler {
  constructor() {
    this.init();
  }

  init() {
      this.handleFormSubmission();
      this.addFormAnimations();
  }

  handleFormSubmission() {
    if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
        // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
          this.showSuccessMessage();
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
    }
  }

  addFormAnimations() {
    const formInputs = document.querySelectorAll('.form-control');
    
    formInputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });

      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });
    });
  }

  showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
      <div class="success-content">
        <i class="fas fa-check-circle"></i>
        <h3>Message Sent Successfully!</h3>
        <p>Thank you for reaching out. I'll get back to you soon.</p>
      </div>
    `;
    
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      successMessage.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      successMessage.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(successMessage);
      }, 300);
    }, 3000);
  }
}

// Parallax Effects Class
class ParallaxEffects {
  constructor() {
    this.init();
  }

  init() {
    this.handleFloatingShapes();
    this.handleScrollAnimations();
  }

  handleFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    });
  }

  handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
}

// Interactive Elements Class
class InteractiveElements {
  constructor() {
    this.init();
  }

  init() {
    this.handleVideoPlayButton();
    this.handleCardHoverEffects();
    this.handleButtonAnimations();
    this.handleSocialLinks();
  }

  handleVideoPlayButton() {
    if (videoPlayButton) {
      videoPlayButton.addEventListener('click', () => {
        // Add video modal or redirect to video
        this.showVideoModal();
      });
    }
  }

  showVideoModal() {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  frameborder="0" 
                  allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      modal.classList.add('show');
    }, 100);
    
    // Close modal functionality
    const closeModal = modal.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
      this.closeVideoModal(modal);
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeVideoModal(modal);
      }
    });
  }

  closeVideoModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(modal);
      document.body.style.overflow = 'auto';
    }, 300);
  }

  handleCardHoverEffects() {
    const cards = document.querySelectorAll('.about-card, .skill-category, .project-card, .testimonial-card, .service-card, .education-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  handleButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
      });
      
      button.addEventListener('mousedown', () => {
        button.style.transform = 'translateY(0) scale(0.98)';
      });
      
      button.addEventListener('mouseup', () => {
        button.style.transform = 'translateY(-2px) scale(1)';
      });
    });
  }

  handleSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) scale(1.1)';
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
      });
    });
  }
}

// Back to Top Functionality
class BackToTop {
  constructor() {
    this.init();
  }

  init() {
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
}

// Typing Animation Class
class TypingAnimation {
  constructor() {
    this.init();
  }

  init() {
    this.animateTypingText();
  }

  animateTypingText() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
  }
}

// Loading Animation Class
class LoadingAnimation {
  constructor() {
    this.init();
  }

  init() {
    this.showLoadingScreen();
  }

  showLoadingScreen() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="loader-content">
        <div class="loader-spinner"></div>
        <h2>Loading Portfolio...</h2>
      </div>
    `;
    
    document.body.appendChild(loader);
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
          document.body.removeChild(loader);
        }, 500);
      }, 1000);
    });
  }
}

// Initialize all classes when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
  new SkillsAnimation();
  new CounterAnimation();
  new FormHandler();
  new ParallaxEffects();
  new InteractiveElements();
  new BackToTop();
  new TypingAnimation();
  new LoadingAnimation();
});

// Add CSS for additional animations and modals
const additionalStyles = `
  /* Video Modal Styles */
  .video-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .video-modal.show {
    opacity: 1;
  }
  
  .modal-content {
    position: relative;
    max-width: 800px;
    width: 90%;
    max-height: 90%;
  }
  
  .close-modal {
    position: absolute;
    top: -40px;
    right: 0;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10001;
  }
  
  .video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
  }
  
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  
  /* Success Message Styles */
  .success-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .success-message.show {
    opacity: 1;
  }
  
  .success-content {
    text-align: center;
  }
  
  .success-content i {
    font-size: 3rem;
    color: #10B981;
    margin-bottom: 1rem;
  }
  
  .success-content h3 {
    color: #1F2937;
    margin-bottom: 0.5rem;
  }
  
  .success-content p {
    color: #6B7280;
    margin-bottom: 0;
  }
  
  /* Page Loader Styles */
  .page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    transition: opacity 0.5s ease;
  }
  
  .page-loader.fade-out {
    opacity: 0;
  }
  
  .loader-content {
    text-align: center;
    color: white;
  }
  
  .loader-spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .loader-content h2 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  
  /* Mobile Menu Styles */
  @media (max-width: 768px) {
    .nav-menu {
      position: fixed;
      top: 70px;
      left: -100%;
      width: 100%;
      height: calc(100vh - 70px);
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding-top: 2rem;
      transition: left 0.3s ease;
      z-index: 999;
    }
    
    .nav-menu.active {
      left: 0;
    }
    
    .nav-menu .nav-link {
      margin: 1rem 0;
      font-size: 1.25rem;
    }
    
    .nav-toggle.active .bar:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active .bar:nth-child(2) {
      opacity: 0;
    }
    
    .nav-toggle.active .bar:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
    
    body.menu-open {
      overflow: hidden;
    }
  }
  
  /* Enhanced Hover Effects */
  .about-card:hover,
  .skill-category:hover,
  .project-card:hover,
  .testimonial-card:hover,
  .service-card:hover,
  .education-card:hover {
    box-shadow: 0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04);
  }
  
  /* Smooth Transitions */
  * {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Focus States */
  .form-control:focus {
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    border-color: #8B5CF6;
  }
  
  /* Active Navigation Link */
  .nav-link.active {
    color: #8B5CF6;
  }
  
  .nav-link.active::after {
    width: 100%;
  }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Export classes for potential external use
window.PortfolioJS = {
  Navigation,
  SkillsAnimation,
  CounterAnimation,
  FormHandler,
  ParallaxEffects,
  InteractiveElements,
  BackToTop,
  TypingAnimation,
  LoadingAnimation
};