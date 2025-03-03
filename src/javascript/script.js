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


app.post('/processar-pagamento', async (req, res) => {
    const { nome, email, cpf, metodoPagamento, token } = req.body;

    try {
        // Cria o pagamento
        const paymentData = {
            transaction_amount: 100.00, // Valor em reais
            token,
            description: 'Compra do E-book Incrível',
            installments: metodoPagamento === 'cartao' ? 1 : 1, // Número de parcelas
            payment_method_id: metodoPagamento === 'cartao' ? 'visa' : metodoPagamento,
            payer: {
                email,
                identification: {
                    type: 'CPF',
                    number: cpf,
                },
            },
        };

        // Envia a requisição ao Mercado Pago
        const response = await mercadopago.payment.create(paymentData);
        res.json({ sucesso: true, status: response.body.status });
    } catch (error) {
        console.error('Erro no pagamento:', error);
        res.json({ sucesso: false });
    }
});