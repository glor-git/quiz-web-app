import React from 'react';
import { useRecoilValue } from "recoil";
import { timeState } from "../../recoil/timer";
import { correctAnswerState, incorrectAnswerState } from "../../recoil/quiz";
import './ViewResult.scss';
import cx from "classnames";
import { Link } from "react-router-dom";

export default function ViewResult() {
  const time = useRecoilValue(timeState);
  const correct = useRecoilValue(correctAnswerState);
  const incorrect = useRecoilValue(incorrectAnswerState);

  function getTime() {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor(time % 3600 / 60);
    const second = Math.floor(time % 3600 % 60);

    return `${hour === 0 ? '' : `${hour}시간`} ${minute === 0 ? '' : `${minute}분`} ${second === 0 ? '' : `${second}초`}`
  }

  return (
    <div className={'view-result-wrapper'}>
      <div className={'answer-wrapper'}>
        <div className={'correct-wrapper'}>
          <div className={'sub-title'}>맞힌 문제 수</div>
          {correct}
        </div>
        <div className={'incorrect-wrapper'}>
          <div className={'sub-title'}>틀린 문제 수</div>
          {incorrect}
        </div>
      </div>
      <div className={'time-wrapper'}>
        <div className={'sub-title'}>소요된 시간</div>
        {getTime()}
      </div>
      <div className={'chart-wrapper'}>
        <div className={'correct-chart-wrapper'} style={{background: `conic-gradient(#6ad1ff 0% ${correct/(correct+incorrect) * 100}%, white ${correct/(correct+incorrect) * 100}% 100%)`}}>
          <div className={'sub-title'}>
            <span>정답률</span>
            <span>{correct/(correct+incorrect) * 100}%</span>
          </div>
        </div>
        <div className={cx('incorrect-chart-wrapper', 'incorrect-chart')} style={{background: `conic-gradient(#ff8383 0% ${incorrect/(correct+incorrect) * 100}%, white ${incorrect/(correct+incorrect) * 100}% 100%)`}}>
          <div className={'sub-title'}>
            <span>오답률</span>
            <span>{incorrect/(correct+incorrect) * 100}%</span>
          </div>
        </div>
      </div>
      <Link to={'/incorrect'} className={'note-button'}>오답노트 하러 가기</Link>
    </div>
  );
}