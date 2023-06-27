const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

var Reserva = new Schema ({

    numero      : { type:Number },
    flutuante      : { type:String },
    cliente     : { type:String },
    funcionario : { type:String},
    data        : { type:Date },            
    inicio      : { type:Number},
    fim         : { type:Number },    
    valor       : { type:Number },
    valortotal  : { type:Number },    
    observacao  : { type:String },
    status      : { type:String}    
})

const ReservaModel = mongoose.model('reservas_colls', Reserva);


module.exports = {ReservaModel}