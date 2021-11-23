import React, {useEffect, useState} from 'react';
import {Box, Button, Text} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import QuizContainer from "./quiz/QuizContainer";
import {changeTimerAction, resetTimerAction, startTimerAction, stopTimerAction} from "../redux/actions";

function QuizBodyBlock(props) {

    const dispatch = useDispatch();
    const quizInfo = useSelector(state => state.quizReducer);
    const timerInfo = useSelector(state => state.timerReducer);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    const handleQuizStart = () => {
        dispatch(startTimerAction());
        setIsQuizStarted(true);
        setCurrentScore(0);
        setCurrentQuestion(0);

        setIntervalID(
            setInterval(() => {
                dispatch(changeTimerAction());
            }, 1000)
        )
    }

    const handleQuizStop = () => {
        stopQuiz();
    }

    const handleAnswer = (e) => {
        if(e.target.innerText === quizInfo.quiz[currentQuestion].correct_answer){
            setCurrentScore(currentScore+(timerInfo.currentTimer * 100));
        }
        nextQuestion();
    }

    const nextQuestion = () =>{
        if(currentQuestion+1 < quizInfo.quiz.length){
            dispatch(resetTimerAction());
            setCurrentQuestion(currentQuestion+1);
        }else{
            stopQuiz();
        }
    }

    const stopQuiz = () => {
        setIsQuizStarted(false);
        dispatch(stopTimerAction());
        clearInterval(intervalID);
    }

    useEffect(()=>{
        if(timerInfo.currentTimer < 0){
            dispatch(resetTimerAction());
            nextQuestion();
        }
    }, [timerInfo.currentTimer])



    return (
        <Box
            p={4}
        >
            <Text mb={4}>Your current score: {currentScore}</Text>

            {isQuizStarted ?
                <>
                    <QuizContainer currentQuestionData={quizInfo.quiz[currentQuestion]} handleAnswer={handleAnswer} />
                    <Button mt={4} colorScheme="blue" onClick={handleQuizStop}>Stop Quiz</Button>
                </>
                :
                <Button colorScheme="blue" onClick={handleQuizStart}>Start Quiz</Button>
            }
        </Box>
    );
}

export default QuizBodyBlock;