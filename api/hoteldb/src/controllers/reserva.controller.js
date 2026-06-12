const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {

    try {

        const dados = {
            hospede: req.body.hospede,
            data_entrada: new Date(req.body.data_entrada),
            data_saida: new Date(req.body.data_saida),
            quartoId: Number(req.body.quartoId)
        };

        const reserva = await prisma.reserva.create({
            data: dados
        });

        res.status(201).json(reserva);

    } catch (err) {

        console.log(err);

        res.status(500).json(err);
    }
};

const listar = async (req, res) => {

    const reservas = await prisma.reserva.findMany({

        include: {
            quarto: true
        }

    });

    res.status(200).json(reservas);

};

const buscar = async (req, res) => {

    try {

        const { id } = req.params;

        const reserva = await prisma.reserva.findUnique({

            where: {
                id: Number(id)
            },

            include: {
                quarto: true
            }

        });

        res.status(200).json(reserva);

    } catch (err) {

        res.status(500).json(err);
    }
};

const atualizar = async (req, res) => {

    try {

        const { id } = req.params;

        const reserva = await prisma.reserva.update({

            where: {
                id: Number(id)
            },

            data: req.body

        });

        res.status(200).json(reserva);

    } catch (err) {

        res.status(500).json(err);
    }
};

const excluir = async (req, res) => {

    try {

        const { id } = req.params;

        const reserva = await prisma.reserva.delete({

            where: {
                id: Number(id)
            }

        });

        res.status(200).json(reserva);

    } catch (err) {

        res.status(500).json(err);
    }
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
};