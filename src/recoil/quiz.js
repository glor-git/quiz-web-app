import { atom, selector } from "recoil";
import axios from "axios";

export const numberState = atom({
  key: 'numberState',
  default: 0,
});

export const quizNumberState = atom({
  key: 'quizNumberState',
  default: 0,
});

export const answerState = atom({
  key: 'answerState',
  default: [],
});

export const answerStringState = atom({
  key: 'answerStringState',
  default: [],
});

export const incorrectAnswerState = atom({
  key: 'incorrectAnswerState',
  default: 0,
});

export const correctAnswerState = atom({
  key: 'correctAnswerState',
  default: 0,
});

export const quizListState = selector({
  key: 'quizListState',
  get: async ({get}) => {
    const number = get(numberState);
    const { data } = await axios({
      method: 'get',
      url: `https://opentdb.com/api.php?amount=10&number=${number}`,
    })

    return data.results;
  },
});