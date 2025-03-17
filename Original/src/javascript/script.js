// Função para animar o menu mobile
const mobileBtn = document.getElementById('mobile_btn');
const mobileMenu = document.getElementById('mobile_menu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Função para animar o formulário de checkout
const checkoutPopup = document.getElementById('checkout-popup');
const closePopup = document.getElementById('close-popup');

if (checkoutPopup && closePopup) {
    // Abrir o popup de checkout
    function abrirCheckout() {
        checkoutPopup.style.display = 'flex';
        gsap.from(checkoutPopup, {
            duration: 0.5,
            opacity: 0,
            y: 50,
            ease: "power2.out",
        });
    }

    // Fechar o popup de checkout
    closePopup.addEventListener('click', () => {
        gsap.to(checkoutPopup, {
            duration: 0.5,
            opacity: 0,
            y: 50,
            ease: "power2.out",
            onComplete: () => {
                checkoutPopup.style.display = 'none';
            },
        });
    });

    // Adicionar evento de clique no botão de checkout
    document.querySelectorAll('.btn-default').forEach(button => {
        button.addEventListener('click', abrirCheckout);
    });
}