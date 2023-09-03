import React, { useState, useEffect } from 'react'
// import Button from '../Components/Button'
import styled from 'styled-components'
import { Route, Routes, Link } from "react-router-dom"
import { validateEmail } from '../Utils/utils';
import { useSelector, useDispatch } from 'react-redux';
import { setTestActive, setUserEmail } from '../State/quizSlice';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    background: #151616;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalTest = styled.div`
    background: rgba(69, 69, 69, 0.4);
    border-radius: 1em;
    padding: 2em 2.5em;
    box-shadow: 2px 3px 20px 0.5px rgba(255, 255, 255, 0.10);
`
const InputBox = styled.input`
    display: block;
    margin-bottom: 1.3em;
    background:rgba(90, 88, 88, 0.7);
    border:none;
    padding: 0.8em 1em;
    border-radius:1em;
    font-size: 1.2em;
    width: 400px;
    min-width:260px;
    outline: none;
    type: email;
    color:#9A9999;
    font-weight:600;
`

const MainFontMeidum = styled.p`
    color: #FFC83D;
    // font-family: Inter;
    font-size: 1.5em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

function StartPage() {
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState("")
  const navigate = useNavigate();

  const dispatch = useDispatch()

  useEffect(() => {
    setIsEmailValid(validateEmail(email))
  }, [email])

  const startTest=()=>{
    dispatch(setUserEmail(email))
    dispatch(setTestActive(true))
    console.log("inside startTestFUnction")
    navigate("/quiz");
  }
  return (
    <Container>
      <ModalTest>
        <MainFontMeidum>Enter email to start 👇</MainFontMeidum>
        <InputBox onChange={(e) => { setEmail(e.target.value) }} placeholder='enter email' /> {isEmailValid ? <p style={{ color: 'lightgreen', paddingLeft: 10 }}>Email is correct ✅</p> : <span></span>}
        {/* <Link to='/quiz'> */}
          {
            isEmailValid ?
              <button onClick={startTest} >get</button>
              : null
          }
        {/* </Link> */}
      </ModalTest>
    </Container>
  )
}

export default StartPage