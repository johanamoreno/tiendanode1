const HabitacionModelo = require('../models/HabitacionModelo.js')

async function insertarHabitacion(datosHabitacion){

    let habitacionAInsertar= new HabitacionModelo(datosHabitacion)

    return await habitacionAInsertar.save()

}

async function leerHabitacion(id){

    let habitacion=await HabitacionModelo.findById(id)
    return habitacion

}

async function leerHabitaciones(){

    let habitaciones=await HabitacionModelo.find()
    return habitaciones

}

async function modificarHabitacion(id,datos){

    return await HabitacionModelo.findByIdAndUpdate(id,datos)

}

async function borrarHabitacion(id){

    return await HabitacionModelo.findByIdAndDelete(id)
}

module.exports={
    insertarHabitacion,
    leerHabitacion,
    leerHabitaciones,
    modificarHabitacion,
    borrarHabitacion,
}