const {model,Schema}=require('mongoose')

const HabitacionModelo=Schema({
    nombre:{
        type:String,
        require:true
    },
    foto:{
        type:String,
        require:true},
    descripcion:{
        type:String,
        require:true
    },
    precioadulto:{
        type:Number,
        require:true
    },
    precionino:{
        type:Number,
        require:true
    }
})

module.exports=model('habitaciones', HabitacionModelo)