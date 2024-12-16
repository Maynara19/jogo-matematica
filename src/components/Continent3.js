import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importação para navegação
import './Styles.css';

const algebraQuestions = [
  { id: 1, question: 'Se 4x -5 = 11, qual o valor de x?', answer: 'x = 4' },
  { id: 2,question: 'Resolva o sistema de equações: x + y = 10 e x - y = 2.', answer: 'x = 6, y = 4' },
  { id: 3, question: 'Se 5x + 3 = 18, qual é o valor de x?', answer: 'x = 3' },
  { id: 4, question: 'Resolva: x + y = 15 e 2x - y = 8.', answer: 'x = 15, y = 8' },
  { id: 5, question: 'Se 3x - 7 = 14, qual é o valor de x?', answer: 'x = 7' },
  { id: 6, question: 'Resolva: x - y = 4 e x + y = 12.', answer: 'x = 8, y = 4' },
  { id: 7, question: 'Se 2x + 9 = 19, qual é o valor de x?', answer: 'x = 5' },
  { id: 8, question: 'Resolva: x + 2y = 20 e x - y = 6.', answer: 'x = 12, y = 4' },
  { id: 9, question: 'Se 7x - 4 = 24, qual é o valor de x?', answer: 'x = 4' },
  { id: 10, question: 'Resolva: x + 3y = 30 e 2x - y = 9.', answer: 'x = 9, y = 7' },
  { id: 11, question: 'Se 3x + 2 = 14, qual é o valor de x?', answer: 'x = 4' },
  { id: 12, question: 'Resolva: x + y = 18 e 2x - y = 10.', answer: 'x = 8, y = 10' },
  { id: 13, question: 'Se 5x - 8 = 12, qual é o valor de x?', answer: 'x = 4' },
  { id: 14, question: 'Resolva: 4x + y = 16 e x - y = 4.', answer: 'x = 6, y = 2' },
  { id: 15, question: 'Se 2x + 5 = 13, qual é o valor de x?', answer: 'x = 4' },
  { id: 16, question: 'Resolva: x + 3y = 24 e 4x - y = 18.', answer: 'x = 6, y = 6' },
  { id: 17, question: 'Se 6x - 7 = 29, qual é o valor de x?', answer: 'x = 6' },
  { id: 18, question: 'Resolva: x + 4y = 30 e 3x - y = 15.', answer: 'x = 9, y = 5' },
  { id: 19, question: 'Se 8x + 5 = 37, qual é o valor de x?', answer: 'x = 4' },
  { id: 20, question: 'Resolva: 2x + 3y = 24 e 5x - y = 14.', answer: 'x = 4, y = 4' },
];

const Continent3 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showQuestion, setShowQuestion] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const nextQuestion = () => {
    if (userAnswer === algebraQuestions[currentQuestionIndex].answer) {
      setMessage('Resposta correta!');
    } else {
      setMessage(`Resposta incorreta! A resposta correta é ${algebraQuestions[currentQuestionIndex].answer}`);
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

  const resetGame = () => {
    setShowQuestion(false);
    setCurrentQuestionIndex(0);
    setMessage('');
    setUserAnswer('');
  };

  const isLastQuestion = currentQuestionIndex === algebraQuestions.length;

  return (
    <div className="continent-container">
      <h1 className="nome">Álgebra</h1>
      {!showQuestion && (
        <button onClick={handleShowQuestions} className="question-button">
          Começar Perguntas
        </button>
      )}

      {showQuestion && (
      <div>
      {showQuestion && !isLastQuestion && (
        <div>
          <p className="p">{algebraQuestions[currentQuestionIndex].question}</p>
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
          <button onClick={() => navigate('/menu')} className="back-button">
              Voltar
            </button>
          </div>
       
          </div>
    
    )}
    </div>
  );
};

export default Continent3;
