import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importação para navegação
import './Styles.css';

const Continent2 = () => {
const divisionQuestions = [
  { id: 1, question: 'Divida 96 por 8, qual o resultado?', answer: '12' },
  { id: 2, question: 'Divida 350 por 14, qual o resultado?', answer: '25' },
  { id: 3, question: 'Divida 222 por 6, qual o resultado?', answer: '37' },
  { id: 4, question: 'Divida 504 por 9, qual o resultado?', answer: '56' },
  { id: 5, question: 'Divida 372 por 3, qual o resultado?', answer: '124' },
  { id: 6, question: 'Divida 574 por 7, qual o resultado?', answer: '82' },
  { id: 7, question: 'Divida 495 por 11, qual o resultado?', answer: '45' },
  { id: 8, question: 'Divida 480 por 5, qual o resultado?', answer: '96' },
  { id: 9, question: 'Divida 504 por 8, qual o resultado?', answer: '63' },
  { id: 10, question: 'Divida 936 por 13, qual o resultado?', answer: '72' },
  { id: 11, question: 'Divida 236 por 4, qual o resultado?', answer: '59' },
  { id: 12, question: 'Divida 528 por 6, qual o resultado?', answer: '88' },
  { id: 13, question: 'Divida 315 por 21, qual o resultado?', answer: '15' },
  { id: 14, question: 'Divida 250 por 2, qual o resultado?', answer: '125' },
  { id: 15, question: 'Divida 493 por 17, qual o resultado?', answer: '29' },
  { id: 16, question: 'Divida 874 por 19, qual o resultado?', answer: '46' },
  { id: 17, question: 'Divida 795 por 15, qual o resultado?', answer: '53' },
  { id: 18, question: 'Divida 713 por 23, qual o resultado?', answer: '31' },
  { id: 19, question: 'Divida 432 por 4, qual o resultado?', answer: '108' },
  { id: 20, question: 'Divida 871 por 13, qual o resultado?', answer: '67' }
];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showQuestion, setShowQuestion] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const nextQuestion = () => {
    if (userAnswer === divisionQuestions[currentQuestionIndex].answer) {
      setMessage('Resposta correta!');
    } else {
      setMessage(`Resposta incorreta! A resposta correta é ${divisionQuestions[currentQuestionIndex].answer}`);
    }
    setUserAnswer('');
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleShowQuestions = () => {
    setShowQuestion(true);
  };

  
  const isLastQuestion = currentQuestionIndex === divisionQuestions.length;

  return (
    <div className="continent-container">
      <h1 className="nome">Divisão</h1>
      
      {!showQuestion && (
        <button onClick={handleShowQuestions} className="question-button">
          Começar Perguntas
        </button>
      )}

      {showQuestion && (
      <div>
      {showQuestion && !isLastQuestion && (
        <div>
          <p className="p">{divisionQuestions[currentQuestionIndex].question}</p>
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
          <div className="button-container">
           
        
          </div>
        </div>
      )}

      {showQuestion && isLastQuestion && (
        <div>
          <p className="message">Você terminou todas as perguntas! Parabéns e obrigado por participar!</p>
        </div>
        )}

          {message && <p className="message">{message}</p>}
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

export default Continent2;
