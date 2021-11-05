const ReservaModelo = require('../models/ReservaModelo.js')

async function insertarReserva(datosReserva){

    let reservaAInsertar= new ReservaModelo(datosReserva)

    return await reservaAInsertar.save()

}

async function leerReserva(id){

    let reserva=await ReservaModelo.findById(id)
    return reserva

}

async function leerReservas(){

    let reservas=await ReservaModelo.find()
    return reservas

}

async function modificarReserva(id,datos){

    return await ReservaModelo.findByIdAndUpdate(id,datos)

}

async function borrarReserva(id){

    return await ReservaModelo.findByIdAndDelete(id)
}

module.exports={
    insertarReserva,
    leerReserva,
    leerReservas,
    modificarReserva,
    borrarReserva,
}