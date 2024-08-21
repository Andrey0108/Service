const {model, Schema} = require('mongoose')

const ServiceSchema = new Schema({
    nameService: {

        type: String,
        required:[true, 'The field name service is required'],
        minLength :[5, 'Min 3 characters'],
    },
    price: {
        type: Number,
        required:[true, 'The field name is required'],
        minLength :[3, 'Min 5 characters'],
    },
    category: {
        type: String,
        required:[true, 'The field category is required'],
    }
}) 

module.exports = model('Service',ServiceSchema,'service')//primero define la clase, el segundo al nombre de la esquema, tercero nombre de la collection