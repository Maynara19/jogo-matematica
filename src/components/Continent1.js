import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importação para navegar
import './Styles.css';

const Continent1 = () => {
  const multiplicationQuestions = [
    { id: 1, question: 'Quanto é 12 multiplicado por 8?', answer: '96' },
    { id: 2, question: 'Quanto é 25 multiplicado por 14?', answer: '350' },
    { id: 3, question: 'Quanto é 37 multiplicado por 6?', answer: '222' },
    { id: 4, question: 'Quanto é 56 multiplicado por 9?', answer: '504' },
    { id: 5, question: 'Quanto é 124 multiplicado por 3?', answer: '372' },
    { id: 6, question: 'Quanto é 82 multiplicado por 7?', answer: '574' },
    { id: 7, question: 'Quanto é 45 multiplicado por 11?', answer: '495' },
    { id: 8, question: 'Quanto é 96 multiplicado por 5?', answer: '480' },
    { id: 9, question: 'Quanto é 63 multiplicado por 8?', answer: '504' },
    { id: 10, question: 'Quanto é 72 multiplicado por 13?', answer: '936' },
    { id: 11, question: 'Quanto é 59 multiplicado por 4?', answer: '236' },
    { id: 12, question: 'Quanto é 88 multiplicado por 6?', answer: '528' },
    { id: 13, question: 'Quanto é 15 multiplicado por 21?', answer: '315' },
    { id: 14, question: 'Quanto é 125 multiplicado por 2?', answer: '250' },
    { id: 15, question: 'Quanto é 29 multiplicado por 17?', answer: '493' },
    { id: 16, question: 'Quanto é 46 multiplicado por 19?', answer: '874' },
    { id: 17, question: 'Quanto é 53 multiplicado por 15?', answer: '795' },
    { id: 18, question: 'Quanto é 31 multiplicado por 23?', answer: '713' },
    { id: 19, question: 'Quanto é 108 multiplicado por 4?', answer: '432' },
    { id: 20, question: 'Quanto é 67 multiplicado por 13?', answer: '871' }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showQuestion, setShowQuestion] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const nextQuestion = () => {
    if (userAnswer === multiplicationQuestions[currentQuestionIndex].answer) {
      setMessage('Resposta correta!');
    } else {
      setMessage(`Resposta incorreta! A resposta correta é ${multiplicationQuestions[currentQuestionIndex].answer}`);
    }
    setUserAnswer('');
    if (currentQuestionIndex < multiplicationQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleAnswerChange = (e) => setUserAnswer(e.target.value);

  const handleShowQuestions = () => {
    setShowQuestion(true);
    setMessage('');
    setCurrentQuestionIndex(0);
  };

  const isLastQuestion = currentQuestionIndex === multiplicationQuestions.length - 1;

  return (
    <div className="continent-container">
      <h1 className='nome'>Multiplicação</h1>

      {!showQuestion && (
        <button onClick={handleShowQuestions} className="question-button">
          Começar Perguntas
        </button>
        
      )}
 
      {showQuestion && (
        <div>
          {showQuestion && !isLastQuestion && (
            <div>
              <p className='p'>{multiplicationQuestions[currentQuestionIndex].question}</p>
              <input
                type="text"
                value={userAnswer}
                onChange={handleAnswerChange}
                placeholder="Sua resposta"
                className="resposta"
              />
              <button onClick={nextQuestion} className="answer-input">
                Verificar
              </button>
            </div>
          )}

          {showQuestion && isLastQuestion && (
            <div>
              <p className='message'>Você terminou todas as perguntas! Parabéns e obrigado por participar!</p>
            </div>
          )}

          {message && <p className='message'>{message}</p>}

          {/* Botão Voltar sempre abaixo */}
          <div className="button-container">
            <button onClick={() => navigate('/')} className="back-button">
              Voltar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Continent1;
