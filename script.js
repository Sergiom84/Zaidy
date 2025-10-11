// ===========================
// Navigation Toggle
// ===========================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .tool-item, .book-content');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// Active Navigation Link
// ===========================
window.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        link.classList.remove('active');

        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Form Validation (for contact page)
// ===========================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('nombre');
        const email = document.getElementById('email');
        const phone = document.getElementById('telefono');
        const subject = document.getElementById('asunto');

        let isValid = true;

        // Simple validation
        if (!name.value.trim()) {
            showError(name, 'Por favor ingresa tu nombre');
            isValid = false;
        } else {
            removeError(name);
        }

        if (!email.value.trim() || !isValidEmail(email.value)) {
            showError(email, 'Por favor ingresa un email válido');
            isValid = false;
        } else {
            removeError(email);
        }

        if (!phone.value.trim()) {
            showError(phone, 'Por favor ingresa tu teléfono');
            isValid = false;
        } else {
            removeError(phone);
        }

        if (!subject.value.trim()) {
            showError(subject, 'Por favor ingresa el asunto');
            isValid = false;
        } else {
            removeError(subject);
        }

        if (isValid) {
            // Here you would normally send the form data
            showSuccessMessage();
            contactForm.reset();
        }
    });
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message') || document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    error.style.color = '#e74c3c';
    error.style.fontSize = '0.85rem';
    error.style.marginTop = '0.3rem';
    error.style.display = 'block';

    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(error);
    }

    input.style.borderColor = '#e74c3c';
}

function removeError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    if (error) {
        error.remove();
    }
    input.style.borderColor = '#ddd';
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
    successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(successDiv);

    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => successDiv.remove(), 300);
    }, 3000);
}

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Welcome Modal for Handbook
// ===========================
const welcomeModal = document.getElementById('welcomeModal');
const modalClose = document.querySelector('.modal-close');
const handbookForm = document.getElementById('handbookForm');

// Show modal after 3 seconds on homepage
if (welcomeModal) {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem('handbookModalSeen');

    if (!hasSeenModal) {
        setTimeout(() => {
            welcomeModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }, 3000);
    }

    // Close modal when clicking X
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            closeModal();
        });
    }

    // Close modal when clicking outside
    welcomeModal.addEventListener('click', (e) => {
        if (e.target === welcomeModal) {
            closeModal();
        }
    });

    // Handle form submission
    if (handbookForm) {
        handbookForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('modal-nombre').value;
            const email = document.getElementById('modal-email').value;
            const privacy = document.getElementById('modal-privacy').checked;

            if (!nombre || !email || !privacy) {
                alert('Por favor completa todos los campos y acepta la política de privacidad');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Por favor ingresa un email válido');
                return;
            }

            // Here you would normally send data to your email service
            // For now, we'll simulate success
            console.log('Form submitted:', { nombre, email });

            // Mark modal as seen
            localStorage.setItem('handbookModalSeen', 'true');

            // Show success and download handbook
            showHandbookSuccess(nombre);

            // Close modal after short delay
            setTimeout(() => {
                closeModal();
                handbookForm.reset();
            }, 2000);
        });
    }
}

function closeModal() {
    welcomeModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    localStorage.setItem('handbookModalSeen', 'true');
}

function showHandbookSuccess(nombre) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <strong>¡Gracias ${nombre}!</strong><br>
        Tu Handbook se descargará automáticamente. Revisa tu bandeja de entrada para más recursos.
    `;
    successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1.2rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 10001;
        animation: slideIn 0.3s ease;
        max-width: 350px;
    `;

    document.body.appendChild(successDiv);

    // Download handbook
    downloadHandbook();

    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => successDiv.remove(), 300);
    }, 5000);
}

function downloadHandbook() {
    // Direct download link to Google Drive file
    const handbookUrl = 'https://drive.google.com/uc?export=download&id=1gzjSJr1N4CVy1W3PDe1TRa-YB_6wbe_w';
    window.open(handbookUrl, '_blank');
}

// ===========================
// Image Carousel for Hero Background
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-bg-slide');

    if (slides.length > 0) {
        let currentSlide = 0;

        function nextSlide() {
            // Remove active class from current slide
            slides[currentSlide].classList.remove('active');

            // Move to next slide
            currentSlide = (currentSlide + 1) % slides.length;

            // Add active class to new slide
            slides[currentSlide].classList.add('active');
        }

        // Change slide every 4 seconds (4000 milliseconds)
        setInterval(nextSlide, 4000);
    }
});