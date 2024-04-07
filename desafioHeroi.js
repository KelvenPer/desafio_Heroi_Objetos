// criação da classe heroi
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;      
    }
    // definição dos herois e também das caracteristicas do ataque de cada um
    atacar() {
        let ataque;
        // o switch usei para associar o tipo de guerreiro e tambem com o tipo de ataque 
        switch(this.tipo) {
            case 'Guerreiro':
                ataque = 'Espada'
                break;   // break usado para caso for atendido o 'case' ele pare e finalize a execuçao
            case 'Mage':
                ataque = 'Magia'
                break;
            case 'Atirador':
                ataque = 'Metralhadora'
                break;
            default: // caso nenhuma das condições acima sejam atendidas ele escreva a msg abaixo,
                ataque = 'Um ataque desconhecido'
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);  // concatenação das classes
    }
}

// saida - e cada tipo de case como exemplo na tela

const heroi1 = new heroi('Paladino', 50, 'Mage');
heroi1.atacar();

const heroi2 = new heroi('Rambo', 100, 'Atirador');
heroi2.atacar();

// exemplo caso nenhum laço de repetição tivesse sido atingido

const heroi3 = new heroi('Borboletas', 0, 'fadinha');
heroi3.atacar();
