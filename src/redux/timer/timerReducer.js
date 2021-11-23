import {
    START_TIMER,
    CHANGE_TIMER,
    STOP_TIMER,
    RESET_TIMER
} from "../types";

const initialState= {
    isStarted: false,
    currentTimer: 15
}

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:
            return {
                ...state,
                isStarted: true,
                currentTimer: 15
            }
        case CHANGE_TIMER:
            return {
                ...state,
                currentTimer: state.currentTimer - 1
            }
        case STOP_TIMER:
            return {
                ...state,
                isStarted: false,
                currentTimer: 15
            }
        case RESET_TIMER:
            return {
                ...state,
                currentTimer: 15
            }

        default:
            return state;
    }
}