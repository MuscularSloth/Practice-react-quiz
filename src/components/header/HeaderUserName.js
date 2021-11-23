import React from 'react';
import {Text} from "@chakra-ui/react";
import {useSelector} from "react-redux";

function HeaderUserName(props) {

    const userInfo = useSelector(state => state.userReducer);

    return (
        <div>
            <Text
                fontSize="md"
                fontWeight="bold"
                color="gray.700"
            >
                Hello, <Text as="span" color="orange.500">{userInfo.userName ? userInfo.userName : 'guest'}</Text>!
            </Text>
        </div>
    );
}

export default HeaderUserName;