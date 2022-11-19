import { Suspense } from "react";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Cover from "./components/Cover";
import Quiz from "./components/quiz/Quiz";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <div className='quiz-wrapper'>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        </div>
      </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}
export default App;
