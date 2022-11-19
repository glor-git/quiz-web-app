import React, {useEffect} from 'react';
import {
  answerState,
  answerStringState,
  correctAnswerState,
  incorrectAnswerState,
  quizNumberState
} from "../recoil/quiz";
import { useSetRecoilState } from "recoil";
import { timeState } from "../recoil/timer";

export default function Refresh(props) {
  const set1 = useSetRecoilState(quizNumberState);
  const set2 = useSetRecoilState(answerState);
  const set3 = useSetRecoilState(answerStringState);
  const set4 = useSetRecoilState(incorrectAnswerState);
  const set5 = useSetRecoilState(correctAnswerState);
  const set6 = useSetRecoilState(timeState);

  useEffect(() => {
    set1(0);
    set2([]);
    set3([]);
    set4(0);
    set5(0);
    set6(0);
  }, [])
  return (
    <></>
  );
}