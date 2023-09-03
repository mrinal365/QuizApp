import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './quizSlice';

export const store = configureStore({
    reducer: {
        counter: questionReducer
    },
})