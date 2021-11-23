import React, {useEffect, useState} from 'react';
import {Box, Text} from "@chakra-ui/react";
import {useSelector} from "react-redux";

function HeaderQuizTimer(props) {

    const timerInfo = useSelector(state => state.timerReducer);
    const [currentTimer, setCurrentTimer] = useState(timerInfo.currentTimer);

    useEffect(() => {
        setCurrentTimer(timerInfo.currentTimer >= 10 ? timerInfo.currentTimer : '0'+timerInfo.currentTimer)
    }, [timerInfo.currentTimer]);


    return (
        <Box
            fontSize="2xl"
        >
            Quiz Timer <Text as="span" color={timerInfo.currentTimer > 5 ? "black" : "red" }>{currentTimer}</Text>
        </Box>
    );
}

export default HeaderQuizTimer;