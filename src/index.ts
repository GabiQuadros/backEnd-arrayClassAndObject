import { Aluno, TipoStatus } from "./aluno";
import { Pessoa } from "./pessoa";

//ATIVIDADE 1
console.log("ATIVIDADE 1");

let lista: number[] = [
  8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4,
];

let numPares = lista.filter((e) => {
  return e % 2 == 0;
});
console.log(numPares, `\n`);

//ATIVIDADE 2
console.log("ATIVIDADE 2");

let listaSoma: number[] = [
  8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4,
];
let soma = listaSoma.reduce((current, i) => {
  return current + i;
}, 0);
console.log(soma, `\n`);

//ATIVIDADE 3
console.log("ATIVIDADE 3");

let pessoas: Pessoa[] = [
  new Pessoa("Roger Medeiros", 35, 1200),
  new Pessoa("Carolina Silva", 30, 900),
  new Pessoa("Cristina Avila", 15, 3000),
  new Pessoa("Gustavo Hoffman", 25, 700),
  new Pessoa("Eva Trindade", 49, 500),
  new Pessoa("Andre Mathias", 13, 200),
  new Pessoa("Joice Castro da Silva", 31, 1100),
];
let novaLista = pessoas.filter((e) => {
  return e.idade < 23;
});
console.log(novaLista, `\n`);

//ATIVIDADE 4
console.log("ATIVIDADE 4");

let novaLista30 = pessoas.filter((e) => {
  return e.idade < 30;
});
console.log(novaLista30, `\n`);

let soma30 = novaLista30.reduce((current, i) => {
  return current + i.idade / novaLista.length;
}, 0);
console.log(soma30, `\n`);

//ATIVIDADE 5
console.log("ATIVIDADE 5");

let listaSalario = pessoas.filter((e) => {
  return e.salario < 1027;
});
console.log(listaSalario, `\n`);

let novaListaSalario = listaSalario.map((pessoas) => {
  return {
    nome: pessoas.nome,
    idade: pessoas.idade,
  };
});
console.log(novaListaSalario, `\n`);

//ATIVIDADE 6
console.log("ATIVIDADE 6");

let alunos: Aluno[] = [
  new Aluno("Roger Medeiros", 35),
  new Aluno("Carolina Silva", 30),
  new Aluno("Cristina Avila", 15),
  new Aluno("Gustavo Hoffman", 25),
  new Aluno("Eva Trindade", 49),
  new Aluno("Andre Mathias", 13),
  new Aluno("Joice Castro da Silva", 17),
];

let gabarito: string[] = ["A", "C", "C", "B", "C", "A", "A", "B", "A", "C"];

alunos.map((aluno) => aluno.sortearResposta(gabarito));

let aprovados = alunos
  .filter((aluno) => aluno.status === TipoStatus.aprovado)
  .map((aluno) => {
    return {
      nome: aluno.nome,
      nota: aluno.nota,
    };
  });

console.log(` Alunos aprovados\n`, aprovados, `\n`);

let reprovados = alunos
  .filter((aluno) => aluno.status === TipoStatus.reprovado)
  .map((aluno) => {
    return {
      nome: aluno.nome,
      nota: aluno.nota,
    };
  });
console.log(`Alunos reprovados\n`, reprovados, `\n`);

let somaDasNotas = alunos.reduce((notaInicial, aluno) => {
  return notaInicial + aluno.nota!;
}, 0);
let mediaDaTurma = somaDasNotas / alunos.length;
console.log(`Média da turma \n`, `Média: ${mediaDaTurma.toFixed(2)}\n`);

let melhorAluno = alunos.reduce((valorInicial, valorAtual) => {
  if (valorInicial.nota! > valorAtual.nota!) {
    return valorInicial;
  } else {
    return valorAtual;
  }
});

console.log(
  ` Melhor aluno\n Nome: ${melhorAluno.nome} - Nota: ${melhorAluno.nota}\n`
);

let piorAluno = alunos.reduce((valorInicial, valorAtual) => {
  if (valorInicial.nota! > valorAtual.nota!) {
    return valorAtual;
  } else {
    return valorInicial;
  }
});
console.log(` Pior aluno \n Nome: ${piorAluno.nome} - Nota: ${piorAluno.nota}`);
