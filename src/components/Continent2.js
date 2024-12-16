import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importação para navegação
import './Styles.css';

const divisionQuestions = [
  { id: 1, question: 'Divida 96 por 8, qual o resultado?', answer: '12' },
  { id: 2, question: 'Divida 350 por 14, qual o resultado?', answer: '25' },
  { id: 3, question: 'Divida 222 por 6, qual o resultado?', answer: '37' },
  { id: 4, question: 'Divida 504 por 9, qual o resultado?', answer: '56' },
  { id: 5, question: 'Divida 372 por 3, qual o resultado?', answer: '124' },
];

const Continent2 = () => {
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
           
            <button onClick={() => navigate('/')} className="back-button">Voltar</button>
          </div>
        </div>
      )}

      {showQuestion && isLastQuestion && (
        <div>
          <h2 className="message">Você terminou todas as perguntas!</h2>
          <p className="message">Parabéns e obrigado por participar!</p>
          <div className="button-container">
           
            <button onClick={() => navigate('/')} className="back-button">Voltar</button>
          </div>
        </div>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Continent2;
