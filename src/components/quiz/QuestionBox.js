import React from 'react';
import './QuestionBox.scss';
import { useRecoilValue } from "recoil";
import { quizListState, quizNumberState } from "../../recoil/quiz";
import cx from "classnames";

export default function QuestionBox() {
  const quizNumber = useRecoilValue(quizNumberState);
  const quizList = useRecoilValue(quizListState);

  return (
    <div className={'question-box-wrapper'}>
      <div className={cx('badge', 'category-badge')}>
        {quizList[quizNumber].category}
      </div>
      <div className={cx('badge', 'difficulty-badge')}>
        {quizList[quizNumber].difficulty}
      </div>
      {quizList[quizNumber].question}
    </div>
  );
}