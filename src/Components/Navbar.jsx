import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { selectQuestion, setTestActive } from '../State/quizSlice'
import { Route, Routes, Link, useNavigate } from "react-router-dom"

const Container = styled.div`
    background: rgba(96, 96, 96, 0.63);
    padding: 0.2em 2em;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Submit = styled.div`
    background: green;
    color: white;
    padding: 10px 30px;
    border-radius:10px;
    cursor: pointer;
    margin-top:30px;
    margin-bottom:30px;
`


function Navbar() {
    const [seconds, setSeconds] = useState(60)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // let date = new Date(null);
    const userEmail = useSelector(state => state.counter.currentEmail);
    const isTestActive = useSelector(state => state.counter.testActive);
    const submitTest=()=>{
        // setTestActive
        dispatch(setTestActive(false))
        navigate("/result")
    }

    // setInterval(() => {
    //     // setSeconds(prevState=>prevState-1)
    //     // setSeconds((prevState)=>prevState-1);
    //     // date.setSeconds(seconds);
    //     // hhmmssFormat = date.toISOString().substr(11, 8);
    // }, [10000])


    return (
        <Container>
            <p style={{ color: 'white', fontWeight: 600, fontSize:18, color: "white" }}>Current User: {userEmail}<span style={{ fontSize: 20 }}>👋</span> !!!</p>
            <p style={{ color: 'white' }}>Time Remaining  {seconds}</p>
            <div style={{ display: 'flex' }}>
            {/* <Link to="/result"> */}
                <Submit onClick={submitTest}>Submit Test</Submit>
            {/* </Link> */}
            </div>
        </Container>
    )
}

export default Navbar