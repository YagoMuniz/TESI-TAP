
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
            if (err) return console.log("Falha ao salvar dados de aluno no banco.");
        });

        return novo;
    },
    recuperar: matricula => {
        var aluno;
        fs.readFile(__dirname + "/DB/db.json", 'utf-8', (err, content) => {
            if(err) return console.log(err);  
            let lin = content.split('\n');
            return lin.filter((value) => {
                if(value){
                    let alun = JSON.parse(value);
                    if(alun.matricula === matricula){
                        aluno = alun;
                        return;
                    }
                }
            });
        });
        return aluno;
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