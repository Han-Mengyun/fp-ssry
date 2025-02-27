// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
});

// Image Gallery
const galleryImages = document.querySelectorAll('.gallery-image');
if (galleryImages.length > 0) {
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('expanded');
        });
    });
}

// Form Validation
// const contactForm = document.getElementById('contact-form');
// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         // Add your form validation and submission logic here
//         alert('消息已发送！我们会尽快回复您。');
//         contactForm.reset();
//     });
// }

// 图片点击放大效果
document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', function() {
        this.classList.toggle('expanded');
        const overlay = this.nextElementSibling;
        if (overlay) {
            overlay.style.bottom = this.classList.contains('expanded') ? '0' : '-100%';
        }
    });
});

// 表单验证
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 简单的表单验证
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('请填写所有必填字段！');
            return;
        }

        // 这里可以添加发送表单数据的逻辑
        alert('消息已发送！我们会尽快回复您。');
        this.reset();
    });
}

// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
