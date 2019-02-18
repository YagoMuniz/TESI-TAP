
const archiver = require('archiver');
const extract = require('extract-zip');
const fs = require('fs');

if(process.argv.length != 5){
    console.log('Uso: node index.js <mode> <origem> <destino>');
    process.exit(-1);
}


const origem = process.argv[3];
const destino = process.argv[4];

if(process.argv[2] === "compactar"){
    compactar(origem, destino);
}
else if(process.argv[2] === "descompactar")
{
    descompactar(origem, destino);
}

function compactar(origem, destino){
    let compactador = archiver('zip');

    let saida = fs.createWriteStream(destino);

    saida.on('close', () => {
        console.log(compactador.pointer() + ' bytes totais');
    });

    compactador.on('error', (err) => {console.log(err.message)});

    compactador.pipe(saida);

    process.chdir(origem);
    compactador.directory(process.cwd());

    compactador.finalize();
}
function descompactar(origem, destino){
    extract(origem, {dir : __dirname + '/' + destino}, (err) => {
        if(err){
            console.log(err.name + ":" + err.message);
        }
    });
}