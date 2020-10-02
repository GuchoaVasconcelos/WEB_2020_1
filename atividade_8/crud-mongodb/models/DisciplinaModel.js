var mongoose = require('mongoose');

var DisciplinaSchema = mongoose.Schema(
    {
        nome: {type: String, require: true, max: 100},
        curso: {type: String, require: true, max: 100},
        capacidade: {type: Number, require: true}
    }
);

var DisciplinaModel = mongoose.model('disciplinas', DisciplinaSchema);

module.exports = DisciplinaModel;