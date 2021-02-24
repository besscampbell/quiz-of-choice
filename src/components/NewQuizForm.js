import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewQuizForm(props){
  const firestore = useFirestore();

  function addQuizToFirestore(event){
    event.preventDefault();
    props.onNewQuizCreate();

    return firestore.collection('quizzes').add(
      {
        quizName: event.target.quizName.value,

        questionOne: event.target.questionOne.value,
        optionOneA: event.target.optionOneA.value,
        optionOneB: event.target.optionOneB.value,
        optionOneC: event.target.optionOneC.value,
        optionOneD: event.target.optionOneD.value,

        questionTwo: event.target.questionTwo.value,
        optionTwoA: event.target.optionTwoA.value,
        optionTwoB: event.target.optionTwoB.value,
        optionTwoC: event.target.optionTwoC.value,
        optionTwoD: event.target.optionTwoD.value,

        questionThree: event.target.questionThree.value,
        optionThreeA: event.target.optionThreeA.value,
        optionThreeB: event.target.optionThreeB.value,
        optionThreeC: event.target.optionThreeC.value,
        optionThreeD: event.target.optionThreeD.value,

        questionFour: event.target.questionFour.value,
        optionFourA: event.target.optionFourA.value,
        optionFourB: event.target.optionFourB.value,
        optionFourC: event.target.optionFourC.value,
        optionFourD: event.target.optionFourD.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addQuizToFirestore}
        buttonText="Create Quiz" />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  onNewQuizCreate: PropTypes.func
}

export default NewQuizForm;