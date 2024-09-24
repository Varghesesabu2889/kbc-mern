import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import play from '../assets/audio/intro.mp3'
import correct from '../assets/audio/correct.mp3'
import wrong from '../assets/audio/failing.mp3'
import nextQuestion from '../assets/audio/next question.mp3'
import wining from '../assets/audio/wining.mp3'



const Quiz = ({ data, questionNumber, setQuestionNumber,setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [ansClassName, setAnsClassName] = useState('answer');


  const [letsPlay] = useSound(play);
  const [correctAns] = useSound(correct);
  const [wrongAns] = useSound(wrong);
  const [nextQues]= useSound(nextQuestion);
  const [winner] = useSound(wining);


useEffect(()=>{
  letsPlay()
},[letsPlay])

const delay = (duration,callback)=>{
setTimeout(()=>{
    callback()

},duration)
}


  const handleAnswer = (ans) => {
    setSelectedAnswer(ans);
    setAnsClassName('answer active');

    delay(3000,()=>{
        setAnsClassName(ans.correct ? 'answer correct' : 'answer wrong');
    })
    delay(4000,()=>{
        if(ans.correct){
          correctAns()
                delay(4000,()=>{
                  setQuestionNumber(questionNumber + 1);
                  setSelectedAnswer(null)
                  nextQues()
                })
               
              }else{
                wrongAns()
                delay(4000,()=>{
                  setStop(true)
                  winner()
                })
               
              }  
    })
  };

  useEffect(() => {
    if(questionNumber -1 === data.length){
      setStop(true)
    }
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber,setStop]);

  return (
    <div className="quiz">
      <div className="question">
        {question?.question}
      </div>
      <div className="answers">
        {question?.answers.map((answer, index) => (
          <div
            key={index}
            className={selectedAnswer === answer ? ansClassName : 'answer'}
            onClick={() => handleAnswer(answer)}
          >
            <span className="option">
              {answer.option}: &nbsp;&nbsp;&nbsp;
            </span>
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
