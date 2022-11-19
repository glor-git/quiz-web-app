import { Suspense } from "react";
import './App.scss';
import { RecoilRoot } from "recoil";
import Routers from "./Routers";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>loading...</div>}>
        <Routers />
      </Suspense>
    </RecoilRoot>
  );
}
export default App;
