import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

const Container = styled.div`
    background: #151616;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction:column;
    // align-items: center;
    justify-content: space-between;
`
const QuizWrapper = styled.div`
    flex:1;
    // background: yellow;
    padding: 1em;
    width:auto;
    max-width:100%;
    padding:2rem 2rem;
    display: flex;
    justify-content: space-between;
    overflow-x: none;
    overflow-y: scroll
`
const QuestionDashboard= styled.div`
    width:30%;
    background: rgba(96, 96, 96, 0.63);
    height:100%;
    padding:1em 1em;
    // display:flex;
    // align-items: center;
    // justify-content: center;
    border-radius: 20px;
    margin-bottom: 20px;
`
const Question= styled.div`
    width:62%;
    // background: blue;
    background: rgba(96, 96, 96, 0.63);
    height:100%;
    padding:1em 1em;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-bottom: 20px;

`

function QuizPage() {
  return (
    <Container>
        <Navbar/>
        
        <QuizWrapper>
            <QuestionDashboard>
                <div style={{background:'red',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                    
                </div>
            </QuestionDashboard>
            <Question>
                <div>
                <p style={{margin:0}}>Question no. 1</p>
                <p style={{fontSize:35,margin:0}}>
                In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.
                </p>
                <br/>
                <div style={{cursor:'pointer',background:'rgba(255,255,255,0.4)', padding:'16px 16px',minWidth:"60%",width:'fit-content',border:'1px solid white',borderRadius:10,marginBottom:15}}>
                    <span style={{border:'1px solid black',borderRadius:20,padding:"5px 11px",marginRight:18}}>A</span>
                    <span>Team Instinct</span>
                </div>
                <div style={{background:'rgba(255,255,255,0.4)', padding:'16px 16px',minWidth:"60%",width:'fit-content',border:'1px solid white',borderRadius:10,marginBottom:15}}>
                    <span style={{border:'1px solid black',borderRadius:20,padding:"5px 11px",marginRight:18}}>B</span>
                    <span>Team Instinct</span>
                </div>
                <div style={{background:'rgba(255,255,255,0.4)', padding:'16px 16px',minWidth:"60%",width:'fit-content',border:'1px solid white',borderRadius:10,marginBottom:15}}>
                    <span style={{border:'1px solid black',borderRadius:20,padding:"5px 11px",marginRight:18}}>C</span>
                    <span>Team Instinct</span>
                </div>
                <div style={{background:'rgba(255,255,255,0.4)', padding:'16px 16px',minWidth:"60%",width:'fit-content',border:'1px solid white',borderRadius:10,marginBottom:15}}>
                    <span style={{border:'1px solid black',borderRadius:20,padding:"5px 11px",marginRight:18}}>D</span>
                    <span>Team Instinct</span>
                </div>
                </div>
            </Question>
        </QuizWrapper>
    </Container>
  )
}

export default QuizPage