const alunos = [{
    nome: 'Pedro',
    nota:'4',
    turma:'3c'
},
{
    nome: 'Maria',
    nota:'8',
    turma:'3c' 
},
{
    nome: 'Marcos',
    nota:'6',
    turma:'1b'
},
{
    nome: 'Jeremias',
    nota:'2',
    turma:'2c'
},
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i];
        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5))