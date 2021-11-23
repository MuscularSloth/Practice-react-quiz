import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getQuizAsyncAction} from "./redux/asyncActions";
import GetNameBlock from "./components/GetNameBlock";
import QuizHeaderBlock from "./components/QuizHeaderBlock";

import { Box } from "@chakra-ui/react"
import QuizBodyBlock from "./components/QuizBodyBlock";



function App() {

  const quizInfo = useSelector(state => state.quizReducer);
  const userInfo = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
      if(quizInfo.quiz.length < 1){
          dispatch(getQuizAsyncAction())
      }
  }, [])

  return (
    <div className="App">
        <Box
            w="100%"
            p={4}
        >
            <QuizHeaderBlock />
        </Box>
        <Box>
            {userInfo.userName ?
                <QuizBodyBlock />
                :
                <GetNameBlock />
            }
        </Box>
    </div>
  );
}

export default App;
