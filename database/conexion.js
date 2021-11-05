const mongoose = require('mongoose');

async function conectarBD(){
    try{

        await mongoose.connect(process.env.BASEDATOS);
        console.log("Exito conectandonos a la BD")

    }catch(error){

        console.log('Fallamos ${error}')

    }

}

module.exports={
    conectarBD
}