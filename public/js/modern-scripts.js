// Modern Portfolio JavaScript

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

// Navigation
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
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }

  handleSmoothScroll() {
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Back to top functionality
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  handleActiveLink() {
    const sections = document.querySelectorAll('section');
    
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
    const logoText = document.querySelector('.logo-text');
    
    if (logoText) {
      // Add click animation
      logoText.addEventListener('click', () => {
        logoText.style.animation = 'none';
        setTimeout(() => {
          logoText.style.animation = 'logoPulse 0.8s ease-in-out';
        }, 10);
      });

      // Add scroll-based animation changes
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          logoText.style.animationDuration = '2s';
        } else {
          logoText.style.animationDuration = '3s';
        }
      });

      // Add mouse enter/leave effects
      logoText.addEventListener('mouseenter', () => {
        logoText.style.transform = 'scale(1.05)';
      });

      logoText.addEventListener('mouseleave', () => {
        logoText.style.transform = 'scale(1)';
      });
    }
  }
}

// Typing Animation
class TypingAnimation {
  constructor() {
    this.init();
  }

  init() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const texts = [
      'Senior Frontend Developer',
      'React.js Expert',
      'Next.js Specialist',
      'TypeScript Developer',
      'UI/UX Enthusiast'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  }
}

// Skills Animation
class SkillsAnimation {
  constructor() {
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    });

    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  }

  animateSkillBars() {
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  }
}

// 3D Card Effects
class CardEffects {
  constructor() {
    this.init();
  }

  init() {
    this.add3DEffects();
    this.addHoverEffects();
  }

  add3DEffects() {
    // Full 3D effects for project cards, skill categories, info cards, and contact cards
    const full3DCards = document.querySelectorAll('.project-card, .skill-category, .info-card, .contact-card');
    
    full3DCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        card.style.boxShadow = `0 ${Math.abs(rotateX) * 2}px ${Math.abs(rotateY) * 2}px rgba(0, 0, 0, 0.1)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        card.style.boxShadow = '';
      });
    });

    // Minimal effects for timeline cards
    const timelineCards = document.querySelectorAll('.timeline-content');
    
    timelineCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30; // Reduced rotation
        const rotateY = (centerX - x) / 30; // Reduced rotation
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
        card.style.boxShadow = `0 ${Math.abs(rotateX) * 1}px ${Math.abs(rotateY) * 1}px rgba(0, 0, 0, 0.05)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        card.style.boxShadow = '';
      });
    });

    // Add 3D effects to SVG icons
    const svgIcons = document.querySelectorAll('.hand-icon, .heart-icon');
    svgIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.3) rotateY(20deg) rotateX(10deg)';
        icon.style.filter = 'drop-shadow(0 0 15px rgba(37, 99, 235, 0.8))';
      });

      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg)';
        icon.style.filter = '';
      });
    });

    // Add trust-focused interactions
    const trustIndicators = document.querySelectorAll('.trust-indicator');
    trustIndicators.forEach(indicator => {
      indicator.addEventListener('mouseenter', () => {
        indicator.style.transform = 'scale(1.05)';
        indicator.style.boxShadow = '0 8px 25px rgba(5, 150, 105, 0.3)';
      });

      indicator.addEventListener('mouseleave', () => {
        indicator.style.transform = 'scale(1)';
        indicator.style.boxShadow = '';
      });
    });
  }

  addHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px) scale(1)';
      });
    });
  }
}

// Parallax Effects
class ParallaxEffects {
  constructor() {
    this.init();
  }

  init() {
    this.handleFloatingShapes();
    this.handleTechBadges();
  }

  handleFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    });
  }

  handleTechBadges() {
    const badges = document.querySelectorAll('.tech-badge');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      badges.forEach((badge, index) => {
        const speed = 0.3 + (index * 0.1);
        badge.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
      });
    });

    // Add 3D hover effects to tech badges
    badges.forEach(badge => {
      badge.addEventListener('mouseenter', () => {
        badge.style.transform += ' scale(1.1) rotateY(15deg)';
        badge.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
      });

      badge.addEventListener('mouseleave', () => {
        badge.style.transform = badge.style.transform.replace(' scale(1.1) rotateY(15deg)', '');
        badge.style.boxShadow = '';
      });
    });
  }
}

// Form Handling
class FormHandler {
  constructor() {
    this.init();
  }

  init() {
    if (contactForm) {
      this.handleFormSubmission();
      this.addFormAnimations();
    }
  }

  handleFormSubmission() {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Show loading state
      submitBtn.innerHTML = '<span class="loading"></span> Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        this.showNotification('Message sent successfully!', 'success');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }

  addFormAnimations() {
    const inputs = contactForm.querySelectorAll('.form-control');
    
    inputs.forEach(input => {
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

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10b981' : '#6366f1'};
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Scroll Animations
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.handleScrollReveal();
    this.handleCounterAnimation();
  }

  handleScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    elements.forEach(el => observer.observe(el));
  }

  handleCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    counters.forEach(counter => observer.observe(counter));
  }

  animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const suffix = element.textContent.replace(/\d/g, '');
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + suffix;
    }, 30);
  }
}

// Mouse Cursor Effects
class CursorEffects {
  constructor() {
    this.init();
  }

  init() {
    this.createCustomCursor();
    this.addCursorEffects();
  }

  createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: var(--primary-color);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transition: transform 0.1s ease;
      mix-blend-mode: difference;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    });
  }

  addCursorEffects() {
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        document.querySelector('.custom-cursor').style.transform = 'scale(2)';
      });

      element.addEventListener('mouseleave', () => {
        document.querySelector('.custom-cursor').style.transform = 'scale(1)';
      });
    });
  }
}

// Performance Optimizations
class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    this.lazyLoadImages();
    this.debounceScrollEvents();
  }

  lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  debounceScrollEvents() {
    let scrollTimeout;
    
    const debouncedScrollHandler = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Scroll-dependent functions here
      }, 10);
    };

    window.addEventListener('scroll', debouncedScrollHandler);
  }
}

// Theme Toggle (Optional)
class ThemeToggle {
  constructor() {
    this.init();
  }

  init() {
    this.createThemeToggle();
    this.handleThemeChange();
  }

  createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.style.cssText = `
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      z-index: 1000;
      box-shadow: var(--shadow-lg);
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toggle);
  }

  handleThemeChange() {
    const toggle = document.querySelector('.theme-toggle');
    
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      
      // Save theme preference
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
  new TypingAnimation();
  new SkillsAnimation();
  new CardEffects();
  new ParallaxEffects();
  new FormHandler();
  new ScrollAnimations();
  new CursorEffects();
  new PerformanceOptimizer();
  // new ThemeToggle(); // Uncomment if you want theme toggle
});

// Handle page load animations
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Animate hero elements
  const heroElements = document.querySelectorAll('.hero-text > *');
  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 200);
  });
});

// Handle resize events
window.addEventListener('resize', () => {
  // Recalculate any size-dependent elements
  AOS.refresh();
});

// Add some utility functions
const utils = {
  // Smooth scroll to element
  scrollToElement: (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },

  // Check if element is in viewport
  isInViewport: (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Debounce function
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// Export utils for global use
window.utils = utils;

