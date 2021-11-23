import React, {useEffect, useState} from 'react';
import {Box, Button} from "@chakra-ui/react";

function QuizContainer({currentQuestionData, handleAnswer}) {

    // console.log('currentQuestionData', currentQuestionData);
    const [answers, setAnswers] = useState([]);

    useEffect(()=>{
        let allAnswers = [currentQuestionData.correct_answer, ...currentQuestionData.incorrect_answers].sort((a, b) => 0.5 - Math.random());
        setAnswers(allAnswers);

    },[currentQuestionData])



    return (
        <Box>
            <Box mb={4}>{currentQuestionData.question}</Box>
            <Box>
                {answers && answers.map((answer)=>{
                    return(
                            <Button colorScheme="blue" mr={4} key={answer} onClick={handleAnswer}>{answer}</Button>
                        )
                })}
            </Box>
        </Box>
    );
}

export default QuizContainer;