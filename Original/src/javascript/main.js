// Configuração do GSAP e ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Mostrar o header ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM carregado. Exibindo o header...");
    const header = document.querySelector(".header");
    if (header) {
        header.classList.remove("hidden"); // Remove a classe hidden para exibir o header
    } else {
        console.error("Header não encontrado no DOM!");
    }

    // Atualização dinâmica do estado ativo no header
    const sections = document.querySelectorAll("section"); // Todas as seções da página
    const navItems = document.querySelectorAll(".nav-item"); // Itens do menu

    // Função para atualizar o estado ativo
    function updateActiveNav() {
        let currentSection = "";

        // Verifica qual seção está visível na tela
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        // Remove a classe "active" de todos os itens do menu
        navItems.forEach((item) => {
            item.classList.remove("active");
        });

        // Adiciona a classe "active" ao item do menu correspondente à seção atual
        const activeNavItem = document.querySelector(`.nav-item a[href="#${currentSection}"]`);
        if (activeNavItem) {
            activeNavItem.parentElement.classList.add("active");
        }
    }

    // Atualiza o estado ativo ao rolar a página
    window.addEventListener("scroll", updateActiveNav);

    // Atualiza o estado ativo ao carregar a página
    updateActiveNav();
});

// Animação de construção da seção #home
gsap.from("#home .hero-title .letter", {
    scrollTrigger: {
        trigger: "#home",
        start: "top center",
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out",
});

gsap.from("#home .hero-description", {
    scrollTrigger: {
        trigger: "#home",
        start: "top center",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
});

gsap.from("#home .hero-cta", {
    scrollTrigger: {
        trigger: "#home",
        start: "top center",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
});

// Animação do livro 3D seguindo o mouse
const book = document.getElementById('book-3d');

if (book) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20; // Movimento horizontal
        const y = (e.clientY / window.innerHeight - 0.5) * 20; // Movimento vertical
        book.style.transform = `translateY(-50%) perspective(1000px) rotateY(${-15 + x}deg) rotateX(${y}deg)`;
    });
}

// Animação do texto "LinkedIn" seguindo o mouse
const linkedinText = document.querySelector('.linkedin-gravura');

if (linkedinText) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10; // Movimento horizontal
        const y = (e.clientY / window.innerHeight - 0.5) * 10; // Movimento vertical
        linkedinText.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
    });
}

// Animação de transformação da seção #menu
gsap.from("#menu .dish", {
    scrollTrigger: {
        trigger: "#menu",
        start: "top center",
    },
    opacity: 0,
    rotationY: 90,
    y: 50,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
});

gsap.from("#menu .dish-title, #menu .dish-description", {
    scrollTrigger: {
        trigger: "#menu",
        start: "top center",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
});

// Animação de montagem da seção #testimonials
gsap.from("#testimonials .feedback", {
    scrollTrigger: {
        trigger: "#testimonials",
        start: "top center",
    },
    opacity: 0,
    scaleY: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
});

gsap.from("#testimonials .section-title", {
    scrollTrigger: {
        trigger: "#testimonials",
        start: "top center",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
});

// Animação de construção da seção #sobre-mim
gsap.from("#sobre-mim .sobre-mim-image", {
    scrollTrigger: {
        trigger: "#sobre-mim",
        start: "top center",
    },
    opacity: 0,
    rotationY: 90,
    duration: 1,
    ease: "power2.out",
});

gsap.from("#sobre-mim .sobre-mim-title, #sobre-mim .sobre-mim-description", {
    scrollTrigger: {
        trigger: "#sobre-mim",
        start: "top center",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
});

// Animação de ativação da seção #footer
gsap.from("#footer .social-button", {
    scrollTrigger: {
        trigger: "footer",
        start: "top center",
    },
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
});

gsap.from(".footer-wave", {
    scrollTrigger: {
        trigger: "footer",
        start: "top center",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
});

// Configuração do Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8, speed: 3 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});