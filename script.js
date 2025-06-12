document.addEventListener('DOMContentLoaded', function() {
    const typingText = "Saya adalah Yilzi";
    const typingSubText = "Saya adalah seorang siswa yang tertarik akan pengembangan website front end dan back end";
    let i = 0;
    let j = 0;
    
    function typeWriter() {
        if (i < typingText.length) {
            document.getElementById("typing").innerHTML += typingText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            document.getElementById("typing").style.borderRight = "none";
            setTimeout(subTypeWriter, 500);
        }
    }
    
    function subTypeWriter() {
        if (j < typingSubText.length) {
            document.getElementById("typing-sub").innerHTML += typingSubText.charAt(j);
            j++;
            setTimeout(subTypeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 1000);
    
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('open');
    });
    
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('open');
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    function checkScroll() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('show');
            }
        });
        
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
            backToTopButton.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopButton.classList.remove('visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    }
    
    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    checkScroll();
});