import React, {useEffect, useState} from 'react';
import {Box, Table, TableCaption, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";

function ScoreBoard(props) {

    const scoreboardInfo = useSelector(state => state.scoreboardReducer);
    const [scoreToShow, setScoreToShow] = useState([]);

    useEffect(()=>{
        let sortedScore = scoreboardInfo.scoreboard.sort((a,b) => b.score-a.score);
        let isCurrentAdded = false;
        let tempScoreToShow = sortedScore.map((score, index) => {
            if(index < 5){
                if(score.id === scoreboardInfo.lastStringID) {
                    isCurrentAdded = true;
                }
                return{...score, index: index}
            }

            if(index >=5 && !isCurrentAdded){
                if(score.id === scoreboardInfo.lastStringID) {
                    isCurrentAdded = true;
                    return{...score, index: index}
                }
            }
        }).filter((el) => el)

        console.log('tempScoreToShow >>>', tempScoreToShow)
        setScoreToShow(tempScoreToShow);


    }, [scoreboardInfo.scoreboard])






    return (
        <Box>
            <Table variant="simple">
                <TableCaption>Score Board</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Score</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {scoreToShow.length > 0 ?
                        <>
                        {scoreToShow.map((score)=>{
                            return(
                                <Tr key={score.id} fontWeight={score.id === scoreboardInfo.lastStringID ? 'extrabold' : 'normal' }>
                                    <Td>{score.index + 1}</Td>
                                    <Td>{score.name}</Td>
                                    <Td>{score.score}</Td>
                                </Tr>
                            )
                        })}
                        </>
                        :
                    <Tr>
                        <Td>No data yet</Td>
                        <Td>No data yet</Td>
                    </Tr>
                    }
                </Tbody>
            </Table>
        </Box>
    );
}

export default ScoreBoard;