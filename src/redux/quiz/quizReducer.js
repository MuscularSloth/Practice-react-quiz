import {
    GET_QUIZ_FAILURE,
    GET_QUIZ_REQUEST,
    GET_QUIZ_SUCCESS
} from "../types";

const initialState= {
    isLoading: false,
    isError: false,
    errorMessage: null,
    quiz: []
}

export const quizReducer = (state = initialState, action) => {
    // console.log('action.type >> ', action.type)
    // console.log('action.payload >> ', action.payload)
    switch (action.type) {
        case GET_QUIZ_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_QUIZ_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        case GET_QUIZ_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                errorMessage: null,
                quiz: action.payload,
            }
        default:
            return state;
    }
}