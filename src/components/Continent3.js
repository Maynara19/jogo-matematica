import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importação para navegação
import './Styles.css';

const algebraQuestions = [
  { id: 1, question: 'Se 4x -5 = 11, qual o valor de x?', answer: 'x = 4' },
  { id: 2, question: 'Resolva o sistema de equações: x + y = 10 e x - y = 2.', answer: 'x = 6, y = 4' },
  { id: 3, question: 'Se 5x + 3 = 18, qual é o valor de x?', answer: 'x = 3' },
  { id: 4, question: 'Resolva: x + y = 15 e 2x - y = 8.', answer: 'x = 15, y = 8' },
  { id: 5, question: 'Se 3x - 7 = 14, qual é o valor de x?', answer: 'x = 7' },
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
           
            <button onClick={() => navigate('/')} className="back-button">Voltar</button>
          </div>
        </div>
      )}

      {showQuestion && isLastQuestion && (
        <div>
          <h2 className="message">Você terminou todas as perguntas!</h2>
          <p className="message">Parabéns e obrigado por participar!</p>
          <div className="button-container">
            <button onClick={resetGame} className="reset-button">Resetar</button>
            <button onClick={() => navigate('/')} className="back-button">Voltar</button>
          </div>
        </div>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Continent3;
