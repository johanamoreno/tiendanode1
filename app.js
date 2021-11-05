require ( 'dotenv' ) . config ( )

const ServidorModelo = require('./models/ServidorModelo.js');

const servidorHotel= new ServidorModelo();


servidorHotel.despertarServidor()