import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import QuestionCircle from '../Components/QuestionCircle'
import SelectOption from '../Components/SelectOption'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setQuestions, setCurrentQuestionNumber, nextQuestion, prevQuestion } from '../State/quizSlice'
import { useNavigate } from 'react-router-dom';


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
const QuestionDashboard = styled.div`
    width:30%;
    background: rgba(96, 96, 96, 0.63);
    height:100%;
    padding:1em 1em;
    // display:flex;
    // align-items: center;
    // justify-content: center;
    // border-radius: 20px;
    // margin-bottom: 20px;
    overflow-y: scroll;
`
const Question = styled.div`
    width:62%;
    // background: blue;
    background: rgba(96, 96, 96, 0.63);
    height:100%;
    padding:1em 1em;
    display:flex;
    // align-items: center;
    justify-content: left;
    // border-radius: 20px;
    margin-bottom: 20px;
    overflow-y: scroll;
    // margin-bottom: 30px;

`
const Prev = styled.div`
    background: black;
    color: white;
    padding: 10px 30px;
    border-radius:10px;
    margin-right: 20px;
    cursor: pointer;
    margin-bottom:30px;
`
const Next = styled.div`
    background: black;
    color: white;
    padding: 10px 30px;
    border-radius:10px;
    cursor: pointer;
    margin-bottom:30px;
`

function QuizPage() {
    // const [question, setQuestion] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState('')
    const dispatch = useDispatch()
    const [options, setOptions] = useState([])
    const navigate = useNavigate();


    // const que = useSelector(state => {setQuestion(state.counter.questions);console.log("Questions",state.counter.questions)})
    // const currentQue = useSelector(state => {setCurrentQuestion(state.counter.currentQuestion);console.log("currentQuestion",state.counter.currentQuestion)})
    const currentEmail = useSelector(state => state.counter.currentEmail);
    const testActive = useSelector(state => state.counter.testActive);

    const fetchQuestions = async () => {
        const response = await axios.get('https://opentdb.com/api.php?amount=15')
        // .then((res)=>{console.log("+++++",res.data.results);dispatch(setQuestions(res.data.results))})
        console.log("867867", response.data.results)
        dispatch(setQuestions(response.data.results))

    }
    useEffect(() => {
        // const currentEmail = useSelector(state => state.counter.currentEmail);
        if (testActive === false) {
            navigate("/")
        }
        fetchQuestions()
        // retriveQuestions()
    }, [])



    const questionSet = useSelector(state => state.counter.questions);
    const currentQuestionNumber = useSelector(state => state.counter.currentQuestion)
    const state = useSelector(state => console.log(state))
    const visited = useSelector(state => state.counter.visited)
    console.log("dhjkadghjdgskjdgas", visited)
    const retriveAnswers = () => {
        console.log("start")
        if (questionSet.length > 0) {
            console.log("went inside")
            let answers = []
            let answer = questionSet[currentQuestionNumber - 1].incorrect_answers
            // console.log("answer.correct_answers",answer)
            let correctAnswer = questionSet[currentQuestionNumber - 1].correct_answer;
            let newArray = [...answer, correctAnswer]
            // console.log("67253767351",typeof(correctAnswer),correctAnswer,answer)
            // answer.push("hhu")
            console.log("67253767351", newArray)
            const finalAnswers = newArray.sort(() => Math.random() - 1.5)
            console.log("final answers----", finalAnswers)
            setOptions(finalAnswers)
            // console.log("answer.correct_answers",correctAnswer)
            // answer.push(correctAnswer)
            // console.log("answers",answer)
            // answers.append(questionSet[currentQuestionNumber-1].correct_answers)
            // console.log("answers",answers)
        }

    }
    useEffect(() => {
        console.log("useEffect to fecth questions")
        retriveAnswers()
    }, [currentQuestionNumber, state])



    const setCurrentQuestionNumber = (number) => {
        console.log("function inside", number)
        dispatch(setCurrentQuestionNumber(number))
    }
    const goToNextQuestion = (number) => {
        // if(currentQuestionNumber)
        dispatch(nextQuestion())
    }

    const goToPrevQuestion = (number) => {
        // if(currentQuestionNumber)
        dispatch(prevQuestion())
    }


    return (
        <Container>
            <Navbar />
            <div style={{ background: 'rgb(255,50,0)', padding: '5px 0px', color: 'white', textAlign: 'center' }}> ⚠️⚠️⚠️⚠️ Dont refresh the window, go back 'or' close the tab,doing this will end your test ⚠️⚠️⚠️</div>
            <QuizWrapper>
                <QuestionDashboard>
                    <p style={{ fontSize: 24, fontWeight: 600 }}>Questions: </p>
                    <div style={{ background: '', display: 'flex', justifyContent: 'start', flexWrap: 'wrap' }}>
                        {
                            questionSet && questionSet.map((que, index) => (
                                <QuestionCircle key={index} number={index} />
                            ))

                        }
                    </div>
                    <p>Visited:  <span style={{ background: '#D7C049', marginLeft: 10, padding: '5px 15px', borderRadius: 20 }}></span></p>
                    <p>Attempted:  <span style={{ background: 'white', borderRadius: '2px solid black', marginLeft: 10, padding: '5px 15px', borderRadius: 20 }}></span></p>
                </QuestionDashboard>
                <Question>
                    <div>
                        <p style={{ margin: 0 }}>
                            Question no. {currentQuestionNumber}
                        </p>
                        <p style={{ fontSize: 30, margin: 0 }}>
                            {questionSet.length > 0 && questionSet[currentQuestionNumber - 1].question}
                            {/* {question && question[currentQuestion].question} */}
                        </p>
                        <br />
                        {
                            options.length > 0 && options.map((option) => (
                                <SelectOption currentQuestionNumber={currentQuestionNumber} key={option} value={option} />
                            ))
                        }


                        <div style={{ display: 'flex' }}>
                            {(currentQuestionNumber === 1) ? "" : <Prev onClick={() => { goToPrevQuestion() }}>Prev</Prev>}
                            {(currentQuestionNumber === 15) ? "" : <Next onClick={() => { goToNextQuestion() }}>Next</Next>}
                        </div>

                    </div>
                </Question>
            </QuizWrapper>
        </Container>
    )
}

export default QuizPage