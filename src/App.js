import './App.css';
import Button from './Components/Button';
import styled from 'styled-components'
import StartPage from './Pages/StartPage';

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
      <StartPage/>
    </MainContainer>
  );
}

export default App;
