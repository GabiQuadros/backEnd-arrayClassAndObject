export enum TipoStatus {
  aprovado = "Aprovado",
  reprovado = "Reprovado",
}

export class Aluno {
  nome: string;
  idade: number;
  nota?: number;
  status?: TipoStatus;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  avaliacao() {
    if (this.nota! >= 5) {
      this.status = TipoStatus.aprovado;
    } else {
      this.status = TipoStatus.reprovado;
    }
  }

  sortearResposta(gabarito: string[]) {
    this.nota = 0;
    let alternativas: string[] = ["A", "B", "C"];
    let sorteadas = [];

    for (let resposta of gabarito) {
      let respostasSorteadas = Math.floor(Math.random() * 10) % 3;
      sorteadas.push(alternativas[respostasSorteadas]);

      if (resposta === gabarito[respostasSorteadas]) {
        this.nota += 1;
      }
    }
    this.avaliacao();
  }
}
