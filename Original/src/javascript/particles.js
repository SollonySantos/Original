// Configuração do Particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 50, // Reduzi o número de partículas para melhor desempenho
            density: {
                enable: true,
                value_area: 800 // Área de densidade das partículas
            }
        },
        color: {
            value: "#ffffff" // Cor das partículas
        },
        shape: {
            type: "circle", // Forma das partículas
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5, // Opacidade das partículas
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3, // Tamanho das partículas
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150, // Distância para ligar as partículas
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2, // Reduzi a velocidade para melhor desempenho
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out", // Comportamento ao sair da tela
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble" // Efeito ao passar o mouse
            },
            onclick: {
                enable: true,
                mode: "push" // Efeito ao clicar
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4 // Número de partículas ao clicar
            }
        }
    },
    retina_detect: true // Detecção de retina
});