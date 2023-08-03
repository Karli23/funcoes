function calculaIdade(anos) {
    const idadeFinal = +this.idade + +anos;
    return `Daqui a ${anos} anos, ${this.nome} terá ${idadeFinal} anos de idade.`;
}

const pessoa1 = {
    nome: 'maria',
    idade: 30
};

const pessoa2 = {
    nome: 'carla',
    idade: 26
};

const animal = {
    nome: 'tob',
    idade: 5,
    raca: 'vira-lata',
};

console.log(calculaIdade.call(pessoa1, 10));
