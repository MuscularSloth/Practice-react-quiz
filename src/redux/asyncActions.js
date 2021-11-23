import axios from "axios";
import {
    failureRequestQuizAction,
    requestQuizAction,
    successRequestQuizAction,
} from "./actions"

export const getQuizAsyncAction = () => {
    return (dispatch) => {
        dispatch(requestQuizAction())
        axios.get('https://opentdb.com/api.php?amount=10&category=23&type=multiple').then(
            success => {
                // console.log('success quiz data >>> ', success.data.results);
                dispatch(successRequestQuizAction(success.data.results));
            },
            error => {
                if (error.response) {
                    console.log('error.response.data', error.msg);
                    dispatch(failureRequestQuizAction(error.msg));
                } else if (error.request) {
                    console.log('error.request', error.request);
                } else {
                    console.log('error.message', error.message);
                }
            }
        )
    }
}