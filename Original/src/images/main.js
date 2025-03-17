// Configuração do GSAP e ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animação de entrada com GSAP (apenas para a seção #home)
gsap.from("#home .hero-title, #home .hero-description, #home .hero-cta", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.3,
});

// Efeito de hover nos botões CTA (apenas para a seção #home)
document.querySelectorAll('#home .cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            duration: 0.3,
            y: -5,
            ease: "power2.out",
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            duration: 0.3,
            y: 0,
            ease: "power2.out",
        });
    });
});

// Interatividade com o mouse no fundo
const homeSection = document.getElementById('home');
if (homeSection) {
    homeSection.addEventListener('mousemove', (e) => {
        const rect = homeSection.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // Ajusta os raios solares
        gsap.to('.sun-rays', {
            duration: 0.5,
            background: `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3) 20%, transparent 60%)`,
            ease: "power2.out",
        });

        // Ajusta as reflexões de água
        gsap.to('.water-reflection', {
            duration: 0.5,
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 ${80 + (y / 10)}%)`,
            ease: "power2.out",
        });

        // Ajusta o efeito de brilho (lens flare)
        gsap.to('.lens-flare', {
            duration: 0.5,
            top: `${y}%`,
            left: `${x}%`,
            ease: "power2.out",
        });

        // Ajusta o nome "LinkedIn"
        gsap.to('.linkedin-gravura .letter', {
            duration: 0.5,
            y: -((y - 50) / 10),
            x: -((x - 50) / 10),
            ease: "power2.out",
        });
    });
}

// Livro 3D Realista (apenas para a seção #home)
const book = document.getElementById('book-3d');

if (book) {
    // Movimento do livro com o mouse
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 70; // Movimento horizontal
        const y = (e.clientY / window.innerHeight - 0.5) * 70; // Movimento vertical

        gsap.to(book, {
            duration: 0.5,
            rotateY: x,
            rotateX: -y,
            ease: "power2.out",
        });
    });

    // Efeito de Flutuação do Livro 3D
    const floatBook = () => {
        gsap.to(book, {
            duration: 1.5,
            y: -10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    };

    floatBook();

    // Movimento das páginas do livro
    const bookPages = document.querySelector('.book-pages');

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20; // Movimento horizontal
        const y = (e.clientY / window.innerHeight - 0.5) * 20; // Movimento vertical

        bookPages.style.transform = `translateZ(-20px) rotateX(${y}deg) rotateY(${x}deg)`;
    });

    // Abrir o livro ao clicar
    book.addEventListener('click', () => {
        if (book.classList.contains('open')) {
            gsap.to(book, {
                duration: 1,
                rotateY: -15,
                ease: "power2.inOut",
            });
            book.classList.remove('open');
        } else {
            gsap.to(book, {
                duration: 1,
                rotateY: 180,
                ease: "power2.inOut",
            });
            book.classList.add('open');
        }
    });
}

// Efeito de Scroll Reveal para outras seções (se necessário)
ScrollReveal().reveal('.section', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    reset: true,
});