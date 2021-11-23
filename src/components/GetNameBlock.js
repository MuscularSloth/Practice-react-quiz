import React, {useState} from 'react';
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {setUserNameAction} from "../redux/actions";

function GetNameBlock(props) {

    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(setUserNameAction(userName));
    }

    return (
        <Box p={4}>
            <form onSubmit={handleSubmitForm}>
                <FormControl id="username" mb={4}>
                    <FormLabel>Enter your name</FormLabel>
                    <Input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                </FormControl>
                <Button type="submit" colorScheme="blue">Save</Button>
            </form>
        </Box>
    );
}

export default GetNameBlock;