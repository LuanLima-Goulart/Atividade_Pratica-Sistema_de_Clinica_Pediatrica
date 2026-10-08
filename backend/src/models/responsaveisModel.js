const db = require("../config/db");

const buscarTodos = async () => {
    const [responsaveis] = await db.query(
        "select * from responsaveis;"
    );

    return responsaveis;
};

const buscarId = async (id) => {
    const [responsaveis] = await db.query(
        "select * from responsaveis where id = ?;",
        [id]
    );

    return responsaveis[0];
};

const criar = async (nome, telefone, cpf) => {
    const responsaveis = await db.query(
        "insert into responsaveis (nome, telefone, cpf) values (?,?,?);",
        [nome, telefone, cpf]
    );

    return {
        id: responsaveis.insertId,
        nome,
        telefone,
        cpf
    };
};

const editar = async (id, nome, telefone, cpf) => {
    await db.query (
        "update responsaveis set nome=?, telefone=?, cpf=? where id=?;",
        [nome, telefone, cpf, id]
    );

    return {
        id,
        nome,
        telefone,
        cpf
    }
};

const deletar = async (id) => {
    const resultado = await db.query(
        "delete from responsaveis where id=?;",
        [id]
    );

    return resultado.affectedRows;
};

module.exports = {
    buscarTodos,
    buscarId,
    criar,
    editar,
    deletar
}