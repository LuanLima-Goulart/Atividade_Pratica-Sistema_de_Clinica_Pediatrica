const listaResponsaveis = require("../models/responsaveisModel");

const listarResponsaveis = async (req, res) => {
    const responsaveis = await listaResponsaveis.buscarTodos();

    res.json(responsaveis);
};

const perquisarResponsavel = async (req, res) => {
    const id = req.params.id;
    const responsaveis = await listaResponsaveis.buscarId(id);

    if (!responsaveis) {
        return res.status(404).json({
            mensagem: "Responsavel não encontrado!"
        });
    }
};

const criarResponsavel = async (req, res) => {
    const { nome, telefone, cpf } = req.body;
    const novoResponsavel = await listaResponsaveis.criar(nome, telefone, cpf);

    if (!nome || !telefone || !cpf) {
        return res.status(422).json({
            mensagem: "Dados inválidos!"
        });
    } else {
        return res.status(201).json(novoResponsavel);
    }
};

const atualizarResponsavel = async (req, res) => {
    const id = req.params.id;
    const { nome, telefone, cpf } = req.body;
    const responsavel = await listaResponsaveis.buscarId(id);

    if (!responsavel) {
        return res.status(404).json({
            mensagem: "Responsavel não encontrado!"
        });
    }

    const responsavelAtualizado = await listaResponsaveis.editar(nome, telefone, cpf);

    if (!nome || !telefone || !cpf) {
        return res.status(422).json({
            mensagem: "Dados inválidos!"
        });
    } else {
        return res.status(201).json(responsavelAtualizado);
    }
};

const deletarResponsavel = async (req, res) => {
    const id = req.params.id
    const responsavel = await listaResponsaveis.buscarId(id);

    if(responsavel === -1) {
        res.status(404).json({
            mensagem: "Responsavel não encontrado!"
        });
    }

    await listaResponsaveis.deletar(id);

    res.json({
        mensagem:"Usuário deletado!"
    });
};

module.exports = {
    listarResponsaveis,
    perquisarResponsavel,
    criarResponsavel,
    atualizarResponsavel,
    deletarResponsavel
}