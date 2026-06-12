const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    try {
        const quarto = await prisma.quarto.create({
            data: req.body
        });

        res.status(201).json(quarto);

    } catch (err) {
        res.status(500).json(err);
    }
};

const listar = async (req, res) => {
    try {
        const quartos = await prisma.quarto.findMany();
        res.status(200).json(quartos);

    } catch (err) {
        res.status(500).json(err);
    }
};

const buscar = async (req, res) => {
    try {
        const { id } = req.params;
        const quarto = await prisma.quarto.findUnique({

            where: {
                id: Number(id)
            },
            include: {
                reservas: true
            }

        });

        res.status(200).json(quarto);

    } catch (err) {
        res.status(500).json(err);
    }
};

const atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const quarto = await prisma.quarto.update({

            where: {
                id: Number(id)
            },

            data: req.body

        });

        res.status(200).json(quarto);

    } catch (err) {
        res.status(500).json(err);
    }
};

const excluir = async (req, res) => {
    const { id } = req.params;
    await prisma.reserva.deleteMany({
        where: {
            quartoId: Number(id)
        }
    });

    const quarto = await prisma.quarto.delete({
        where: {
            id: Number(id)
        }
    });

    res.status(200).json(quarto);
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
};