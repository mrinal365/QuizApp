import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  questions: [],
  score: 0,
  time: 30,
  currentQuestion: 1,
  visited: 1,
  timeRemaining: 108000,
  currentEmail: "",
  testActive:false
}

export const questionSlice = createSlice({
  name: 'questions',
  initialState: initialStateValues,
  reducers: {
    setTestActive: (state,action) => {
      state.testActive = action.payload
    },
    setUserEmail: (state, action) => {
      state.currentEmail = action.payload
    },
    setQuestions: (state, action) => {
      state.questions = action.payload
      state.questions[0].state = "visited";
    },
    changeQuestion: (state, action) => {
      state.questions[state.currentQuestion - 1].state = "visited";
      state.currentQuestion = action.payload
      state.questions[state.currentQuestion - 1].state = "visited";
      // if(state.visited<15){state.visited=state.visited+1;}
    },
    nextQuestion: (state, action) => {
      state.questions[state.currentQuestion].state = "visited";
      state.currentQuestion = state.currentQuestion + 1
      // if(state.visited<15){state.visited=state.visited+1;}

    },
    prevQuestion: (state, action) => {
      state.questions[state.currentQuestion - 2].state = "visited";
      state.currentQuestion = state.currentQuestion - 1
      // if(state.visited<15){state.visited=state.visited+1;}
    },
    selectQuestion: (state, action) => {
      state.questions[state.currentQuestion - 1].selectedAnswer = action.payload;
      // state.questions[state.currentQuestion-2].state="visited";
      // state.currentQuestion=state.currentQuestion-1
      // if(state.visited<15){state.visited=state.visited+1;}
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTestActive,setUserEmail, setQuestions, changeQuestion, selectQuestion, nextQuestion, prevQuestion } = questionSlice.actions

export default questionSlice.reducer