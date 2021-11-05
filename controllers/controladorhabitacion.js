const {request, response}=require('express')
const {insertarHabitacion}=require('../services/serviciosHabitacion.js')
const {leerHabitacion}=require('../services/serviciosHabitacion.js')
const {leerHabitaciones}=require('../services/serviciosHabitacion.js')
const {modificarHabitacion}=require('../services/serviciosHabitacion.js')
const {borrarHabitacion}=require('../services/serviciosHabitacion.js')

async function registrarHabitacion(peticion=request,respuesta=response){

    let datosCliente=peticion.body;
    
    try{

        await insertarHabitacion(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Habitacion registrada con exito"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error registrando habitacion"+error
        })

    }
}

async function buscarHabitacion(peticion=request,respuesta=response){
    
    let id=peticion.params.id
        
    try{

        let habitacion=await leerHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            datos: habitacion
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al consultar la habitacion"+error
        })

    }  

}

async function buscarHabitaciones(peticion=request,respuesta=response){
    
    try{

        let habitaciones=await leerHabitaciones()
        respuesta.status(200).json({
            estado:true,
            datos: habitaciones
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al consultar las habitaciones"+error
        })

    }   
}

async function editarHabitacion(peticion=request,respuesta=response){
    
    let datos=peticion.body
    let id=peticion.params.id

    try{

        await modificarHabitacion(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito editando la habitacion"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al editar la habitacion"+error
        })

    }

}

async function eliminarHabitacion(peticion=request,respuesta=response){
    
    let id=peticion.params.id

    try{

        await borrarHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito eliminando habitacion"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error eliminando habitacion"+error
        })

    }

}

module.exports={
    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion
}