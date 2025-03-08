const express = require('express');
const mercadopago = require('mercadopago');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Configura o Mercado Pago com o Access Token do .env
mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN,
});

// Rota para criar a preferência de pagamento
app.post('/create-preference', async (req, res) => {
    const { title, quantity, unit_price } = req.body;

    const preference = {
        items: [
            {
                title,
                quantity,
                currency_id: 'BRL', // Moeda: Reais Brasileiros
                unit_price,
            },
        ],
        back_urls: {
            success: 'http://localhost:3000/success', // URL de sucesso
            failure: 'http://localhost:3000/failure', // URL de falha
            pending: 'http://localhost:3000/pending', // URL de pendente
        },
        auto_return: 'approved', // Redireciona automaticamente após pagamento aprovado
    };

    try {
        const response = await mercadopago.preferences.create(preference);
        res.json({ id: response.body.id, init_point: response.body.init_point });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota inicial para teste
app.get('/', (req, res) => {
    res.send('Backend do Mercado Pago funcionando!');
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});