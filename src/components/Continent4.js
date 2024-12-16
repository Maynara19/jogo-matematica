import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importação para navegação
import './Styles.css';  

const subtractionQuestions = [
  { question: 'Qual o resultado de 462 - 189?', answer: '273' },
  { question: 'Qual o resultado de 752 - 419?', answer: '333' },
  { question: 'Qual o resultado de 1.245 - 982?', answer: '263' },
  { question: 'Qual o resultado de 5.689 - 3.417?', answer: '2.272' },
  { question: 'Qual o resultado de 908 - 573?', answer: '335' },
  { question: 'Qual o resultado de 2.365 - 1.782?', answer: '583' },
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
];

const Continent4 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showQuestion, setShowQuestion] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const nextQuestion = () => {
    if (userAnswer === subtractionQuestions[currentQuestionIndex].answer) {
      setMessage('Resposta correta!');
    } else {
      setMessage(`Resposta incorreta! A resposta correta é ${subtractionQuestions[currentQuestionIndex].answer}`);
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

  const isLastQuestion = currentQuestionIndex === subtractionQuestions.length;

  return (
    <div className="continent-container">
      <h1 className='nome'>Subtração</h1>
      {!showQuestion && (
        <button onClick={handleShowQuestions} className="question-button">
          Começar Perguntas
        </button>
      )}


    {showQuestion && (
      <div>
      {showQuestion && !isLastQuestion && (
        <div>
          <p className='p'>{subtractionQuestions[currentQuestionIndex].question}</p>
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

export default Continent4;
