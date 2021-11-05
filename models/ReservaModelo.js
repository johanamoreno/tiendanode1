const {model,Schema}=require('mongoose')

const ReservaModelo=Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true},
    telefono:{
        type:String,
        require:true
    },
    fechainicio:{
        type:String,
        require:true
    },
    fechafinal:{
        type:String,
        require:true
    },
    numeropersonas:{
        type:Number,
        require:true
    }

})

module.exports=model('reservas', ReservaModelo)