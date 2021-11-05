const {Router} = require('express')

const {registrarReserva}=require('../controllers/controlador.js')
const {buscarReserva}=require('../controllers/controlador.js')
const {buscarReservas}=require('../controllers/controlador.js')
const {editarReserva}=require('../controllers/controlador.js')
const {eliminarReserva}=require('../controllers/controlador.js')

const {registrarHabitacion}=require('../controllers/controladorhabitacion.js')
const {buscarHabitacion}=require('../controllers/controladorhabitacion.js')
const {buscarHabitaciones}=require('../controllers/controladorhabitacion.js')
const {editarHabitacion}=require('../controllers/controladorhabitacion.js')
const {eliminarHabitacion}=require('../controllers/controladorhabitacion.js')



const rutas=Router()

rutas.get('/avanzada/v1/reserva/:id', buscarReserva) 
rutas.get('/avanzada/v1/reserva', buscarReservas)       
rutas.post('/avanzada/v1/reserva', registrarReserva)  
rutas.put('/avanzada/v1/reserva/:id', editarReserva)  
rutas.delete('/avanzada/v1/reserva/:id', eliminarReserva)

rutas.get('/avanzada/v1/habitacion/:id', buscarHabitacion) 
rutas.get('/avanzada/v1/habitacion', buscarHabitaciones)       
rutas.post('/avanzada/v1/habitacion', registrarHabitacion)  
rutas.put('/avanzada/v1/habitacion/:id', editarHabitacion)  
rutas.delete('/avanzada/v1/habitacion/:id', eliminarHabitacion)

module.exports=rutas