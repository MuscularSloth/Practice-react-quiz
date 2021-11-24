import { combineReducers } from "redux";
import { quizReducer } from './quiz/quizReducer'
import {userReducer} from "./user/userReducer";
import {timerReducer} from "./timer/timerReducer";
import {scoreboardReducer} from "./scoreboard/scoreboardReducer";

export const rootReducer = combineReducers({
    quizReducer,
    userReducer,
    timerReducer,
    scoreboardReducer,
});