$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});


// Abrir o pop-up ao clicar nos botões
document.getElementById('open-popup-1').addEventListener('click', () => {
    document.getElementById('checkout-popup').style.display = 'flex';
});

document.getElementById('open-popup-2').addEventListener('click', () => {
    document.getElementById('checkout-popup').style.display = 'flex';
});

// Fechar o pop-up ao clicar no "X"
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('checkout-popup').style.display = 'none';
});

// Fechar o pop-up ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('checkout-popup')) {
        document.getElementById('checkout-popup').style.display = 'none';
    }
});

const response = await fetch('/create_preference', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        cardholderName,
        installments,
    }),
});

// Abrir o pop-up ao clicar nos botões
document.getElementById('open-popup-1').addEventListener('click', () => {
    document.getElementById('checkout-popup').style.display = 'flex';
});

document.getElementById('open-popup-2').addEventListener('click', () => {
    document.getElementById('checkout-popup').style.display = 'flex';
});

// Fechar o pop-up ao clicar no "X"
document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('checkout-popup').style.display = 'none';
});

// Fechar o pop-up ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('checkout-popup')) {
        document.getElementById('checkout-popup').style.display = 'none';
    }
});

const form = document.getElementById('payment-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const product = {
        title: 'Ebook Incrível', // Nome do produto
        price: 50.00,           // Preço do produto
        quantity: 1,            // Quantidade
    };

    try {
        const response = await fetch('http://localhost:3000/create_preference', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        const { id } = await response.json();
        window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?preference_id=${id}`;
    } catch (error) {
        console.error(error);
        alert('Erro ao processar o pagamento');
    }
});