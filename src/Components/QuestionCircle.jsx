import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeQuestion } from '../State/quizSlice';

function QuestionCircle(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state.counter.questions[props.number].state);
    const selectedAnswer = useSelector(state => state.counter.questions[props.number].selectedAnswer)
    console.log("inside button", selectedAnswer,state)

    return (
        <>
            {
                (state === "visited") ?(
                    !selectedAnswer?
                    <div onClick={() => { dispatch(changeQuestion(props.number + 1)); console.log("clicked----", props.number) }} style={{ cursor: 'pointer', background: `#D7C049`, border: '2px solid rgb(189,255,1)', width: 'fit-content', padding: '14px 16px', borderRadius: 25, marginBottom: 20, marginRight: 17.5 }}>
                        <p style={{ margin: 0 }}>{`${(props.number < 9) ? "0" : ""}${props.number + 1}`}</p>
                    </div>:
                    <div onClick={() => { dispatch(changeQuestion(props.number + 1)); console.log("clicked----", props.number) }} style={{ cursor: 'pointer', background: `white`, border: '2px solid rgb(189,255,1)', width: 'fit-content', padding: '14px 16px', borderRadius: 25, marginBottom: 20, marginRight: 17.5 }}>
                        <p style={{ margin: 0 }}>{`${(props.number < 9) ? "0" : ""}${props.number + 1}`}</p>
                    </div>
                    )
                    :
                    <div onClick={()=>{dispatch(changeQuestion(props.number+1));console.log("clicked----",props.number)}} style={{ cursor:'pointer',background: `rgba(255,255,255,0.2)`,border:'2px solid rgb(189,255,1)', width: 'fit-content', padding: '14px 16px', borderRadius: 25, marginBottom: 20,marginRight:17.5 }}>
                    <p style={{ margin: 0 }}>{`${(props.number<9)?"0":""}${props.number+1}`}</p>
                </div>
        }
        </>
    )
}

export default QuestionCircle