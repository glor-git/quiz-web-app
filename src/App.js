import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Cover from "./components/Cover";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className='quiz-wrapper'>
        <Routes>
          <Route path="/" element={<Cover />} />
        </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;
