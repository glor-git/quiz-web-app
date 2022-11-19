import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "./components/Cover";
import Quiz from "./components/quiz/Quiz";
import IncorrectAnswerNote from "./components/quiz/IncorrectAnswerNote";

export default function Routers() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path={"/incorrect"} element={<IncorrectAnswerNote />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}
