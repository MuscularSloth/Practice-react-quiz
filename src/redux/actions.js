import {
    ADD_SCOREBOARD_DATA,
    CHANGE_TIMER,
    GET_QUIZ_FAILURE,
    GET_QUIZ_REQUEST,
    GET_QUIZ_SUCCESS, LOAD_SCOREBOARD_DATA, RESET_TIMER,

    SET_USER_NAME, START_TIMER, STOP_TIMER,
} from "../redux/types";

export function requestQuizAction() {
    return{
        type: GET_QUIZ_REQUEST,
    }
}

export function failureRequestQuizAction(errorMessage) {
    return{
        type: GET_QUIZ_FAILURE,
        payload: errorMessage,
    }
}

export function successRequestQuizAction(quizData) {
    return{
        type: GET_QUIZ_SUCCESS,
        payload: quizData,
    }
}

export function setUserNameAction(userName) {
    return{
        type: SET_USER_NAME,
        payload: userName,
    }
}

export function startTimerAction() {
    return{
        type: START_TIMER,
    }
}

export function stopTimerAction() {
    return{
        type: STOP_TIMER,
    }
}

export function resetTimerAction() {
    return{
        type: RESET_TIMER,
    }
}

export function changeTimerAction(count) {
    return{
        type: CHANGE_TIMER,
        payload: count,
    }
}

export function loadScoreboardDataAction(data) {
    return{
        type: LOAD_SCOREBOARD_DATA,
        payload: data,
    }
}

export function addScoreboardDataAction(data) {
    return{
        type: ADD_SCOREBOARD_DATA,
        payload: data,
    }
}
