import {
    LOAD_SCOREBOARD_DATA,
    ADD_SCOREBOARD_DATA,
} from "../types";

const initialState= {
    isLoaded: false,
    lastStringID: null,
    scoreboard: [],
}

export const scoreboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SCOREBOARD_DATA:
            return {
                ...state,
                isLoaded: true,
                scoreboard: action.payload
            }
        case ADD_SCOREBOARD_DATA:
            return {
                ...state,
                scoreboard: [...state.scoreboard, action.payload],
                lastStringID: action.payload.id
            }
        default:
            return state;
    }
}