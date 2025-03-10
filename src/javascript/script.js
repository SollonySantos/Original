$(document).ready(function () {
    // Menu Mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Scroll para seções
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Animação com ScrollReveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    // Abrir o pop-up ao clicar nos botões
    $('#open-popup-1, #open-popup-2').on('click', function () {
        $('#checkout-popup').css('display', 'flex');
    });

    // Fechar o pop-up ao clicar no "X"
    $('#close-popup').on('click', function () {
        $('#checkout-popup').css('display', 'none');
    });

    // Fechar o pop-up ao clicar fora dele
    $(window).on('click', function (event) {
        if (event.target === $('#checkout-popup')[0]) {
            $('#checkout-popup').css('display', 'none');
        }
    });

    // Enviar formulário de pagamento
    $('#payment-form').on('submit', async function (e) {
        e.preventDefault();

        const product = {
            title: 'Ebook: Domine o LinkedIn',
            price: 50.0,
            quantity: 1,
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

    // Efeito de Iluminação no Shape
    $('.shape').on('mousemove', function (e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        $(this).css('background', `radial-gradient(circle at ${x * 100}% ${y * 100}%, #0077B5, #00A0DC)`);
    });

    // Animação de Abertura do Livro 3D
    const book = document.getElementById('book-3d');
    book.addEventListener('click', () => {
        book.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateY(15deg) rotateX(10deg)';
        setTimeout(() => {
            book.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateY(15deg)';
        }, 1000);
    });

    // Efeito de Flutuação do Livro 3D
    const floatBook = () => {
        book.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateY(15deg) translateY(-10px)';
        setTimeout(() => {
            book.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateY(15deg) translateY(0)';
        }, 1500);
    };
    setInterval(floatBook, 3000);
});