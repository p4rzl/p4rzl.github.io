document.addEventListener('DOMContentLoaded', function() {
    // Resetta lo stile di tutte le sezioni per essere sicuri che siano visibili
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
        section.style.position = "relative";
        section.style.display = "block";
        section.style.height = "auto";
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === targetId) {
                    link.classList.add('active');
                }
            });
            
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Compensazione per la navbar e il banner
                behavior: 'smooth'
            });
        });
    });
    
    // Animate skill bars
    function animateSkillBars() {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }
    
    // Trigger skill bar animation when in view
    const skillSection = document.getElementById('skills');
    if (skillSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(skillSection);
    }
    
    // Handle navigation bar color change on scroll
    function handleScroll() {
        const nav = document.querySelector('.nav-container');
        if (window.scrollY > 10) {
            nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.3)';
            nav.style.backgroundColor = 'rgba(30, 30, 30, 0.95)';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.backgroundColor = 'rgba(30, 30, 30, 0.8)';
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Profile image subtle hover effect
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.25), 0 0 15px rgba(10, 132, 255, 0.4)';
        });
        
        profileImage.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
        });
    }
    
    // Esegui immediatamente l'animazione delle skill bar se la sezione è già visibile
    if (skillSection && skillSection.getBoundingClientRect().top < window.innerHeight) {
        animateSkillBars();
    }
});
