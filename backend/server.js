const express = require('express');
const mercadopago = require('mercadopago');
const app = express();
const port = 7000;

// Middleware para processar JSON
app.use(express.json());

// Configuração do Mercado Pago
mercadopago.configure({
    access_token: 'APP_USR-2406878334819464-030321-e4ce3a324579f445da870bba47cd6008-1306813266', // Substitua pelo seu Access Token do Mercado Pago
});

// Rota para criar a preferência de pagamento
app.post('/create_preference', async (req, res) => {
    try {
        const { title, price, quantity } = req.body; // Dados do produto enviados pelo frontend

        // Cria a preferência de pagamento
        const preference = {
            items: [
                {
                    title: title,
                    unit_price: parseFloat(37),
                    quantity: parseInt(1),
                },
            ],
            back_urls: {
                success: 'https://seusite.com/sucesso', // URL de redirecionamento após pagamento aprovado
                failure: 'https://seusite.com/erro',    // URL de redirecionamento após pagamento recusado
                pending: 'https://seusite.com/pendente', // URL de redirecionamento para pagamentos pendentes
            },
            auto_return: 'approved', // Redireciona automaticamente após pagamento aprovado
        };

        const response = await mercadopago.preferences.create(preference);
        res.json({ id: response.body.id }); // Retorna o ID da preferência para o frontend
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao criar preferência de pagamento');
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});