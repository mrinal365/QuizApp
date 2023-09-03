import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function ResultPage() {
    const questionSet = useSelector(state => state.counter.questions);
    // const filteredResult =0;
    console.log(questionSet)

    const filteredResult = questionSet.filter((que) => que.selectedAnswer === que.correct_answer)
    console.log("filtered answer", filteredResult)

    return (
        <div style={{height:'auto',background:'#151616'}}>
            <br/>
            <h1 style={{margin:0,color:'white'}}>Result: {filteredResult.length}/15</h1>
            <br/>
            <br/>
            {
                questionSet.map((que, index) => (
                    <>
                    <p  style={{margin:0,color:'white'}}>Que: {index+1} ----{que.question}</p>
                    <p style={{margin:0,color:'white'}}>Selected Answer:{que.selectedAnswer}<br/> Correct Answer: {que.correct_answer} {(que.selectedAnswer===que.correct_answer)?"✅":"❌"}<br/><br/></p>
                    </>
                )
                )
            }
        </div>
    )
}

export default ResultPage