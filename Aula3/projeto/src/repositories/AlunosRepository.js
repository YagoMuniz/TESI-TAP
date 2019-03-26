
const fs = require('fs')

const alunos = []

// const getAlunoIndex = id => alunos.map(l => l.id).indexOf(id);

const AlunosRepository = {
    adicionar: (aluno) => {
        let novo = {
            nome: aluno.nome,
            matricula: aluno.matricula,
            curso: aluno.curso
        };
        let dado = JSON.stringify(novo);
        fs.appendFile("db.json", dado + "\n", (err) => {
            if (err)
                return console.log("Falha ao salvar dados de aluno no banco.");
        });

        return novo;
    },
    recuperar: matricula => {
        let result = [];
        var reader = require('readline').createInterface({
            input: require('fs').createReadStream('db.json')
        });

        reader.on('line', (line) => {
            result.push(line);
        });

        reader.on('close', () => {
            return result.find(a => a.matricula === matricula);

        })

        
    },
    alterar: (id, novo) => {
        novo.id = id;
        alunos[getAlunoIndex(id)] = novo;
        return novo;
    },
    remover: id => alunos.splice([getAlunoIndex(id)], 1),
    todos: () => alunos
};

module.exports = AlunosRepository