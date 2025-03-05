// mercadopago-config.js
const mercadopago = require('mercadopago');

// Configuração do Mercado Pago
mercadopago.configure({
    access_token: 'APP_USR-2406878334819464-030321-e4ce3a324579f445da870bba47cd6008-1306813266', // Substitua pelo seu Access Token do Mercado Pago
});

module.exports = mercadopago;