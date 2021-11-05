const {request, response}=require('express')
const {insertarReserva}=require('../services/serviciosCliente.js')
const {leerReserva}=require('../services/serviciosCliente.js')
const {leerReservas}=require('../services/serviciosCliente.js')
const {modificarReserva}=require('../services/serviciosCliente.js')
const {borrarReserva}=require('../services/serviciosCliente.js')

async function registrarReserva(peticion=request,respuesta=response){

    let datosCliente=peticion.body;

    try{

        await insertarReserva(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Reserva registrada con exito"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error registrando reserva"+error
        })

    }
}

async function buscarReserva(peticion=request,respuesta=response){
   
    let id=peticion.params.id
        
    try{

        let reserva=await leerReserva(id)
        respuesta.status(200).json({
            estado:true,
            datos: reserva
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error consultando la reserva"+error
        })

    }    

}

async function buscarReservas(peticion=request,respuesta=response){
   
    try{

        let reservas=await leerReservas()
        respuesta.status(200).json({
            estado:true,
            datos: reservas
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error consultando las reservas"+error
        })

    }    

}

async function editarReserva(peticion=request,respuesta=response){
    
    let datos=peticion.body
    let id=peticion.params.id

    try{

        await modificarReserva(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito editando la reserva"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error editando al reserva"+error
        })

    }

}

async function eliminarReserva(peticion=request,respuesta=response){
    
    let id=peticion.params.id

    try{

        await borrarReserva(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito eliminando la reserva"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error al eliminar la reserva"+error
        })

    }

}

module.exports={
    registrarReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva
}
