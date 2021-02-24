import React from "react";
import Quiz from "./Quiz";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function QuizList(props){

  useFirestoreConnect([
    { collection: 'quizzes'}
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if(isLoaded(quizzes)){
    return (
      <React.Fragment>
        {quizzes.map((quiz) => {
          return <Quiz
            whenQuizClicked = {props.onQuizSelection}
            quizName={quiz.quizName}
            questionOne={quiz.questionOne}
            optionOneA={quiz.optionOneA}
            optionOneB={quiz.optionOneB}
            optionOneC={quiz.optionOneC}
            optionOneD={quiz.optionOneD}
            questionTwo={quiz.questionTwo}
            optionTwoA={quiz.optionTwoA}
            optionTwoB={quiz.optionTwoB}
            optionTwoC={quiz.optionTwoC}
            optionTwoD={quiz.optionTwoD}
            questionThree={quiz.questionThree}
            optionThreeA={quiz.optionThreeA}
            optionThreeB={quiz.optionThreeB}
            optionThreeC={quiz.optionThreeC}
            optionThreeD={quiz.optionThreeD}
            questionFour={quiz.questionFour}
            optionFourA={quiz.optionFourA}
            optionFourB={quiz.optionFourB}
            optionFourC={quiz.optionFourC}
            optionFourD={quiz.optionFourD}
            id={quiz.id}
            key={quiz.id} />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizList;