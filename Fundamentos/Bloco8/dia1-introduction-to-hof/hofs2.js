//Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
//o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) 
//e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final 
//recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (gabarito, student) => {
    let contador = 0;
    for(let index = 0; index < gabarito.length; index += 1){
        if(gabarito[index] === student[index]){
            contador += 1;
        } else if (student[index] === 'N.A'){
            contador += 0;
        } else {
            contador -= 0.5;
        }
    }
    return contador
}

const checkAnswers = (gabarito, student, callback) => {
    return callback(gabarito,student)};

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checker));