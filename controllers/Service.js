const Service = require('../models/service')

//Get all documents from Vehicle
const getService = async(req, res)=>{
    const servie = await Service.find()
    res.json(servie)
}

//Post Create a document in the collection Vehicle
const postService = async(req, res)=>{
    const body = req.body //Get the body send from postman or a form
    let msg = ' inserted Service'
    try {
        const Service = new Service(body)//create the object Vehicle in RAM
        await Service.save()//insert object at the collection 
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

const putService = async(req,res)=>{
    const {_id,nameService, price, category} = req.body //Destructuring
    let msg = 'update Service '
    try {
        await Service.findByIdAndUpdate({_id:_id},{nameService:nameService,price,category})
    } catch (error) {
        msg = error
    }
    res.json({msg:msg})
}

const deleteService = async (req,res)=>{
    const _id = req.params.id //Get param _id
    try {
        await Service.findByIdAndDelete({_id:_id})
        res.json('Service deleted')
    } catch (error) {
        res.status(500).json(error,{msg:'There was problem deleting the Service'})
    }
}

module.exports = {
    getService, postService, putService, deleteService
}