const mercadopago = require('mercadopago');

// Configura o Access Token (substitua pelo seu Access Token)
mercadopago.configure({
    access_token: 'APP_USR-2406878334819464-030321-e4ce3a324579f445da870bba47cd6008-1306813266' // Substitua pelo seu Access Token
});

// Cria uma preferência de pagamento
const preference = {
    items: [
        {
            title: 'Produto Teste',
            quantity: 1,
            currency_id: 'BRL', // Moeda: Reais Brasileiros
            unit_price: 100.00 // Preço unitário do produto
        }
    ],
    back_urls: {
        success: 'https://seusite.com/sucesso', // URL de sucesso
        failure: 'https://seusite.com/falha',   // URL de falha
        pending: 'https://seusite.com/pendente' // URL de pendente
    },
    auto_return: 'approved' // Redireciona automaticamente após pagamento aprovado
};

// Cria a preferência de pagamento
mercadopago.preferences.create(preference)
    .then(response => {
        console.log('ID da preferência:', response.body.id);
        console.log('Link para pagamento:', response.body.init_point);
    })
    .catch(error => {
        console.error('Erro ao criar preferência:', error);
    });