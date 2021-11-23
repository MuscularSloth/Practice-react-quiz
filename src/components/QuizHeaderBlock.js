import React from 'react';
import HeaderUserName from "./header/HeaderUserName";
import HeaderQuizTimer from "./header/HeaderQuizTimer";
import {Box} from "@chakra-ui/react";

function QuizHeaderBlock(props) {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
        >
            <HeaderUserName />
            <HeaderQuizTimer />
        </Box>
    );
}

export default QuizHeaderBlock;