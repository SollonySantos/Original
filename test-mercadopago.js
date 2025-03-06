const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN, // Usa o token do .env
});

console.log('Mercado Pago configurado com sucesso!');