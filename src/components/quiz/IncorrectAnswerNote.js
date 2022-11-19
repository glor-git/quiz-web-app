import React from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { answerStringState, answerState, quizListState, numberState } from "../../recoil/quiz";
import './IncorrectAnswerNote.scss';
import { Link } from "react-router-dom";

function IncorrectAnswerNote() {
  const quizList = useRecoilValue(quizListState);
  const answer = useRecoilValue(answerState);
  const answerString = useRecoilValue(answerStringState);
  const setNumberState = useSetRecoilState(numberState);

  function setNumber() {
    setNumberState(prev => prev + 1);
  }

  if (answer.length === 0) window.location.href = '/';
  return (
    <div className={'incorrect-answer-note-wrapper'}>
      <div className={'note-title'}>오답노트</div>
      {quizList.map((quiz, index) => {
        if (!answer[index]) {
          return (
            <div className={'incorrect-answer-wrapper'}>
              <div className={'note-question'}>{quiz.question}</div>
              <div className={'answer-wrapper'}>
                <span>정답: {quiz.correct_answer}</span>
                <span>내가 고른 답: {answerString[index]}</span>
              </div>
            </div>
          )
        } else {
          return null
        }

      })}

      <Link to={'/'} className={'re'} onClick={setNumber}>다시 풀러가기</Link>
    </div>
  );
}

export default IncorrectAnswerNote;