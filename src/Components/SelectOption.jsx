import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectQuestion } from '../State/quizSlice'

function SelectOption(props) {
    const dispatch = useDispatch()
    const selectedValue = useSelector(state => state.counter.questions[props.currentQuestionNumber-1].selectedAnswer);
    const setAnswer = () => {
        dispatch(selectQuestion(props.value))
    }
    const [selected, setSelected] = useState(false);
    // const state = useSelector(state => state.counter.questions[props.number].state);
    // console.log("inside button", state)
    return (
        <>  {console.log('selected value',selectedValue, props.value)}
            {
                (props.value!=selectedValue) ?
                    <div onClick={() => { setSelected(!selected); setAnswer(); console.log("aefas", props.value) }} style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.4)', padding: '16px 16px', minWidth: "60%", width: 'fit-content', border: '1px solid white', borderRadius: 10, marginBottom: 15 }}>
                        <span style={{ border: '1px solid black', borderRadius: 20, padding: "5px 11px", marginRight: 18 }}>A</span>
                        <span>{props.value}</span>
                    </div>
                    :
                    <div onClick={() => { setSelected(!selected); setAnswer(); console.log("aefas", props.value) }} style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.9)', padding: '16px 16px', minWidth: "60%", width: 'fit-content', border: '1px solid white', borderRadius: 10, marginBottom: 15 }}>
                        <span style={{ border: '1px solid black', borderRadius: 20, padding: "5px 11px", marginRight: 18 }}>A</span>
                        <span>{props.value}</span>
                    </div>
            }
        </>
    )
}

export default SelectOption