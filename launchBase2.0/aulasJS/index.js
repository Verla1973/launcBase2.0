//Criar um programa que calcula a média
//das notas dos alunos de uma turma

const aluno1 = {
    nome : "Verlã",
    nota : 3
}
const aluno2 = {
    nome : "Mayk",
    nota : 4.8
}
const aluno3 = {
    nome : "Fernanda",
    nota : 5
}


const media = (aluno1.nota + aluno2.nota + aluno3.nota) / 3

if (media > 5) {
    console.log(`Turma aprovada com média acima de 5.Parabéns...`)
}else{
    console.log(`Turma em recuperação por média abaixo de 5...`)
}
console.log(`A média dos alunos da turma é: ${media.toFixed(2)}`)