import React from 'react';
import './Cover.scss';
import { Link } from "react-router-dom";
import Refresh from "./Refresh";

export default function Cover() {

  return (
    <section className={'cover-wrapper'}>
      <div className={'titleWrapper'}>
        <div className={'title'}>QUIZ-WEB-APP</div>
        <div className={'name'}>신영광</div>
      </div>
      <Link to={'quiz'}>
        <button className={'start-quiz-button'}/>
      </Link>
      <Refresh />
    </section>
  );
}