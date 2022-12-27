import React, {useState, Fragment} from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuestions } from './api';
import { QuestionState, Difficulty } from './api';
import { GlobalStyle, Wrapper } from './App.style';

  export interface AnswerObject{
    question: string
    answer: string
    correct: boolean
    correctAnswer: string
  }

  const total_Questions = 10;

function App() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

  const startTriviaQuiz = async() =>{
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(total_Questions, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    if(!gameOver){
      const answer = e.currentTarget.value;
      const correct = questions[number].correctAnswer === answer;
      if(correct){
        setScore((prev) => prev + 1);
        const answerObject = {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correctAnswer
        }

        setUserAnswers((prev) => [...prev, answerObject])
      }
    }
  }

  const nextQuestion = () =>{
    const nextQues = number + 1;
    if(nextQues === total_Questions){
      setGameOver(true);
    }else{
      setNumber(nextQues);
    }
  }

  return (
    <Fragment>
      <GlobalStyle/>
      <Wrapper>
        <h1> My Quiz</h1>

        {gameOver || userAnswers.length === total_Questions ? 
              (<button className='start' onClick={startTriviaQuiz}>
                Start
              </button>)
        : null}

        {!gameOver && <p className='score'>Score: {score}</p>}

        {loading && <p>Loading Questions...</p>}

        {!loading && !gameOver && (
            <QuestionCard 
                questionNo={number + 1} 
                totalQuestions={total_Questions}
                question={questions[number].question}
                answers={[...questions[number].incorrectAnswers, questions[number].correctAnswer]}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
            />
        )}

        {!gameOver && 
        !loading && 
        userAnswers.length === number + 1 && 
        number !== total_Questions ? 
            (<button className='next' onClick={nextQuestion}>
                Next Question
            </button> )
        : null}
      </Wrapper>
    </Fragment>
  );
}

export default App;
