var Contrato = require('../models/contrato')

module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.findByIdContrato = id => {
    return Contrato
        .findOne({_id : id})
        .exec()
}

module.exports.getContratosByEntidade = entidade => {
    return Contrato
        .find({entidade_comunicante : entidade})
        .exec()
}

module.exports.getContratosByNIPC = nipc => {
    return Contrato
        .find({NIPC_entidade_comunicante : nipc})
        .exec()
}

module.exports.getContratosByTipo = tipo => {
    return Contrato
        .find({tipoprocedimento : tipo})
        .exec()
}

module.exports.findEntidades = () => {
    return Contrato
        .find()
        .distinct('entidade_comunicante')
        .sort({entidade_comunicante : 1})
        .exec()
}

module.exports.findTipos = () => {
    return Contrato
        .find()
        .distinct('tipoprocedimento')
        .sort({tipoprocedimento : 1})
        .exec()
}

module.exports.insert = contrato => {
        var newcontrato = new Contrato(contrato)
        return newcontrato.save()
}

module.exports.update = (id, contrato) => {
    return Contrato.findByIdAndUpdate(id, contrato, {new : true})
    .exec()
}

module.exports.delete = id => {
    return Contrato.findByIdAndDelete(id)
    .exec()
}
