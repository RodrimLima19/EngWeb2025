var Edicao = require('../models/edicao')

module.exports.list = () => {
    return Edicao
        .find()
        .exec()
}

module.exports.findByIdEdicao = id => {
    return Edicao
        .findOne({_id : id})
        .exec()
}

module.exports.getByOrganizacao = org => {
    return Edicao
        .find(
            { organizacao: org },
            { _id: 0, anoEdição: 1, organizacao: 1, vencedor: 1 }
        )
        .exec();
};

module.exports.getPaisesOrganizadores = (papel) => {
    if (papel === 'org') {
        return Edicao
            .aggregate([
                { $match: { organizacao: { $exists: true } } },
                { $group: { _id: "$organizacao", anos: { $push: "$anoEdição" } } },
                { $sort: { _id: 1 } },
                { $project: { _id: 0, pais: "$_id", anos: 1 } }
            ])
            .exec();
    } else if (papel === 'venc') {
        return Edicao
            .aggregate([
                { $match: { vencedor: { $exists: true } } },
                { $group: { _id: "$vencedor", anos: { $push: "$anoEdição" } } },
                { $sort: { _id: 1 } },
                { $project: { _id: 0, pais: "$_id", anos: 1 } }
            ])
            .exec();
    } else {
        return Promise.reject(new Error('Invalid papel parameter'));
    }
};

module.exports.getInterpretes = () => {
    return Edicao
        .aggregate([
            { $unwind: "$musicas" },
            { $group: { _id: { nome: "$musicas.intérprete", país: "$musicas.país" } } },
            { $sort: { "_id.nome": 1 } },
            { $project: { _id: 0, nome: "$_id.nome", país: "$_id.país" } }
        ])
        .exec();
};

module.exports.insert = edicao => {
    var newedicao = new Edicao(edicao)
    return newedicao.save()
}

module.exports.update = (id, edicao) => {
    return Edicao.findByIdAndUpdate(id, edicao, {new : true})
    .exec()
}

module.exports.delete = id => {
    return Edicao.findByIdAndDelete(id)
    .exec()
}

module.exports.getInfoPais = (pais) => {
    return Edicao.aggregate([
        {
            $facet: {
                organizou: [
                    { $match: { organizacao: pais } },
                    { $project: { _id: 1, anoEdição: 1 } }
                ],
                participou: [
                    { $unwind: "$musicas" },
                    { $match: { "musicas.país": pais } },
                    {
                        $project: {
                            _id: 1,
                            anoEdição: 1,
                            titulo: "$musicas.título",
                            interprete: "$musicas.intérprete",
                            vencedor: {
                                $cond: { if: { $eq: ["$vencedor", pais] }, then: true, else: false }
                            }
                        }
                    }
                ]
            }
        }
    ]).then(result => {
        if (result.length > 0) {
            return {
                pais: pais,
                organizou: result[0].organizou,
                participou: result[0].participou
            }
        } else {
            return {
                pais: pais,
                organizou: [],
                participou: []
            }
        }
    })
}

