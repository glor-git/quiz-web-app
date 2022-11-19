import React, { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  answerStringState,
  answerState,
  correctAnswerState,
  incorrectAnswerState,
  quizListState,
  quizNumberState
} from "../../recoil/quiz";
import './AnswerList.scss';
import cx from 'classnames';

export default function AnswerList({ setIsResult }) {
  const [answers, setAnswers] = useState([]);
  const [isSelect, setIsSelect] = useState('');
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerString, setAnswerString] = useState(0);
  const [quizNumber, setQuizNumber] = useRecoilState(quizNumberState);
  const setIncorrectAnswerState = useSetRecoilState(incorrectAnswerState);
  const setCorrectAnswerState = useSetRecoilState(correctAnswerState);
  const setAnswerState = useSetRecoilState(answerState);
  const setAnswerStringState = useSetRecoilState(answerStringState);
  const quizList = useRecoilValue(quizListState);

  function selectAnswer(answer, number) {
    setIsSelect(answer);
    setAnswerString(number);
    if (answer === quizList[quizNumber].correct_answer) setIsCorrect(true);
    else setIsCorrect(false);
  }

  function nextQuestion() {
    if (quizNumber + 1 === quizList.length - 1) setIsLastQuestion(true);
    if (isCorrect) setCorrectAnswerState(prev => prev + 1);
    else setIncorrectAnswerState(prev => prev + 1);
    setAnswerState(prev => [...prev, isCorrect]);
    setAnswerStringState(prev => [...prev, isSelect]);
    setIsSelect('');
    setQuizNumber(prev => prev + 1);
  }

  function lastQuestion() {
    if (isCorrect) setCorrectAnswerState(prev => prev + 1);
    else setIncorrectAnswerState(prev => prev + 1);
    setAnswerState(prev => [...prev, isCorrect]);
    setAnswerStringState(prev => [...prev, isSelect]);
    setIsResult(true);
  }
  useEffect(() => {
    const random = Math.floor(Math.random() * quizList[quizNumber].incorrect_answers.length + 1);
    const answerArr = [];
    answerArr.push(...quizList[quizNumber].incorrect_answers)
    answerArr.splice(random, 0, quizList[quizNumber].correct_answer);
    setAnswers(answerArr);
  }, [quizNumber, quizList])

  return (
    <div className={'answer-list-wrapper'}>
      {answers.map((answer, index) => {
        let incorrect_answers = false;
        if (answer === quizList[quizNumber].correct_answer) incorrect_answers = true;

        return (
          <div key={index} className={cx('answer-wrapper', [isSelect === answer && (incorrect_answers ? 'correct-answer' : 'incorrect-answers')])} onClick={() => selectAnswer(answer, index+1)}>{answer}</div>
        )
      })}
      {isSelect &&
        (!isLastQuestion ?
          <button className={'next-question-button'} onClick={nextQuestion}>다음 문항</button>
          :
          <button className={'next-question-button'} onClick={lastQuestion}>결과 확인</button>
        )
      }
    </div>
  );
}