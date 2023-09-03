import './App.css';
import Button from './Components/Button';
import styled from 'styled-components'
import StartPage from './Pages/StartPage';
import QuizPage from './Pages/QuizPage';
import ResultPage from './Pages/ResultPage';
import { BrowserRouter } from "react-router-dom"
import { Route, Routes, Link } from "react-router-dom"

const MainContainer = styled.div`
  background: #151616;
  height:100vh;
  width:100vw;
  // border-radius: 3px;
  // border: 2px solid transparent;
  // color: #999;
  // margin: 0 1em;
  // padding: 0.12em 3em;
  // cursor: pointer;
  // font-size:1em;
  // border-radius:1.25em;
`


function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
