import {
    SET_USER_NAME,
} from "../types";

const initialState= {
    isLogged: false,
    userName: null,
    currentQuiz: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state,
                isLogged: true,
                userName: action.payload
            }

        default:
            return state;
    }
}
