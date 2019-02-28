const alunos = []
let proxId = 1;

const getAlunoIndex = id => alunos.map(l => l.id).indexOf(id);

const AlunosRepository = {
    adicionar: (aluno) => {
        let novo  = {
            id: proxId++,
            nome: aluno.nome,
            matricula: aluno.matricula,
            curso: aluno.curso
        };
        alunos.push(novo);
        return novo;
    },
    recuperar: id => alunos[getAlunoIndex(id)],
    alterar: (id, novo) => {
        novo.id = id;
        alunos[getAlunoIndex(id)] = novo;
        return novo;
    },
    remover: id => alunos.splice([getAlunoIndex(id)], 1),
    todos: () => alunos
};

module.exports = AlunosRepository