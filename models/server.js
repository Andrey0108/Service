const express = require('express')
const dbConnection = require('../database/config')
require('dotenv').config()
const {getService, postService,putService, deleteService} = require ('../controllers/Service.js')

class Server{
    //el constructor instancia una clase
    //si es un metodo tiene parentesis y atributo no
    constructor(){
        this.app = express()
        this.listen()
        this.dbConnection()
        this.pathService = '/api/Service'//indica una ruta publica de una api 
        this.route()
    }

    async dbConnection(){//espera a que haya una respuesta
        await dbConnection()
    }

    route(){
        this.app.use(express.json())//Emplear json al req body
        this.app.get(this.pathService, getService)//call to controller
        this.app.post(this.pathService, postService)
        this.app.put(this.pathService, putService)
        this.app.delete(this.pathService+'/:id',deleteService)
    }

    listen(){
        //variable de entorno o global, verifica si el servidor esta corriendo
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port:${process.env.PORT}`);
            
        })
    }
}

module.exports = Server //Export the class Server