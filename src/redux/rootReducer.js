import { combineReducers } from "redux";
import { quizReducer } from './quiz/quizReducer'
import {userReducer} from "./user/userReducer";
import {timerReducer} from "./timer/timerReducer";

export const rootReducer = combineReducers({
    quizReducer,
    userReducer,
    timerReducer,
});