const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas')

//Define a schema
var Schema = mongoose.Schema;

const Flutuantes = new Schema({
  numero: {type:Number},
  capacidade:{type:String},
  valor: {type:Number},
  tipo:{type:String},
  descricao: {type:String},
  image: {type:String}
});

const FlutuantesModel = mongoose.model('flutuantes', Flutuantes);



module.exports = {FlutuantesModel};