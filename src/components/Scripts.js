const questions = {
    1: [ // Multiplicação
        { question: 'Quanto é 12 multiplicado 8?', answer: '96' },
        { question: 'Quanto é 25 multiplicado 14?', answer: '350' },
        { question: 'Quanto é 37 multiplicado 6?', answer: '222' },
        { question: 'Quanto é 56 multiplicado 9?', answer: '504' },
        { question: 'Quanto é 124 multiplicado 3?', answer: '372' },
        { question: 'Quanto é 82 multiplicado 7?', answer: '574' },
        { question: 'Quanto é 45 multiplicado 11?', answer: '495' },
        { question: 'Quanto é 96 multiplicado 5?', answer: '480' },
        { question: 'Quanto é 63 multiplicado 8?', answer: '504' },
        { question: 'Quanto é 72 multiplicado 13?', answer: '936' },
        { question: 'Quanto é 59 multiplicado 4?', answer: '236' },
        { question: 'Quanto é 88 multiplicado 6?', answer: '528' },
        { question: 'Quanto é 15 multiplicado 21?', answer: '315' },
        { question: 'Quanto é 125 multiplicado 2?', answer: '250' },
        { question: 'Quanto é 29 multiplicado 17?', answer: '493' },
        { question: 'Quanto é 46 multiplicado 19?', answer: '874' },
        { question: 'Quanto é 53 multiplicado 15?', answer: '795' },
        { question: 'Quanto é 31 multiplicado 23?', answer: '713' },
        { question: 'Quanto é 108 multiplicado 4?', answer: '432' },
        { question: 'Quanto é 67 multiplicado 13?', answer: '871' }
    ],
    2: [ // Divisão
        { question: 'Divida 96 por 8, qual o resultado?', answer: '12' },
        { question: 'Divida 350 por 14, qual o resultado?', answer: '25' },
        { question: 'Divida 222 por 6, qual o resultado?', answer: '37' },
        { question: 'Divida 504 por 9, qual o resultado?', answer: '56' },
        { question: 'Divida 372 por 3, qual o resultado?', answer: '124' },
        { question: 'Divida 574 por 7, qual o resultado?', answer: '82' },
        { question: 'Divida 495 por 11, qual o resultado?', answer: '45' },
        { question: 'Divida 480 por 5, qual o resultado?', answer: '96' },
        { question: 'Divida 504 por 8, qual o resultado?', answer: '63' },
        { question: 'Divida 936 por 13, qual o resultado?', answer: '72' },
        { question: 'Divida 236 por 4, qual o resultado?', answer: '59' },
        { question: 'Divida 528 por 6, qual o resultado?', answer: '88' },
        { question: 'Divida 315 por 21, qual o resultado?', answer: '15' },
        { question: 'Divida 250 por 2, qual o resultado?', answer: '125' },
        { question: 'Divida 493 por 17, qual o resultado?', answer: '29' },
        { question: 'Divida 874 por 19, qual o resultado?', answer: '46' },
        { question: 'Divida 795 por 15, qual o resultado?', answer: '53' },
        { question: 'Divida 713 por 23, qual o resultado?', answer: '31' },
        { question: 'Divida 432 por 4, qual o resultado?', answer: '108' },
        { question: 'Divida 871 por 13, qual o resultado?', answer: '67' }
    ],
    3: [ // Álgebra
        { question: 'Se 4x -5 = 11, qual o valor de x?', answer: 'x = 4' },
        { question: 'Resolva o sistema de equações: x + y = 10 e x - y = 2.', answer: 'x = 6, y = 4' },
        { question: 'Se 5x + 3 = 18, qual é o valor de x?', answer: 'x = 3' },
        { question: 'Resolva: x + y = 15 e 2x - y = 8.', answer: 'x = 15, y = 8' },
        { question: 'Se 3x - 7 = 14, qual é o valor de x?', answer: 'x = 7' },
        { question: 'Resolva: x - y = 4 e x + y = 12.', answer: 'x = 8, y = 4' },
        { question: 'Se 2x + 9 = 19, qual é o valor de x?', answer: 'x = 5' },
        { question: 'Resolva: x + 2y = 20 e x - y = 6.', answer: 'x = 12, y = 4' },
        { question: 'Se 7x - 4 = 24, qual é o valor de x?', answer: 'x = 4' },
        { question: 'Resolva: x + 3y = 30 e 2x - y = 9.', answer: 'x = 9, y = 7' },
        { question: 'Se 3x + 2 = 14, qual é o valor de x?', answer: 'x = 4' },
        { question: 'Resolva: x + y = 18 e 2x - y = 10.', answer: 'x = 8, y = 10' },
        { question: 'Se 5x - 8 = 12, qual é o valor de x?', answer: 'x = 4' },
        { question: 'Resolva: 4x + y = 16 e x - y = 4.', answer: 'x = 6, y = 2' },
        { question: 'Se 2x + 5 = 13, qual é o valor de x?', answer: 'x = 4' },
        { question: 'Resolva: x + 3y = 24 e 4x - y = 18.', answer: 'x = 6, y = 6' },
        { question: 'Se 6x - 7 = 29, qual é o valor de x?', answer: 'x = 6' },
        { question: 'Resolva: x + 4y = 30 e 3x - y = 15.', answer: 'x = 9, y = 5' },
        { question: 'Se 8x + 5 = 37, qual é o valor de x?', answer: 'x = 4' },
        { question: 'Resolva: 2x + 3y = 24 e 5x - y = 14.', answer: 'x = 4, y = 4' },
    ],
    4: [  // Subtração
        { question: 'Qual o resultado de 462 - 189?', answer: '273' },
        { question: 'Qual o resultado de 752 - 419?', answer: '333' },
        { question: 'Qual o resultado de 1.245 - 982?', answer: '263' },
        { question: 'Qual o resultado de 5.689 - 3.417?', answer: '2.272' },
        { question: 'Qual o resultado de 908 - 573?', answer: '335' },
        { question: 'Qual o resultado de 2.365 - 1.782', answer: '583' },
        { question: 'Qual o resultado de 1.000 - 489?', answer: '511' },
        { question: 'Qual o resultado de 3.758 - 1.692?', answer: '2.066' },
        { question: 'Qual o resultado de 6.432 - 3.189?', answer: '3.243' },
        { question: 'Qual o resultado de 5.000 - 1.427?', answer: '3.573' },
        { question: 'Qual o resultado de 973 - 356?', answer: '617' },
        { question: 'Qual o resultado de 4.800 - 2.563?', answer: '2.237' },
        { question: 'Qual o resultado de 2.097 - 1.378?', answer: '719' },
        { question: 'Qual o resultado de 7.502 - 5.234?', answer: '2.268' },
        { question: 'Qual o resultado de 1.764 - 899?', answer: '865' },
        { question: 'Qual o resultado de 3.250 - 1.512?', answer: '1.738' },
        { question: 'Qual o resultado de 5.989 - 2.763?', answer: '3.226' },
        { question: 'Qual o resultado de 8.274 - 4.998?', answer: '3.276' },
        { question: 'Qual o resultado de 3.618 - 2.304?', answer: '1.314' },
        { question: 'Qual o resultado de 6.302 - 2.478?', answer: '3.824' }
    ]
};

// Função para selecionar uma pergunta aleatória do banco de perguntas
function getRandomQuestion(continent) {
    const continentQuestions = questions[continent];
    const randomIndex = Math.floor(Math.random() * continentQuestions.length);
    return continentQuestions[randomIndex];
}

// Função para mostrar a pergunta aleatória na tela
function displayRandomQuestion() {
    const continent = currentContinent; // Obtém o continente atual
    const randomQuestion = getRandomQuestion(continent);
    document.getElementById('question').textContent = randomQuestion.question;
    document.getElementById('answer').value = ''; // Limpa o campo de resposta
    document.getElementById('submit-answer').onclick = function () {
        checkAnswer(randomQuestion.answer); // Verifica se a resposta está correta
    };
}

// Função para verificar a resposta
function checkAnswer(correctAnswer) {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer === correctAnswer) {
        alert('Correto!');
        displayRandomQuestion(); // Exibe uma nova pergunta aleatória
    } else {
        alert('Resposta incorreta. Tente novamente!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o continente e exibe uma pergunta aleatória ao carregar
    currentContinent = 1; // Pode ser alterado dependendo do continente
    displayRandomQuestion();
});

// Função para selecionar uma pergunta aleatória do banco de perguntas
function getRandomQuestion(continent) {
    const continentQuestions = questions[continent];
    const randomIndex = Math.floor(Math.random() * continentQuestions.length);
    return continentQuestions[randomIndex];
}

// Função para mostrar a pergunta aleatória na tela
function displayRandomQuestion() {
    const continent = currentContinent; // Obtém o continente atual
    const randomQuestion = getRandomQuestion(continent);
    document.getElementById('question').textContent = randomQuestion.question;
    document.getElementById('answer').value = ''; // Limpa o campo de resposta
    document.getElementById('submit-answer').onclick = function () {
        checkAnswer(randomQuestion.answer); // Verifica se a resposta está correta
    };
}

// Função para verificar a resposta
function checkAnswer(correctAnswer) {
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer === correctAnswer) {
        alert('Correto!');
        displayRandomQuestion(); // Exibe uma nova pergunta aleatória
    } else {
        alert('Resposta incorreta. Tente novamente!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o continente e exibe uma pergunta aleatória ao carregar
    currentContinent = 1; // Pode ser alterado dependendo do continente
    displayRandomQuestion();
});