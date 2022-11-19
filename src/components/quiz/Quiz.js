import React, { useState } from 'react';
import { quizNumberState } from "../../recoil/quiz";
import { useRecoilValue } from "recoil";
import './Quiz.scss'
import QuestionBox from "./QuestionBox";
import AnswerList from "./AnswerList";
import Timer from "../../utill/Timer";
import ViewResult from "./ViewResult";

export default function Quiz() {
  const [isResult, setIsResult] = useState(false);
  const quizNumber = useRecoilValue(quizNumberState);

  return (
    <div className={'quiz-wrapper'}>
      {!isResult ?
        <>
          <div className={'question-number'}>Question {quizNumber + 1}</div>
          <Timer />
          <QuestionBox />
          <AnswerList setIsResult={setIsResult}/>
        </>
        :
        <ViewResult />
      }
    </div>
  );
}