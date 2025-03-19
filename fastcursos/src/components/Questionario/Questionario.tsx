import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Questionario.css';
import { getUsername, setNivel, setDepartment } from '../LocalStorage/LocalStorage';
const Questionario = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cursoTitulo = location.state?.cursoTitulo || '';
  const user = getUsername();

  const [questions, setQuestions] = useState<{
    id: number;
    pergunta: string;
    respostas: { id: number; resposta: string; correta: boolean }[];
  }[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<{ [key: number]: number | null }>({});
  const [correctAnswerMessage, setCorrectAnswerMessage] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);

  console.log('cursoTitulo:', cursoTitulo);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/cursos-perguntas/curso/${cursoTitulo}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
      .then(response => {
        const questionDataArray = response.data;
        if (Array.isArray(questionDataArray) && questionDataArray.length > 0) {
          setQuestions(questionDataArray);
          console.log(questionDataArray);
        }
      })
      .catch(error => {
        console.error('Error fetching question data:', error);
      });
  }, [cursoTitulo]);

  const handleAnswerClick = (questionId: number, answerId: number, isCorrect: boolean) => {
    setSelectedAnswer(prevState => ({ ...prevState, [questionId]: answerId }));
    if (isCorrect) {
      setCorrectAnswersCount(prevCount => prevCount + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      const totalCorrect = correctAnswersCount + (isCorrect ? 1 : 0);
      const expGained = totalCorrect * 150;
      setCorrectAnswerMessage(`Você acertou ${totalCorrect} de ${questions.length} perguntas. Você ganhou ${expGained} EXP.`);
      axios.patch(`${process.env.REACT_APP_API_BASE_URL}/login/exp/${user}/${expGained}`)
        .then(response => {
          console.log('EXP updated successfully:', response.data);
          const { department, nivel } = response.data;
          setDepartment(department);
          setNivel(nivel);
        })
        .catch(error => {
          console.error('Error updating EXP:', error);
        });
    }
  };

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div className="questionnaire">
      {correctAnswerMessage && (
        <div className="correct-answer-message">
          {correctAnswerMessage}
        </div>
      )}
      {questions.length > 0 ? (
        <div key={questions[currentQuestionIndex].id} className="question">
          <h3>{questions[currentQuestionIndex].pergunta}</h3>
          <div className="answers">
            {questions[currentQuestionIndex].respostas.map(answer => (
              <button
                key={answer.id}
                onClick={() => handleAnswerClick(questions[currentQuestionIndex].id, answer.id, answer.correta)}
                className={`answer-button ${selectedAnswer[questions[currentQuestionIndex].id] === answer.id ? 'selected' : ''}`}
                disabled={selectedAnswer[questions[currentQuestionIndex].id] !== undefined}
              >
                {answer.resposta}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="no-questions">
          <p>Nenhum questionário encontrado.</p>
          <button onClick={handleBackToHome} className="back-to-home-button">
            Voltar para Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Questionario;