        document.addEventListener('DOMContentLoaded', function() {
            
            // Header scroll effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Intersection Observer for fade-in animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.style.getPropertyValue('--delay') || '0s';
                        entry.target.style.transitionDelay = delay;
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });

            // Scroll to top button
            const scrollTopBtn = document.getElementById('scrollTopBtn');
            window.addEventListener('scroll', () => {
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            });
            
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const headerHeight = document.getElementById('header').offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Fechar menu mobile após clique
                        if (window.innerWidth <= 768) {
                            hamburger.classList.remove('active');
                            navMenu.classList.remove('active');
                        }
                    }
                });
            });

            // Mobile menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
                this.setAttribute('aria-expanded', this.classList.contains('active'));
            });

            // Fechar menu ao clicar fora dele
            document.addEventListener('click', function(e) {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });

            // Fechar menu ao redimensionar a janela
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });

            // Tema escuro/claro
            const themeToggle = document.querySelector('.theme-toggle');
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            
            // Verificar preferência do usuário ou tema salvo
            const currentTheme = localStorage.getItem('theme') || 
                                (prefersDarkScheme.matches ? 'dark' : 'light');
            
            if (currentTheme === 'dark') {
                document.body.classList.add('dark-theme');
            }
            
            // Alternar tema
            themeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-theme');
                
                const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
                localStorage.setItem('theme', theme);
            });
        });